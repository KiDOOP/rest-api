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
var _httpStatus = /*#__PURE__*/ _interopRequireDefault(require("http-status"));
var _pick = /*#__PURE__*/ _interopRequireDefault(require("../utils/pick"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validate = function(schema) {
    return function(req, res, next) {
        var object = (0, _pick.default)(req, [
            "params",
            "query",
            "body"
        ]);
        var result = schema.safeParse(object);
        if (!result.success) {
            var errorMessage = result.error.issues.map(function(details) {
                return "".concat(details.path[1], " ").concat(details.message);
            }).join(", ");
            return next(new _apiError.default(_httpStatus.default.BAD_REQUEST, errorMessage));
        }
        Object.assign(req, result.data);
        return next();
    };
};
var _default = validate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi4vdXRpbHMvcGljayc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuXG5jb25zdCB2YWxpZGF0ZSA9XG4gIDxULCBPdXRwdXQsIERlZiBleHRlbmRzIHouWm9kVHlwZURlZiwgSW5wdXQgPSBPdXRwdXQ+KFxuICAgIHNjaGVtYTogei5ab2RUeXBlPE91dHB1dCwgRGVmLCBJbnB1dD5cbiAgKSA9PlxuICAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCBvYmplY3QgPSBwaWNrKHJlcSwgWydwYXJhbXMnLCAncXVlcnknLCAnYm9keSddKTtcbiAgICBjb25zdCByZXN1bHQgPSBzY2hlbWEuc2FmZVBhcnNlKG9iamVjdCk7XG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gcmVzdWx0LmVycm9yLmlzc3Vlc1xuICAgICAgICAubWFwKChkZXRhaWxzKSA9PiBgJHtkZXRhaWxzLnBhdGhbMV19ICR7ZGV0YWlscy5tZXNzYWdlfWApXG4gICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgcmV0dXJuIG5leHQobmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsIGVycm9yTWVzc2FnZSkpO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHJlcSwgcmVzdWx0LmRhdGEpO1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIl0sIm5hbWVzIjpbInZhbGlkYXRlIiwic2NoZW1hIiwicmVxIiwicmVzIiwibmV4dCIsIm9iamVjdCIsInBpY2siLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJpc3N1ZXMiLCJtYXAiLCJkZXRhaWxzIiwicGF0aCIsIm1lc3NhZ2UiLCJqb2luIiwiQXBpRXJyb3IiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkEsU0FBd0I7OztlQUF4QixRQUF3Qjs7OytEQXJCRCxhQUFhO3lEQUNuQixlQUFlOzZEQUNYLG1CQUFtQjs7Ozs7O0FBRXhDLElBQU1BLFFBQVEsR0FDWixTQUNFQyxNQUFxQztXQUV2QyxTQUFDQyxHQUFZLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0IsRUFBSztRQUNuRCxJQUFNQyxNQUFNLEdBQUdDLElBQUFBLEtBQUksUUFBQSxFQUFDSixHQUFHLEVBQUU7WUFBQyxRQUFRO1lBQUUsT0FBTztZQUFFLE1BQU07U0FBQyxDQUFDLEFBQUM7UUFDdEQsSUFBTUssTUFBTSxHQUFHTixNQUFNLENBQUNPLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDLEFBQUM7UUFDeEMsSUFBSSxDQUFDRSxNQUFNLENBQUNFLE9BQU8sRUFBRTtZQUNuQixJQUFNQyxZQUFZLEdBQUdILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNLENBQ3JDQyxHQUFHLENBQUMsU0FBQ0MsT0FBTzt1QkFBSyxBQUFDLEVBQUEsQ0FBcUJBLE1BQWUsQ0FBbENBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUMsQ0FBa0IsQ0FBQSxNQUFBLENBQWhCRCxPQUFPLENBQUNFLE9BQU8sQ0FBRTthQUFBLENBQUMsQ0FDekRDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztZQUNkLE9BQU9iLElBQUksQ0FBQyxJQUFJYyxTQUFRLFFBQUEsQ0FBQ0MsV0FBVSxRQUFBLENBQUNDLFdBQVcsRUFBRVYsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0RXLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDcEIsR0FBRyxFQUFFSyxNQUFNLENBQUNnQixJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPbkIsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUFBLEFBQUM7SUFFSixRQUF3QixHQUFUSixRQUFRIn0=