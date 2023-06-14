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
var _tokenSchema = /*#__PURE__*/ _interopRequireDefault(require("./token.schema"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TokenModel = (0, _mongoose.model)("token", _tokenSchema.default);
var _default = TokenModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdG9rZW4vdG9rZW4ubW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBJVG9rZW5Eb2N1bWVudCwgSVRva2VuTW9kZWwgfSBmcm9tICcuL3Rva2VuLnR5cGVzJztcbmltcG9ydCBUb2tlblNjaGVtYSBmcm9tICcuL3Rva2VuLnNjaGVtYSc7XG5jb25zdCBUb2tlbk1vZGVsID0gbW9kZWw8SVRva2VuRG9jdW1lbnQsIElUb2tlbk1vZGVsPigndG9rZW4nLCBUb2tlblNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBUb2tlbk1vZGVsO1xuIl0sIm5hbWVzIjpbIlRva2VuTW9kZWwiLCJtb2RlbCIsIlRva2VuU2NoZW1hIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQSxTQUEwQjs7O2VBQTFCLFFBQTBCOzs7d0JBSkosVUFBVTtnRUFFUixnQkFBZ0I7Ozs7OztBQUN4QyxJQUFNQSxVQUFVLEdBQUdDLElBQUFBLFNBQUssTUFBQSxFQUE4QixPQUFPLEVBQUVDLFlBQVcsUUFBQSxDQUFDLEFBQUM7SUFDNUUsUUFBMEIsR0FBWEYsVUFBVSJ9