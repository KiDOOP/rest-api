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
var _expressRateLimit = /*#__PURE__*/ _interopRequireDefault(require("express-rate-limit"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = (0, _expressRateLimit.default)({
    windowMs: 15 * 60 * 1000,
    max: 20,
    skipSuccessfulRequests: true,
    message: "Too many requests from this IP, please try again in 15 Minutes!"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9yYXRlTGltaXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmF0ZUxpbWl0IGZyb20gJ2V4cHJlc3MtcmF0ZS1saW1pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHJhdGVMaW1pdCh7XG4gIHdpbmRvd01zOiAxNSAqIDYwICogMTAwMCxcbiAgbWF4OiAyMCxcbiAgc2tpcFN1Y2Nlc3NmdWxSZXF1ZXN0czogdHJ1ZSxcbiAgbWVzc2FnZTogJ1RvbyBtYW55IHJlcXVlc3RzIGZyb20gdGhpcyBJUCwgcGxlYXNlIHRyeSBhZ2FpbiBpbiAxNSBNaW51dGVzIScsXG59KTtcbiJdLCJuYW1lcyI6WyJyYXRlTGltaXQiLCJ3aW5kb3dNcyIsIm1heCIsInNraXBTdWNjZXNzZnVsUmVxdWVzdHMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQSxTQUtHOzs7ZUFMSCxRQUtHOzs7cUVBUG1CLG9CQUFvQjs7Ozs7O0lBRTFDLFFBS0csR0FMWUEsSUFBQUEsaUJBQVMsUUFBQSxFQUFDO0lBQ3ZCQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ3hCQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCQyxPQUFPLEVBQUUsaUVBQWlFO0NBQzNFLENBQUMifQ==