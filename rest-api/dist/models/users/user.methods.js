"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setLastUpdated: function() {
        return setLastUpdated;
    },
    isPasswordMatch: function() {
        return isPasswordMatch;
    }
});
var _bcrypt = /*#__PURE__*/ _interopRequireDefault(require("bcrypt"));
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
function setLastUpdated() {
    return _setLastUpdated.apply(this, arguments);
}
function _setLastUpdated() {
    _setLastUpdated = _asyncToGenerator(function() {
        var now;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    now = new Date();
                    if (!(!this.lastUpdated || this.lastUpdated < now)) return [
                        3,
                        2
                    ];
                    this.lastUpdated = now;
                    return [
                        4,
                        this.save()
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _setLastUpdated.apply(this, arguments);
}
function isPasswordMatch(password) {
    return _isPasswordMatch.apply(this, arguments);
}
function _isPasswordMatch() {
    _isPasswordMatch = _asyncToGenerator(function(password) {
        var user;
        return __generator(this, function(_state) {
            user = this;
            return [
                2,
                _bcrypt.default.compare(password, user.password)
            ];
        });
    });
    return _isPasswordMatch.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlcnMvdXNlci5tZXRob2RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IElVc2VyRG9jdW1lbnQgfSBmcm9tICcuL3VzZXIudHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0TGFzdFVwZGF0ZWQodGhpczogSVVzZXJEb2N1bWVudCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBpZiAoIXRoaXMubGFzdFVwZGF0ZWQgfHwgdGhpcy5sYXN0VXBkYXRlZCA8IG5vdykge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBub3c7XG4gICAgYXdhaXQgdGhpcy5zYXZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzUGFzc3dvcmRNYXRjaChcbiAgdGhpczogSVVzZXJEb2N1bWVudCxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHVzZXIgPSB0aGlzO1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xufVxuIl0sIm5hbWVzIjpbInNldExhc3RVcGRhdGVkIiwiaXNQYXNzd29yZE1hdGNoIiwibm93IiwiRGF0ZSIsImxhc3RVcGRhdGVkIiwic2F2ZSIsInBhc3N3b3JkIiwidXNlciIsImJjcnlwdCIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUdzQkEsY0FBYztlQUFkQSxjQUFjOztJQVFkQyxlQUFlO2VBQWZBLGVBQWU7OzsyREFYbEIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdMRCxjQUFjO1dBQWRBLGVBQWM7O1NBQWRBLGVBQWM7SUFBZEEsZUFBYyxHQUE3QixrQkFBQSxXQUFrRTtZQUNqRUUsR0FBRzs7OztvQkFBSEEsR0FBRyxHQUFHLElBQUlDLElBQUksRUFBRSxDQUFDO3lCQUNuQixDQUFBLENBQUMsSUFBSSxDQUFDQyxXQUFXLElBQUksSUFBSSxDQUFDQSxXQUFXLEdBQUdGLEdBQUcsQ0FBQSxFQUEzQzs7O3NCQUEyQztvQkFDN0MsSUFBSSxDQUFDRSxXQUFXLEdBQUdGLEdBQUcsQ0FBQztvQkFDdkI7O3dCQUFNLElBQUksQ0FBQ0csSUFBSSxFQUFFO3NCQUFBOztvQkFBakIsYUFBaUIsQ0FBQzs7Ozs7Ozs7SUFFdEIsQ0FBQyxDQUFBO1dBTnFCTCxlQUFjOztTQVFkQyxlQUFlLENBRW5DSyxRQUFnQjtXQUZJTCxnQkFBZTs7U0FBZkEsZ0JBQWU7SUFBZkEsZ0JBQWUsR0FBOUIsa0JBQUEsU0FFTEssUUFBZ0IsRUFDRTtZQUNaQyxJQUFJOztZQUFKQSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCOztnQkFBT0MsT0FBTSxRQUFBLENBQUNDLE9BQU8sQ0FBQ0gsUUFBUSxFQUFFQyxJQUFJLENBQUNELFFBQVEsQ0FBQztjQUFDOztJQUNqRCxDQUFDLENBQUE7V0FOcUJMLGdCQUFlIn0=