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
var _userController = /*#__PURE__*/ _interopRequireDefault(require("../controllers/user.controller"));
var _auth = /*#__PURE__*/ _interopRequireDefault(require("../middlewares/auth"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var router = (0, _express.Router)();
router.route("/").post((0, _auth.default)(), _userController.default.createUser).get((0, _auth.default)(), _userController.default.getUsers);
router.route("/:userId").get((0, _auth.default)(), _userController.default.getUser).patch((0, _auth.default)(), _userController.default.updateUser).delete((0, _auth.default)(), _userController.default.deleteUser);
var _default = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXInO1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vbWlkZGxld2FyZXMvYXV0aCc7XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyXG4gIC5yb3V0ZSgnLycpXG4gIC5wb3N0KGF1dGgoKSwgdXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcilcbiAgLmdldChhdXRoKCksIHVzZXJDb250cm9sbGVyLmdldFVzZXJzKTtcblxucm91dGVyXG4gIC5yb3V0ZSgnLzp1c2VySWQnKVxuICAuZ2V0KGF1dGgoKSwgdXNlckNvbnRyb2xsZXIuZ2V0VXNlcilcbiAgLnBhdGNoKGF1dGgoKSwgdXNlckNvbnRyb2xsZXIudXBkYXRlVXNlcilcbiAgLmRlbGV0ZShhdXRoKCksIHVzZXJDb250cm9sbGVyLmRlbGV0ZVVzZXIpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJwb3N0IiwiYXV0aCIsInVzZXJDb250cm9sbGVyIiwiY3JlYXRlVXNlciIsImdldCIsImdldFVzZXJzIiwiZ2V0VXNlciIsInBhdGNoIiwidXBkYXRlVXNlciIsImRlbGV0ZSIsImRlbGV0ZVVzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQSxTQUFzQjs7O2VBQXRCLFFBQXNCOzs7dUJBaEJDLFNBQVM7bUVBQ0wsZ0NBQWdDO3lEQUMxQyxxQkFBcUI7Ozs7OztBQUN0QyxJQUFNQSxNQUFNLEdBQUdDLElBQUFBLFFBQU0sT0FBQSxHQUFFLEFBQUM7QUFFeEJELE1BQU0sQ0FDSEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxJQUFJLENBQUNDLElBQUFBLEtBQUksUUFBQSxHQUFFLEVBQUVDLGVBQWMsUUFBQSxDQUFDQyxVQUFVLENBQUMsQ0FDdkNDLEdBQUcsQ0FBQ0gsSUFBQUEsS0FBSSxRQUFBLEdBQUUsRUFBRUMsZUFBYyxRQUFBLENBQUNHLFFBQVEsQ0FBQyxDQUFDO0FBRXhDUixNQUFNLENBQ0hFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FDakJLLEdBQUcsQ0FBQ0gsSUFBQUEsS0FBSSxRQUFBLEdBQUUsRUFBRUMsZUFBYyxRQUFBLENBQUNJLE9BQU8sQ0FBQyxDQUNuQ0MsS0FBSyxDQUFDTixJQUFBQSxLQUFJLFFBQUEsR0FBRSxFQUFFQyxlQUFjLFFBQUEsQ0FBQ00sVUFBVSxDQUFDLENBQ3hDQyxNQUFNLENBQUNSLElBQUFBLEtBQUksUUFBQSxHQUFFLEVBQUVDLGVBQWMsUUFBQSxDQUFDUSxVQUFVLENBQUMsQ0FBQztJQUU3QyxRQUFzQixHQUFQYixNQUFNIn0=