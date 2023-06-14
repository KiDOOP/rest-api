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
var _passportJwt = require("passport-jwt");
var _index = /*#__PURE__*/ _interopRequireDefault(require("./index"));
var _constants = require("../config/constants");
var _userModel = /*#__PURE__*/ _interopRequireDefault(require("../models/users/user.model"));
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
var jwtOptions = {
    secretOrKey: _index.default.jwt.secret,
    jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()
};
var jwtVerify = function() {
    var _ref = _asyncToGenerator(function(payload, done) {
        var user, error;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    if (payload.type !== _constants.tokenTypes.ACCESS) {
                        throw new Error("Invalid token type");
                    }
                    return [
                        4,
                        _userModel.default.findById(payload.sub)
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) {
                        return [
                            2,
                            done(null, false)
                        ];
                    }
                    done(null, user);
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    done(error, false);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function jwtVerify(payload, done) {
        return _ref.apply(this, arguments);
    };
}();
var jwtStrategy = new _passportJwt.Strategy(jwtOptions, jwtVerify);
var _default = jwtStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvcGFzc3BvcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgYXMgSnd0U3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IHRva2VuVHlwZXMgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWxzL3VzZXJzL3VzZXIubW9kZWwnO1xuXG5jb25zdCBqd3RPcHRpb25zID0ge1xuICBzZWNyZXRPcktleTogY29uZmlnLmp3dC5zZWNyZXQsXG4gIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxufTtcblxuY29uc3Qgand0VmVyaWZ5ID0gYXN5bmMgKHBheWxvYWQ6IGFueSwgZG9uZTogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHBheWxvYWQudHlwZSAhPT0gdG9rZW5UeXBlcy5BQ0NFU1MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0b2tlbiB0eXBlJyk7XG4gICAgfVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuZmluZEJ5SWQocGF5bG9hZC5zdWIpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgICBkb25lKG51bGwsIHVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRvbmUoZXJyb3IsIGZhbHNlKTtcbiAgfVxufTtcblxuY29uc3Qgand0U3RyYXRlZ3kgPSBuZXcgSnd0U3RyYXRlZ3koand0T3B0aW9ucywgand0VmVyaWZ5KTtcbmV4cG9ydCBkZWZhdWx0IGp3dFN0cmF0ZWd5O1xuIl0sIm5hbWVzIjpbImp3dE9wdGlvbnMiLCJzZWNyZXRPcktleSIsImNvbmZpZyIsImp3dCIsInNlY3JldCIsImp3dEZyb21SZXF1ZXN0IiwiRXh0cmFjdEp3dCIsImZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbiIsImp3dFZlcmlmeSIsInBheWxvYWQiLCJkb25lIiwidXNlciIsImVycm9yIiwidHlwZSIsInRva2VuVHlwZXMiLCJBQ0NFU1MiLCJFcnJvciIsIlVzZXJNb2RlbCIsImZpbmRCeUlkIiwic3ViIiwiand0U3RyYXRlZ3kiLCJKd3RTdHJhdGVneSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBLFNBQTJCOzs7ZUFBM0IsUUFBMkI7OzsyQkExQnlCLGNBQWM7MERBQy9DLFNBQVM7eUJBQ0QscUJBQXFCOzhEQUMxQiw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBTUEsVUFBVSxHQUFHO0lBQ2pCQyxXQUFXLEVBQUVDLE1BQU0sUUFBQSxDQUFDQyxHQUFHLENBQUNDLE1BQU07SUFDOUJDLGNBQWMsRUFBRUMsWUFBVSxXQUFBLENBQUNDLDJCQUEyQixFQUFFO0NBQ3pELEFBQUM7QUFFRixJQUFNQyxTQUFTO2VBQUcsa0JBQUEsU0FBT0MsT0FBWSxFQUFFQyxJQUFTLEVBQUs7WUFLM0NDLElBQUksRUFLSEMsS0FBSzs7Ozs7Ozs7OztvQkFSWixJQUFJSCxPQUFPLENBQUNJLElBQUksS0FBS0MsVUFBVSxXQUFBLENBQUNDLE1BQU0sRUFBRTt3QkFDdEMsTUFBTSxJQUFJQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztvQkFDWTs7d0JBQU1DLFVBQVMsUUFBQSxDQUFDQyxRQUFRLENBQUNULE9BQU8sQ0FBQ1UsR0FBRyxDQUFDO3NCQUFBOztvQkFBNUNSLElBQUksR0FBRyxhQUFxQyxDQUFBO29CQUNsRCxJQUFJLENBQUNBLElBQUksRUFBRTt3QkFDVDs7NEJBQU9ELElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzBCQUFDO29CQUMzQixDQUFDO29CQUNEQSxJQUFJLENBQUMsSUFBSSxFQUFFQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O29CQUNWQyxLQUFLO29CQUNaRixJQUFJLENBQUNFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFFdkIsQ0FBQyxDQUFBO29CQWJLSixTQUFTLENBQVVDLE9BQVksRUFBRUMsSUFBUzs7O0dBYS9DLEFBQUM7QUFFRixJQUFNVSxXQUFXLEdBQUcsSUFBSUMsWUFBVyxTQUFBLENBQUNyQixVQUFVLEVBQUVRLFNBQVMsQ0FBQyxBQUFDO0lBQzNELFFBQTJCLEdBQVpZLFdBQVcifQ==