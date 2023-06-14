"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    errorConverter: function() {
        return errorConverter;
    },
    errorHandler: function() {
        return errorHandler;
    }
});
var _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
var _logger = /*#__PURE__*/ _interopRequireDefault(require("../loaders/logger"));
var _httpStatus = /*#__PURE__*/ _interopRequireDefault(require("http-status"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var handleCastErrorDB = function(err) {
    var message = "Invalid ".concat(err.path, ": ").concat(err.value, ".");
    return message;
};
var handleDuplicateFieldsDB = function(err) {
    var value = err.message.match(/(["'])(\\?.)*?\1/)[0];
    var message = "".concat(value, " already exists, Please use another value!");
    return message;
};
var handleValidationErrorDB = function(err) {
    var errors = Object.values(err.errors).map(function(el) {
        return el.message;
    });
    var message = "".concat(errors.join(". "));
    return message;
};
var errorConverter = function(err, req, res, next) {
    var error = _objectSpread({}, err);
    error.message = err.message;
    if (error.name === "CastError") error.message = handleCastErrorDB(error);
    if (error.code === 11000) // TODO check this , its not working properly
    error.message = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") error.message = handleValidationErrorDB(error);
    if (!(err instanceof _apiError.default)) {
        var statusCode = err instanceof _apiError.default || err instanceof _mongoose.default.Error ? _httpStatus.default.BAD_REQUEST : _httpStatus.default.INTERNAL_SERVER_ERROR;
        var message = error.message || _httpStatus.default[statusCode];
        error = new _apiError.default(statusCode, message, false, err.stack);
    }
    next(error);
};
var errorHandler = function(err, req, res, next) {
    var statusCode = err.statusCode, message = err.message;
    if (_config.default.env === "production" && !err.isOperational) {
        statusCode = _httpStatus.default.INTERNAL_SERVER_ERROR;
        message = _httpStatus.default[_httpStatus.default.INTERNAL_SERVER_ERROR];
    }
    res.locals.errorMessage = err.message;
    var response = _objectSpread({
        code: statusCode,
        message: message,
        status: err.status
    }, _config.default.env === "development" && {
        error: err
    }, _config.default.env === "development" && {
        stack: err.stack
    });
    if (_config.default.env === "development") {
        _logger.default.error(err);
    }
    res.status(statusCode).send(response);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi9sb2FkZXJzL2xvZ2dlcic7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuXG5jb25zdCBoYW5kbGVDYXN0RXJyb3JEQiA9IChlcnI6IGFueSkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gYEludmFsaWQgJHtlcnIucGF0aH06ICR7ZXJyLnZhbHVlfS5gO1xuICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmNvbnN0IGhhbmRsZUR1cGxpY2F0ZUZpZWxkc0RCID0gKGVycjogYW55KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZXJyLm1lc3NhZ2UubWF0Y2goLyhbXCInXSkoXFxcXD8uKSo/XFwxLylbMF07XG4gIGNvbnN0IG1lc3NhZ2UgPSBgJHt2YWx1ZX0gYWxyZWFkeSBleGlzdHMsIFBsZWFzZSB1c2UgYW5vdGhlciB2YWx1ZSFgO1xuICByZXR1cm4gbWVzc2FnZTtcbn07XG5cbmNvbnN0IGhhbmRsZVZhbGlkYXRpb25FcnJvckRCID0gKGVycjogYW55KSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IE9iamVjdC52YWx1ZXMoZXJyLmVycm9ycykubWFwKChlbDogYW55KSA9PiBlbC5tZXNzYWdlKTtcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Vycm9ycy5qb2luKCcuICcpfWA7XG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuY29uc3QgZXJyb3JDb252ZXJ0ZXIgPSAoXG4gIGVycjogRXJyb3IgfCBBcGlFcnJvciB8IG1vbmdvb3NlLkVycm9yLFxuICByZXE6IFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvblxuKSA9PiB7XG4gIGxldCBlcnJvciA9IHsgLi4uZXJyIH07XG4gIGVycm9yLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgaWYgKGVycm9yLm5hbWUgPT09ICdDYXN0RXJyb3InKSBlcnJvci5tZXNzYWdlID0gaGFuZGxlQ2FzdEVycm9yREIoZXJyb3IpO1xuICBpZiAoZXJyb3IuY29kZSA9PT0gMTEwMDApXG4gICAgLy8gVE9ETyBjaGVjayB0aGlzICwgaXRzIG5vdCB3b3JraW5nIHByb3Blcmx5XG4gICAgZXJyb3IubWVzc2FnZSA9IGhhbmRsZUR1cGxpY2F0ZUZpZWxkc0RCKGVycm9yKTtcbiAgaWYgKGVycm9yLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKVxuICAgIGVycm9yLm1lc3NhZ2UgPSBoYW5kbGVWYWxpZGF0aW9uRXJyb3JEQihlcnJvcik7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEFwaUVycm9yKSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPVxuICAgICAgZXJyIGluc3RhbmNlb2YgQXBpRXJyb3IgfHwgZXJyIGluc3RhbmNlb2YgbW9uZ29vc2UuRXJyb3JcbiAgICAgICAgPyBodHRwU3RhdHVzLkJBRF9SRVFVRVNUXG4gICAgICAgIDogaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgKGh0dHBTdGF0dXNbc3RhdHVzQ29kZV0gYXMgc3RyaW5nKTtcbiAgICBlcnJvciA9IG5ldyBBcGlFcnJvcihzdGF0dXNDb2RlLCBtZXNzYWdlLCBmYWxzZSwgZXJyLnN0YWNrKTtcbiAgfVxuICBuZXh0KGVycm9yKTtcbn07XG5cbmNvbnN0IGVycm9ySGFuZGxlciA9IChcbiAgZXJyOiBBcGlFcnJvcixcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICBsZXQgeyBzdGF0dXNDb2RlLCBtZXNzYWdlIH0gPSBlcnI7XG4gIGlmIChjb25maWcuZW52ID09PSAncHJvZHVjdGlvbicgJiYgIWVyci5pc09wZXJhdGlvbmFsKSB7XG4gICAgc3RhdHVzQ29kZSA9IGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuICAgIG1lc3NhZ2UgPSBodHRwU3RhdHVzW2h0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SXSBhcyBzdHJpbmc7XG4gIH1cblxuICByZXMubG9jYWxzLmVycm9yTWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgIGNvZGU6IHN0YXR1c0NvZGUsXG4gICAgbWVzc2FnZSxcbiAgICBzdGF0dXM6IGVyci5zdGF0dXMsXG4gICAgLi4uKGNvbmZpZy5lbnYgPT09ICdkZXZlbG9wbWVudCcgJiYgeyBlcnJvcjogZXJyIH0pLFxuICAgIC4uLihjb25maWcuZW52ID09PSAnZGV2ZWxvcG1lbnQnICYmIHsgc3RhY2s6IGVyci5zdGFjayB9KSxcbiAgfTtcblxuICBpZiAoY29uZmlnLmVudiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICB9XG5cbiAgcmVzLnN0YXR1cyhzdGF0dXNDb2RlKS5zZW5kKHJlc3BvbnNlKTtcbn07XG5cbmV4cG9ydCB7IGVycm9yQ29udmVydGVyLCBlcnJvckhhbmRsZXIgfTtcbiJdLCJuYW1lcyI6WyJlcnJvckNvbnZlcnRlciIsImVycm9ySGFuZGxlciIsImhhbmRsZUNhc3RFcnJvckRCIiwiZXJyIiwibWVzc2FnZSIsInBhdGgiLCJ2YWx1ZSIsImhhbmRsZUR1cGxpY2F0ZUZpZWxkc0RCIiwibWF0Y2giLCJoYW5kbGVWYWxpZGF0aW9uRXJyb3JEQiIsImVycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImVsIiwiam9pbiIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsIm5hbWUiLCJjb2RlIiwiQXBpRXJyb3IiLCJzdGF0dXNDb2RlIiwibW9uZ29vc2UiLCJFcnJvciIsImh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsInN0YWNrIiwiY29uZmlnIiwiZW52IiwiaXNPcGVyYXRpb25hbCIsImxvY2FscyIsImVycm9yTWVzc2FnZSIsInJlc3BvbnNlIiwic3RhdHVzIiwibG9nZ2VyIiwic2VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBOEVTQSxjQUFjO2VBQWRBLGNBQWM7O0lBQUVDLFlBQVk7ZUFBWkEsWUFBWTs7OzZEQTlFaEIsVUFBVTsyREFDWixXQUFXOzJEQUNYLG1CQUFtQjsrREFDZixhQUFhOzZEQUVmLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFDQyxHQUFRLEVBQUs7SUFDdEMsSUFBTUMsT0FBTyxHQUFHLEFBQUMsVUFBUSxDQUFlRCxNQUFTLENBQXRCQSxHQUFHLENBQUNFLElBQUksRUFBQyxJQUFFLENBQVksQ0FBQSxNQUFDLENBQVhGLEdBQUcsQ0FBQ0csS0FBSyxFQUFDLEdBQUMsQ0FBQyxBQUFDO0lBQ3JELE9BQU9GLE9BQU8sQ0FBQztBQUNqQixDQUFDLEFBQUM7QUFFRixJQUFNRyx1QkFBdUIsR0FBRyxTQUFDSixHQUFRLEVBQUs7SUFDNUMsSUFBTUcsS0FBSyxHQUFHSCxHQUFHLENBQUNDLE9BQU8sQ0FBQ0ksS0FBSyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQUFBQztJQUN2RCxJQUFNSixPQUFPLEdBQUcsQUFBQyxFQUFBLENBQVEsTUFBMEMsQ0FBaERFLEtBQUssRUFBQyw0Q0FBMEMsQ0FBQyxBQUFDO0lBQ3JFLE9BQU9GLE9BQU8sQ0FBQztBQUNqQixDQUFDLEFBQUM7QUFFRixJQUFNSyx1QkFBdUIsR0FBRyxTQUFDTixHQUFRLEVBQUs7SUFDNUMsSUFBTU8sTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQU0s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