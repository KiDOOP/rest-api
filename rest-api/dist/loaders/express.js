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
var _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
var _helmet = /*#__PURE__*/ _interopRequireDefault(require("helmet"));
var _expressMongoSanitize = /*#__PURE__*/ _interopRequireDefault(require("express-mongo-sanitize"));
var _passport = /*#__PURE__*/ _interopRequireDefault(require("passport"));
var _error = require("../middlewares/error");
var _rateLimiter = /*#__PURE__*/ _interopRequireDefault(require("../middlewares/rateLimiter"));
var _passport1 = /*#__PURE__*/ _interopRequireDefault(require("../config/passport"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
var _morgan = /*#__PURE__*/ _interopRequireDefault(require("./morgan"));
var _routes = /*#__PURE__*/ _interopRequireDefault(require("../routes"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var xss = require("xss-clean");
var compression = require("compression");
var cors = require("cors");
var httpStatus = require("http-status");
var _default = function(param) {
    var app = param.app;
    if (_config.default.env !== "test") {
        app.use(_morgan.default.successHandler);
        app.use(_morgan.default.errorHandler);
    }
    // set security HTTP headers
    app.use((0, _helmet.default)());
    // parse json request body with limit
    app.use(_express.default.json({
        limit: "100kb"
    }));
    // parse urlencoded request body
    app.use(_express.default.urlencoded({
        extended: true,
        limit: "10kb"
    }));
    // sanitize request data
    app.use(xss());
    app.use((0, _expressMongoSanitize.default)());
    // gzip compression
    app.use(compression());
    // enable cors
    app.use(cors());
    // jwt authentication
    app.use(_passport.default.initialize());
    _passport.default.use("jwt", _passport1.default);
    // limit repeated failed requests to auth endpoints
    if (_config.default.env === "production") {
        app.use("/auth", _rateLimiter.default);
    }
    app.get("/api/welcome", function(req, res) {
        res.json({
            success: true,
            message: "API successfully called"
        });
    });
    app.use("/", _routes.default);
    // send back a 404 error for any unknown api request
    app.use(function(req, res, next) {
        next(new _apiError.default(httpStatus.NOT_FOUND, "Not found"));
    });
    // convert error to ApiError, if needed
    app.use(_error.errorConverter);
    // handle error
    app.use(_error.errorHandler);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL2V4cHJlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgbW9uZ29TYW5pdGl6ZSBmcm9tICdleHByZXNzLW1vbmdvLXNhbml0aXplJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBlcnJvckNvbnZlcnRlciwgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMvZXJyb3InO1xuaW1wb3J0IGF1dGhMaW1pdGVyIGZyb20gJy4uL21pZGRsZXdhcmVzL3JhdGVMaW1pdGVyJztcbmltcG9ydCBqd3RTdHJhdGVneSBmcm9tICcuLi9jb25maWcvcGFzc3BvcnQnO1xuaW1wb3J0IEFwaUVycm9yIGZyb20gJy4uL3V0aWxzL0FwaUVycm9yJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnLi9tb3JnYW4nO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnO1xuY29uc3QgeHNzID0gcmVxdWlyZSgneHNzLWNsZWFuJyk7XG5jb25zdCBjb21wcmVzc2lvbiA9IHJlcXVpcmUoJ2NvbXByZXNzaW9uJyk7XG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xuY29uc3QgaHR0cFN0YXR1cyA9IHJlcXVpcmUoJ2h0dHAtc3RhdHVzJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGFwcCB9OiB7IGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbiB9KSA9PiB7XG4gIGlmIChjb25maWcuZW52ICE9PSAndGVzdCcpIHtcbiAgICBhcHAudXNlKG1vcmdhbi5zdWNjZXNzSGFuZGxlcik7XG4gICAgYXBwLnVzZShtb3JnYW4uZXJyb3JIYW5kbGVyKTtcbiAgfVxuXG4gIC8vIHNldCBzZWN1cml0eSBIVFRQIGhlYWRlcnNcbiAgYXBwLnVzZShoZWxtZXQoKSk7XG5cbiAgLy8gcGFyc2UganNvbiByZXF1ZXN0IGJvZHkgd2l0aCBsaW1pdFxuICBhcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiAnMTAwa2InIH0pKTtcblxuICAvLyBwYXJzZSB1cmxlbmNvZGVkIHJlcXVlc3QgYm9keVxuICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlLCBsaW1pdDogJzEwa2InIH0pKTtcblxuICAvLyBzYW5pdGl6ZSByZXF1ZXN0IGRhdGFcbiAgYXBwLnVzZSh4c3MoKSk7XG4gIGFwcC51c2UobW9uZ29TYW5pdGl6ZSgpKTtcblxuICAvLyBnemlwIGNvbXByZXNzaW9uXG4gIGFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbiAgLy8gZW5hYmxlIGNvcnNcbiAgYXBwLnVzZShjb3JzKCkpO1xuXG4gIC8vIGp3dCBhdXRoZW50aWNhdGlvblxuICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG4gIHBhc3Nwb3J0LnVzZSgnand0Jywgand0U3RyYXRlZ3kpO1xuXG4gIC8vIGxpbWl0IHJlcGVhdGVkIGZhaWxlZCByZXF1ZXN0cyB0byBhdXRoIGVuZHBvaW50c1xuICBpZiAoY29uZmlnLmVudiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXBwLnVzZSgnL2F1dGgnLCBhdXRoTGltaXRlcik7XG4gIH1cbiAgYXBwLmdldCgnL2FwaS93ZWxjb21lJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICdBUEkgc3VjY2Vzc2Z1bGx5IGNhbGxlZCcsXG4gICAgfSk7XG4gIH0pO1xuICBhcHAudXNlKCcvJywgcm91dGVzKTtcblxuICAvLyBzZW5kIGJhY2sgYSA0MDQgZXJyb3IgZm9yIGFueSB1bmtub3duIGFwaSByZXF1ZXN0XG4gIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgbmV4dChuZXcgQXBpRXJyb3IoaHR0cFN0YXR1cy5OT1RfRk9VTkQsICdOb3QgZm91bmQnKSk7XG4gIH0pO1xuXG4gIC8vIGNvbnZlcnQgZXJyb3IgdG8gQXBpRXJyb3IsIGlmIG5lZWRlZFxuICBhcHAudXNlKGVycm9yQ29udmVydGVyKTtcblxuICAvLyBoYW5kbGUgZXJyb3JcbiAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xufTtcbiJdLCJuYW1lcyI6WyJ4c3MiLCJyZXF1aXJlIiwiY29tcHJlc3Npb24iLCJjb3JzIiwiaHR0cFN0YXR1cyIsImFwcCIsImNvbmZpZyIsImVudiIsInVzZSIsIm1vcmdhbiIsInN1Y2Nlc3NIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwiaGVsbWV0IiwiZXhwcmVzcyIsImpzb24iLCJsaW1pdCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm1vbmdvU2FuaXRpemUiLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJqd3RTdHJhdGVneSIsImF1dGhMaW1pdGVyIiwiZ2V0IiwicmVxIiwicmVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyb3V0ZXMiLCJuZXh0IiwiQXBpRXJyb3IiLCJOT1RfRk9VTkQiLCJlcnJvckNvbnZlcnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBLFNBbURFOzs7ZUFuREYsUUFtREU7Ozs0REFuRWtCLFNBQVM7MkRBQ1YsUUFBUTt5RUFDRCx3QkFBd0I7NkRBQzdCLFVBQVU7cUJBQ2Msc0JBQXNCO2dFQUMzQyw0QkFBNEI7OERBQzVCLG9CQUFvQjs2REFDdkIsbUJBQW1COzJEQUNyQixXQUFXOzJEQUNYLFVBQVU7MkRBQ1YsV0FBVzs7Ozs7O0FBQzlCLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQyxBQUFDO0FBQ2pDLElBQU1DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxBQUFDO0FBQzNDLElBQU1FLElBQUksR0FBR0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxBQUFDO0FBQzdCLElBQU1HLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQWEsQ0FBQyxBQUFD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