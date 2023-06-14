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
var _express = require("express");
var _authController = /*#__PURE__*/ _interopRequireDefault(require("../controllers/auth.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var router = (0, _express.Router)();
router.post("/register", _authController.default.register);
router.post("/login", _authController.default.login);
router.post("/refresh-tokens", _authController.default.refreshTokens);
router.post("/reset-password", _authController.default.resetPassword);
var _default = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC5yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBhdXRoQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKTtcbnJvdXRlci5wb3N0KCcvbG9naW4nLCBhdXRoQ29udHJvbGxlci5sb2dpbik7XG5yb3V0ZXIucG9zdCgnL3JlZnJlc2gtdG9rZW5zJywgYXV0aENvbnRyb2xsZXIucmVmcmVzaFRva2Vucyk7XG5yb3V0ZXIucG9zdCgnL3Jlc2V0LXBhc3N3b3JkJywgYXV0aENvbnRyb2xsZXIucmVzZXRQYXNzd29yZCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwiYXV0aENvbnRyb2xsZXIiLCJyZWdpc3RlciIsImxvZ2luIiwicmVmcmVzaFRva2VucyIsInJlc2V0UGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBLFNBQXNCOzs7ZUFBdEIsUUFBc0I7Ozt1QkFWQyxTQUFTO21FQUNMLGdDQUFnQzs7Ozs7O0FBRTNELElBQU1BLE1BQU0sR0FBR0MsSUFBQUEsUUFBTSxPQUFBLEdBQUUsQUFBQztBQUV4QkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFQyxlQUFjLFFBQUEsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7QUFDbERKLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRUMsZUFBYyxRQUFBLENBQUNFLEtBQUssQ0FBQyxDQUFDO0FBQzVDTCxNQUFNLENBQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRUMsZUFBYyxRQUFBLENBQUNHLGFBQWEsQ0FBQyxDQUFDO0FBQzdETixNQUFNLENBQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRUMsZUFBYyxRQUFBLENBQUNJLGFBQWEsQ0FBQyxDQUFDO0lBRTdELFFBQXNCLEdBQVBQLE1BQU0ifQ==