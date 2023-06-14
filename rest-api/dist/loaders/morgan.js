"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
var _logger = /*#__PURE__*/ _interopRequireDefault(require("./logger"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_morgan.default.token("message", function(req, res) {
    return res.locals.errorMessage || "";
});
var getIpFormat = function() {
    return _config.default.env === "production" ? ":remote-addr - " : "";
};
var successResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms");
var errorResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms - message: :message");
var successHandler = (0, _morgan.default)(successResponseFormat, {
    skip: function(req, res) {
        return res.statusCode >= 400;
    },
    stream: {
        write: function(message) {
            return _logger.default.info(message.trim());
        }
    }
});
var errorHandler = (0, _morgan.default)(errorResponseFormat, {
    skip: function(req, res) {
        return res.statusCode < 400;
    },
    stream: {
        write: function(message) {
            return _logger.default.error(message.trim());
        }
    }
});
var _default = {
    successHandler: successHandler,
    errorHandler: errorHandler
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL21vcmdhbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbm1vcmdhbi50b2tlbihcbiAgJ21lc3NhZ2UnLFxuICAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiByZXMubG9jYWxzLmVycm9yTWVzc2FnZSB8fCAnJ1xuKTtcblxuY29uc3QgZ2V0SXBGb3JtYXQgPSAoKSA9PlxuICBjb25maWcuZW52ID09PSAncHJvZHVjdGlvbicgPyAnOnJlbW90ZS1hZGRyIC0gJyA6ICcnO1xuY29uc3Qgc3VjY2Vzc1Jlc3BvbnNlRm9ybWF0ID0gYCR7Z2V0SXBGb3JtYXQoKX06bWV0aG9kIDp1cmwgOnN0YXR1cyAtIDpyZXNwb25zZS10aW1lIG1zYDtcbmNvbnN0IGVycm9yUmVzcG9uc2VGb3JtYXQgPSBgJHtnZXRJcEZvcm1hdCgpfTptZXRob2QgOnVybCA6c3RhdHVzIC0gOnJlc3BvbnNlLXRpbWUgbXMgLSBtZXNzYWdlOiA6bWVzc2FnZWA7XG5cbmNvbnN0IHN1Y2Nlc3NIYW5kbGVyID0gbW9yZ2FuKHN1Y2Nlc3NSZXNwb25zZUZvcm1hdCwge1xuICBza2lwOiAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiByZXMuc3RhdHVzQ29kZSA+PSA0MDAsXG4gIHN0cmVhbTogeyB3cml0ZTogKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nZ2VyLmluZm8obWVzc2FnZS50cmltKCkpIH0sXG59KTtcblxuY29uc3QgZXJyb3JIYW5kbGVyID0gbW9yZ2FuKGVycm9yUmVzcG9uc2VGb3JtYXQsIHtcbiAgc2tpcDogKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4gcmVzLnN0YXR1c0NvZGUgPCA0MDAsXG4gIHN0cmVhbTogeyB3cml0ZTogKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nZ2VyLmVycm9yKG1lc3NhZ2UudHJpbSgpKSB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3VjY2Vzc0hhbmRsZXIsIGVycm9ySGFuZGxlciB9O1xuIl0sIm5hbWVzIjpbIm1vcmdhbiIsInRva2VuIiwicmVxIiwicmVzIiwibG9jYWxzIiwiZXJyb3JNZXNzYWdlIiwiZ2V0SXBGb3JtYXQiLCJjb25maWciLCJlbnYiLCJzdWNjZXNzUmVzcG9uc2VGb3JtYXQiLCJlcnJvclJlc3BvbnNlRm9ybWF0Iiwic3VjY2Vzc0hhbmRsZXIiLCJza2lwIiwic3RhdHVzQ29kZSIsInN0cmVhbSIsIndyaXRlIiwibWVzc2FnZSIsImxvZ2dlciIsImluZm8iLCJ0cmltIiwiZXJyb3JIYW5kbGVyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQSxTQUFnRDs7O2VBQWhELFFBQWdEOzs7MkRBekI3QixRQUFROzJEQUVSLFdBQVc7MkRBQ1gsVUFBVTs7Ozs7O0FBRTdCQSxPQUFNLFFBQUEsQ0FBQ0MsS0FBSyxDQUNWLFNBQVMsRUFDVCxTQUFDQyxHQUFZLEVBQUVDLEdBQWE7V0FBS0EsR0FBRyxDQUFDQyxNQUFNLENBQUNDLFlBQVksSUFBSSxFQUFFO0NBQUEsQ0FDL0QsQ0FBQztBQUVGLElBQU1DLFdBQVcsR0FBRztXQUNsQkMsT0FBTSxRQUFBLENBQUNDLEdBQUcsS0FBSyxZQUFZLEdBQUcsaUJBQWlCLEdBQUcsRUFBRTtDQUFBLEFBQUM7QUFDdkQsSUFBTUMscUJBQXFCLEdBQUcsQUFBQyxFQUFBLENBQWdCLE1BQXdDLENBQXRESCxXQUFXLEVBQUUsRUFBQywwQ0FBd0MsQ0FBQyxBQUFDO0FBQ3pGLElBQU1JLG1CQUFtQixHQUFHLEFBQUMsRUFBQSxDQUFnQixNQUE0RCxDQUExRUosV0FBVyxFQUFFLEVBQUMsOERBQTRELENBQUMsQUFBQztBQUUzRyxJQUFNSyxjQUFjLEdBQUdYLElBQUFBLE9BQU0sUUFBQSxFQUFDUyxxQkFBcUIsRUFBRTtJQUNuREcsSUFBSSxFQUFFLFNBQUNWLEdBQVksRUFBRUMsR0FBYTtlQUFLQSxHQUFHLENBQUNVLFVBQVUsSUFBSSxHQUFHO0tBQUE7SUFDNURDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUUsU0FBQ0MsT0FBZTttQkFBS0MsT0FBTSxRQUFBLENBQUNDLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxJQUFJLEVBQUUsQ0FBQztTQUFBO0tBQUU7Q0FDcEUsQ0FBQyxBQUFDO0FBRUgsSUFBTUMsWUFBWSxHQUFHcEIsSUFBQUEsT0FBTSxRQUFBLEVBQUNVLG1CQUFtQixFQUFFO0lBQy9DRSxJQUFJLEVBQUUsU0FBQ1YsR0FBWSxFQUFFQyxHQUFhO2VBQUtBLEdBQUcsQ0FBQ1UsVUFBVSxHQUFHLEdBQUc7S0FBQTtJQUMzREMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRSxTQUFDQyxPQUFlO21CQUFLQyxPQUFNLFFBQUEsQ0FBQ0ksS0FBSyxDQUFDTCxPQUFPLENBQUNHLElBQUksRUFBRSxDQUFDO1NBQUE7S0FBRTtDQUNyRSxDQUFDLEFBQUM7SUFFSCxRQUFnRCxHQUFqQztJQUFFUixjQUFjLEVBQWRBLGNBQWM7SUFBRVMsWUFBWSxFQUFaQSxZQUFZO0NBQUUifQ==