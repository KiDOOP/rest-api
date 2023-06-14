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
var _mongoose = require("mongoose");
var _userSchema = /*#__PURE__*/ _interopRequireDefault(require("./user.schema"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var UserModel = (0, _mongoose.model)("user", _userSchema.default);
var _default = UserModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlcnMvdXNlci5tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IElVc2VyRG9jdW1lbnQsIElVc2VyTW9kZWwgfSBmcm9tICcuL3VzZXIudHlwZXMnO1xuaW1wb3J0IFVzZXJTY2hlbWEgZnJvbSAnLi91c2VyLnNjaGVtYSc7XG5cbmNvbnN0IFVzZXJNb2RlbCA9IG1vZGVsPElVc2VyRG9jdW1lbnQsIElVc2VyTW9kZWw+KCd1c2VyJywgVXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7XG4iXSwibmFtZXMiOlsiVXNlck1vZGVsIiwibW9kZWwiLCJVc2VyU2NoZW1hIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQSxTQUF5Qjs7O2VBQXpCLFFBQXlCOzs7d0JBTEgsVUFBVTsrREFFVCxlQUFlOzs7Ozs7QUFFdEMsSUFBTUEsU0FBUyxHQUFHQyxJQUFBQSxTQUFLLE1BQUEsRUFBNEIsTUFBTSxFQUFFQyxXQUFVLFFBQUEsQ0FBQyxBQUFDO0lBQ3ZFLFFBQXlCLEdBQVZGLFNBQVMifQ==