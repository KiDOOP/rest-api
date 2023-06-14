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
var _winston = /*#__PURE__*/ _interopRequireDefault(require("winston"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var enumerateErrorFormat = _winston.default.format(function(info) {
    if (info instanceof Error) {
        Object.assign(info, {
            message: info.stack
        });
    }
    return info;
});
var logger = _winston.default.createLogger({
    level: _config.default.env === "development" ? "debug" : "info",
    format: _winston.default.format.combine(enumerateErrorFormat(), _config.default.env === "development" ? _winston.default.format.colorize() : _winston.default.format.uncolorize(), _winston.default.format.splat(), _winston.default.format.printf(function(param) {
        var level = param.level, message = param.message;
        return "".concat(level, ": ").concat(message);
    })),
    transports: [
        new _winston.default.transports.Console({
            stderrLevels: [
                "error"
            ]
        }), 
    ]
});
var _default = logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL2xvZ2dlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZW51bWVyYXRlRXJyb3JGb3JtYXQgPSB3aW5zdG9uLmZvcm1hdCgoaW5mbykgPT4ge1xuICBpZiAoaW5mbyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbmZvLCB7IG1lc3NhZ2U6IGluZm8uc3RhY2sgfSk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59KTtcblxuY29uc3QgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICBsZXZlbDogY29uZmlnLmVudiA9PT0gJ2RldmVsb3BtZW50JyA/ICdkZWJ1ZycgOiAnaW5mbycsXG4gIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgICBlbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgIGNvbmZpZy5lbnYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAgID8gd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKVxuICAgICAgOiB3aW5zdG9uLmZvcm1hdC51bmNvbG9yaXplKCksXG4gICAgd2luc3Rvbi5mb3JtYXQuc3BsYXQoKSxcbiAgICB3aW5zdG9uLmZvcm1hdC5wcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UgfSkgPT4gYCR7bGV2ZWx9OiAke21lc3NhZ2V9YClcbiAgKSxcbiAgdHJhbnNwb3J0czogW1xuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICBzdGRlcnJMZXZlbHM6IFsnZXJyb3InXSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXSwibmFtZXMiOlsiZW51bWVyYXRlRXJyb3JGb3JtYXQiLCJ3aW5zdG9uIiwiZm9ybWF0IiwiaW5mbyIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwibWVzc2FnZSIsInN0YWNrIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJjb25maWciLCJlbnYiLCJjb21iaW5lIiwiY29sb3JpemUiLCJ1bmNvbG9yaXplIiwic3BsYXQiLCJwcmludGYiLCJ0cmFuc3BvcnRzIiwiQ29uc29sZSIsInN0ZGVyckxldmVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkJBLFNBQXNCOzs7ZUFBdEIsUUFBc0I7Ozs0REEzQkYsU0FBUzsyREFDVixXQUFXOzs7Ozs7QUFFOUIsSUFBTUEsb0JBQW9CLEdBQUdDLFFBQU8sUUFBQSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSSxFQUFLO0lBQ3BELElBQUlBLElBQUksWUFBWUMsS0FBSyxFQUFFO1FBQ3pCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0gsSUFBSSxFQUFFO1lBQUVJLE9BQU8sRUFBRUosSUFBSSxDQUFDSyxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxPQUFPTCxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMsQUFBQztBQUVILElBQU1NLE1BQU0sR0FBR1IsUUFBTyxRQUFBLENBQUNTLFlBQVksQ0FBQztJQUNsQ0MsS0FBSyxFQUFFQyxPQUFNLFFBQUEsQ0FBQ0MsR0FBRyxLQUFLLGFBQWEsR0FBRyxPQUFPLEdBQUcsTUFBTTtJQUN0RFgsTUFBTSxFQUFFRCxRQUFPLFFBQUEsQ0FBQ0MsTUFBTSxDQUFDWSxPQUFPLENBQzVCZCxvQkFBb0IsRUFBRSxFQUN0QlksT0FBTSxRQUFBLENBQUNDLEdBQUcsS0FBSyxhQUFhLEdBQ3hCWixRQUFPLFFBQUEsQ0FBQ0MsTUFBTSxDQUFDYSxRQUFRLEVBQUUsR0FDekJkLFFBQU8sUUFBQSxDQUFDQyxNQUFNLENBQUNjLFVBQVUsRUFBRSxFQUMvQmYsUUFBTyxRQUFBLENBQUNDLE1BQU0sQ0FBQ2UsS0FBSyxFQUFFLEVBQ3RCaEIsUUFBTyxRQUFBLENBQUNDLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQztZQUFHUCxLQUFLLFNBQUxBLEtBQUssRUFBRUosT0FBTyxTQUFQQSxPQUFPO2VBQU8sQUFBQyxFQUFBLENBQVlBLE1BQU8sQ0FBakJJLEtBQUssRUFBQyxJQUFFLENBQVUsQ0FBQSxNQUFBLENBQVJKLE9BQU8sQ0FBRTtLQUFBLENBQUMsQ0FDdEU7SUFDRFksVUFBVSxFQUFFO1FBQ1YsSUFBSWxCLFFBQU8sUUFBQSxDQUFDa0IsVUFBVSxDQUFDQyxPQUFPLENBQUM7WUFDN0JDLFlBQVksRUFBRTtnQkFBQyxPQUFPO2FBQUM7U0FDeEIsQ0FBQztLQUNIO0NBQ0YsQ0FBQyxBQUFDO0lBRUgsUUFBc0IsR0FBUFosTUFBTSJ9