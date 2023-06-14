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
var _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
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
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
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
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
var database;
function initializeClient() {
    return _initializeClient.apply(this, arguments);
}
function _initializeClient() {
    _initializeClient = _asyncToGenerator(function() {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _mongoose.default.connect(_config.default.mongoose.url, _config.default.mongoose.options)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        _mongoose.default.connection
                    ];
            }
        });
    });
    return _initializeClient.apply(this, arguments);
}
var _default = /*#__PURE__*/ _asyncToGenerator(function() {
    return __generator(this, function(_state) {
        switch(_state.label){
            case 0:
                if (!!database) return [
                    3,
                    2
                ];
                return [
                    4,
                    initializeClient()
                ];
            case 1:
                database = _state.sent();
                _state.label = 2;
            case 2:
                return [
                    2,
                    database
                ];
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBkYXRhYmFzZTogbW9uZ29vc2UuQ29ubmVjdGlvbjtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUNsaWVudCgpOiBQcm9taXNlPG1vbmdvb3NlLkNvbm5lY3Rpb24+IHtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChjb25maWcubW9uZ29vc2UudXJsLCBjb25maWcubW9uZ29vc2Uub3B0aW9ucyk7XG4gIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGlmICghZGF0YWJhc2UpIHtcbiAgICBkYXRhYmFzZSA9IGF3YWl0IGluaXRpYWxpemVDbGllbnQoKTtcbiAgfVxuICByZXR1cm4gZGF0YWJhc2U7XG59O1xuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwiaW5pdGlhbGl6ZUNsaWVudCIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImNvbmZpZyIsInVybCIsIm9wdGlvbnMiLCJjb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQSxTQUtFOzs7ZUFMRixRQUtFOzs7NkRBZm1CLFVBQVU7MkRBQ1osV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFJQSxRQUFRLEFBQXFCLEFBQUM7U0FFbkJDLGdCQUFnQjtXQUFoQkEsaUJBQWdCOztTQUFoQkEsaUJBQWdCO0lBQWhCQSxpQkFBZ0IsR0FBL0Isa0JBQUEsV0FBZ0U7Ozs7b0JBQzlEOzt3QkFBTUMsU0FBUSxRQUFBLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTSxRQUFBLENBQUNGLFFBQVEsQ0FBQ0csR0FBRyxFQUFFRCxPQUFNLFFBQUEsQ0FBQ0YsUUFBUSxDQUFDSSxPQUFPLENBQUM7c0JBQUE7O29CQUFwRSxhQUFvRSxDQUFDO29CQUNyRTs7d0JBQU9KLFNBQVEsUUFBQSxDQUFDSyxVQUFVO3NCQUFDOzs7SUFDN0IsQ0FBQyxDQUFBO1dBSGNOLGlCQUFnQjs7SUFLL0IsUUFLRSxpQkFMYSxrQkFBQSxXQUFZOzs7O3FCQUNyQixDQUFDRCxRQUFRLEVBQVQ7OztrQkFBUztnQkFDQTs7b0JBQU1DLGdCQUFnQixFQUFFO2tCQUFBOztnQkFBbkNELFFBQVEsR0FBRyxhQUF3QixDQUFDOzs7Z0JBRXRDOztvQkFBT0EsUUFBUTtrQkFBQzs7O0FBQ2xCLENBQUMsQ0FBQSJ9