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
var _testController = /*#__PURE__*/ _interopRequireDefault(require("../controllers/test.controller"));
var _auth = /*#__PURE__*/ _interopRequireDefault(require("../middlewares/auth"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var router = (0, _express.Router)();
router.route("/").post((0, _auth.default)(), _testController.default.createTest).get((0, _auth.default)(), _testController.default.getTests);
router.route("/:testId").get((0, _auth.default)(), _testController.default.getTest).patch((0, _auth.default)(), _testController.default.updateTest).delete((0, _auth.default)(), _testController.default.deleteTest);
router.route("/submit-test/:testId").post((0, _auth.default)(), _testController.default.submitTest);
var _default = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdGVzdC5yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB0ZXN0Q29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy90ZXN0LmNvbnRyb2xsZXInO1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vbWlkZGxld2FyZXMvYXV0aCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xucm91dGVyXG4gIC5yb3V0ZSgnLycpXG4gIC5wb3N0KGF1dGgoKSwgdGVzdENvbnRyb2xsZXIuY3JlYXRlVGVzdClcbiAgLmdldChhdXRoKCksIHRlc3RDb250cm9sbGVyLmdldFRlc3RzKTtcblxucm91dGVyXG4gIC5yb3V0ZSgnLzp0ZXN0SWQnKVxuICAuZ2V0KGF1dGgoKSwgdGVzdENvbnRyb2xsZXIuZ2V0VGVzdClcbiAgLnBhdGNoKGF1dGgoKSwgdGVzdENvbnRyb2xsZXIudXBkYXRlVGVzdClcbiAgLmRlbGV0ZShhdXRoKCksIHRlc3RDb250cm9sbGVyLmRlbGV0ZVRlc3QpO1xuXG5yb3V0ZXIucm91dGUoJy9zdWJtaXQtdGVzdC86dGVzdElkJykucG9zdChhdXRoKCksIHRlc3RDb250cm9sbGVyLnN1Ym1pdFRlc3QpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJwb3N0IiwiYXV0aCIsInRlc3RDb250cm9sbGVyIiwiY3JlYXRlVGVzdCIsImdldCIsImdldFRlc3RzIiwiZ2V0VGVzdCIsInBhdGNoIiwidXBkYXRlVGVzdCIsImRlbGV0ZSIsImRlbGV0ZVRlc3QiLCJzdWJtaXRUZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkEsU0FBc0I7OztlQUF0QixRQUFzQjs7O3VCQWxCQyxTQUFTO21FQUNMLGdDQUFnQzt5REFDMUMscUJBQXFCOzs7Ozs7QUFFdEMsSUFBTUEsTUFBTSxHQUFHQyxJQUFBQSxRQUFNLE9BQUEsR0FBRSxBQUFDO0FBQ3hCRCxNQUFNLENBQ0hFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVkMsSUFBSSxDQUFDQyxJQUFBQSxLQUFJLFFBQUEsR0FBRSxFQUFFQyxlQUFjLFFBQUEsQ0FBQ0MsVUFBVSxDQUFDLENBQ3ZDQyxHQUFHLENBQUNILElBQUFBLEtBQUksUUFBQSxHQUFFLEVBQUVDLGVBQWMsUUFBQSxDQUFDRyxRQUFRLENBQUMsQ0FBQztBQUV4Q1IsTUFBTSxDQUNIRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQ2pCSyxHQUFHLENBQUNILElBQUFBLEtBQUksUUFBQSxHQUFFLEVBQUVDLGVBQWMsUUFBQSxDQUFDSSxPQUFPLENBQUMsQ0FDbkNDLEtBQUssQ0FBQ04sSUFBQUEsS0FBSSxRQUFBLEdBQUUsRUFBRUMsZUFBYyxRQUFBLENBQUNNLFVBQVUsQ0FBQyxDQUN4Q0MsTUFBTSxDQUFDUixJQUFBQSxLQUFJLFFBQUEsR0FBRSxFQUFFQyxlQUFjLFFBQUEsQ0FBQ1EsVUFBVSxDQUFDLENBQUM7QUFFN0NiLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLElBQUksQ0FBQ0MsSUFBQUEsS0FBSSxRQUFBLEdBQUUsRUFBRUMsZUFBYyxRQUFBLENBQUNTLFVBQVUsQ0FBQyxDQUFDO0lBRTdFLFFBQXNCLEdBQVBkLE1BQU0ifQ==