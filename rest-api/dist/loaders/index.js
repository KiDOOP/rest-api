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
var _express = /*#__PURE__*/ _interopRequireDefault(require("./express"));
var _logger = /*#__PURE__*/ _interopRequireDefault(require("./logger"));
var _database = /*#__PURE__*/ _interopRequireDefault(require("./database"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var __generator = ((void 0) && (void 0).__generator) || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var _default = function() {
    var _ref = _asyncToGenerator(function(param) {
        var expressApp, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expressApp = param.expressApp;
                    return [
                        4,
                        (0, _database.default)()
                    ];
                case 1:
                    _state.sent();
                    _logger.default.info("DATABASE CONNECTED");
                    _tmp = {};
                    return [
                        4,
                        (0, _express.default)((_tmp.app = expressApp, _tmp))
                    ];
                case 2:
                    _state.sent();
                    _logger.default.info("EXPRESS LOADED");
                    return [
                        2
                    ];
            }
        });
    });
    return function(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnLi9leHByZXNzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyBleHByZXNzQXBwIH06IHsgZXhwcmVzc0FwcDogRXhwcmVzcy5BcHBsaWNhdGlvbiB9KSA9PiB7XG4gIGF3YWl0IGRhdGFiYXNlKCk7XG4gIGxvZ2dlci5pbmZvKCdEQVRBQkFTRSBDT05ORUNURUQnKTtcblxuICBhd2FpdCBleHByZXNzKHsgYXBwOiBleHByZXNzQXBwIH0pO1xuICBsb2dnZXIuaW5mbygnRVhQUkVTUyBMT0FERUQnKTtcbn07XG4iXSwibmFtZXMiOlsiZXhwcmVzc0FwcCIsImRhdGFiYXNlIiwibG9nZ2VyIiwiaW5mbyIsImV4cHJlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBLFNBTUU7OztlQU5GLFFBTUU7Ozs0REFWa0IsV0FBVzsyREFDWixVQUFVOzZEQUNSLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakMsUUFNRTtlQU5hLGtCQUFBLGdCQUErRDtZQUF0REEsVUFBVTs7OztvQkFBVkEsVUFBVSxTQUFWQSxVQUFVO29CQUNoQzs7d0JBQU1DLElBQUFBLFNBQVEsUUFBQSxHQUFFO3NCQUFBOztvQkFBaEIsYUFBZ0IsQ0FBQztvQkFDakJDLE9BQU0sUUFBQSxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7b0JBRWxDOzt3QkFBTUMsSUFBQUEsUUFBTyxRQUFBLFFBQUdDLEdBQUcsR0FBRUwsVUFBVSxRQUFHO3NCQUFBOztvQkFBbEMsYUFBa0MsQ0FBQztvQkFDbkNFLE9BQU0sUUFBQSxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7O0lBQ2hDLENBQUMsQ0FBQSJ9