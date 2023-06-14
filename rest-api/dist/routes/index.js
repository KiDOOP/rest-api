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
var _authRoute = /*#__PURE__*/ _interopRequireDefault(require("./auth.route"));
var _userRoute = /*#__PURE__*/ _interopRequireDefault(require("./user.route"));
var _testRoute = /*#__PURE__*/ _interopRequireDefault(require("./test.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var router = (0, _express.Router)();
var defaultRoutes = [
    {
        path: "/auth",
        route: _authRoute.default
    },
    {
        path: "/users",
        route: _userRoute.default
    },
    {
        path: "/tests",
        route: _testRoute.default
    }, 
];
defaultRoutes.forEach(function(route) {
    router.use(route.path, route.route);
});
var _default = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYXV0aFJvdXRlIGZyb20gJy4vYXV0aC5yb3V0ZSc7XG5pbXBvcnQgdXNlclJvdXRlIGZyb20gJy4vdXNlci5yb3V0ZSc7XG5pbXBvcnQgdGVzdFJvdXRlIGZyb20gJy4vdGVzdC5yb3V0ZSc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5jb25zdCBkZWZhdWx0Um91dGVzID0gW1xuICB7IHBhdGg6ICcvYXV0aCcsIHJvdXRlOiBhdXRoUm91dGUgfSxcbiAgeyBwYXRoOiAnL3VzZXJzJywgcm91dGU6IHVzZXJSb3V0ZSB9LFxuICB7IHBhdGg6ICcvdGVzdHMnLCByb3V0ZTogdGVzdFJvdXRlIH0sXG5dO1xuXG5kZWZhdWx0Um91dGVzLmZvckVhY2goKHJvdXRlKSA9PiB7XG4gIHJvdXRlci51c2Uocm91dGUucGF0aCwgcm91dGUucm91dGUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJkZWZhdWx0Um91dGVzIiwicGF0aCIsInJvdXRlIiwiYXV0aFJvdXRlIiwidXNlclJvdXRlIiwidGVzdFJvdXRlIiwiZm9yRWFjaCIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBLFNBQXNCOzs7ZUFBdEIsUUFBc0I7Ozt1QkFqQkMsU0FBUzs4REFDVixjQUFjOzhEQUNkLGNBQWM7OERBQ2QsY0FBYzs7Ozs7O0FBRXBDLElBQU1BLE1BQU0sR0FBR0MsSUFBQUEsUUFBTSxPQUFBLEdBQUUsQUFBQztBQUV4QixJQUFNQyxhQUFhLEdBQUc7SUFDcEI7UUFBRUMsSUFBSSxFQUFFLE9BQU87UUFBRUMsS0FBSyxFQUFFQyxVQUFTLFFBQUE7S0FBRTtJQUNuQztRQUFFRixJQUFJLEVBQUUsUUFBUTtRQUFFQyxLQUFLLEVBQUVFLFVBQVMsUUFBQTtLQUFFO0lBQ3BDO1FBQUVILElBQUksRUFBRSxRQUFRO1FBQUVDLEtBQUssRUFBRUcsVUFBUyxRQUFBO0tBQUU7Q0FDckMsQUFBQztBQUVGTCxhQUFhLENBQUNNLE9BQU8sQ0FBQyxTQUFDSixLQUFLLEVBQUs7SUFDL0JKLE1BQU0sQ0FBQ1MsR0FBRyxDQUFDTCxLQUFLLENBQUNELElBQUksRUFBRUMsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQXNCLEdBQVBKLE1BQU0ifQ==