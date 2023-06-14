"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // const verifyEmail = async (verifyEmailToken: string) => {
//   try {
//     const verifyEmailTokenDoc = await tokenService.verifyToken(
//       verifyEmailToken,
//       tokenTypes.VERIFY_EMAIL
//     );
//     const user = await userService.getUserById(
//       String(verifyEmailTokenDoc.user)
//     );
//     if (!user) {
//       throw new Error();
//     }
//     await TokenModel.deleteMany({
//       user: user.id,
//       type: tokenTypes.VERIFY_EMAIL,
//     });
//     await userService.updateUserById(user.id, { isEmailVerified: true });
//   } catch (error) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Email verification failed');
//   }
// };
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _httpStatus = /*#__PURE__*/ _interopRequireDefault(require("http-status"));
var _tokenService = /*#__PURE__*/ _interopRequireDefault(require("./token.service"));
var _userService = /*#__PURE__*/ _interopRequireDefault(require("./user.service"));
var _tokenModel = /*#__PURE__*/ _interopRequireDefault(require("../models/token/token.model"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
var _constants = require("../config/constants");
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
var loginUserWithEmailAndPassword = function() {
    var _ref = _asyncToGenerator(function(email, password) {
        var user, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _userService.default.getUserByEmail(email)
                    ];
                case 1:
                    user = _state.sent();
                    _tmp = !user;
                    if (_tmp) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        user.isPasswordMatch(password)
                    ];
                case 2:
                    _tmp = !_state.sent();
                    _state.label = 3;
                case 3:
                    if (_tmp) {
                        throw new _apiError.default(_httpStatus.default.UNAUTHORIZED, "Incorrect email or password");
                    }
                    return [
                        2,
                        user
                    ];
            }
        });
    });
    return function loginUserWithEmailAndPassword(email, password) {
        return _ref.apply(this, arguments);
    };
}();
var logout = function() {
    var _ref = _asyncToGenerator(function(refreshToken) {
        var refreshTokenDoc, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _tmp = {};
                    return [
                        4,
                        _tokenModel.default.findOne((_tmp.token = refreshToken, _tmp.type = _constants.tokenTypes.REFRESH, _tmp.blacklisted = false, _tmp))
                    ];
                case 1:
                    refreshTokenDoc = _state.sent();
                    if (!refreshTokenDoc) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "Not found");
                    }
                    return [
                        4,
                        refreshTokenDoc.remove()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function logout(refreshToken) {
        return _ref.apply(this, arguments);
    };
}();
var refreshAuth = function() {
    var _ref = _asyncToGenerator(function(refreshToken) {
        var refreshTokenDoc, user, error;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        _tokenService.default.verifyToken(refreshToken, _constants.tokenTypes.REFRESH)
                    ];
                case 1:
                    refreshTokenDoc = _state.sent();
                    return [
                        4,
                        _userService.default.getUserById(String(refreshTokenDoc.user))
                    ];
                case 2:
                    user = _state.sent();
                    if (!user) {
                        throw new Error();
                    }
                    return [
                        4,
                        refreshTokenDoc.remove()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        _tokenService.default.generateAuthTokens(user)
                    ];
                case 4:
                    error = _state.sent();
                    throw new _apiError.default(_httpStatus.default.UNAUTHORIZED, "Please authenticate");
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function refreshAuth(refreshToken) {
        return _ref.apply(this, arguments);
    };
}();
var resetPassword = function() {
    var _ref = _asyncToGenerator(function(resetPasswordToken, newPassword) {
        var resetPasswordTokenDoc, user, _tmp, _tmp1, error;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        _tokenService.default.verifyToken(resetPasswordToken, _constants.tokenTypes.RESET_PASSWORD)
                    ];
                case 1:
                    resetPasswordTokenDoc = _state.sent();
                    return [
                        4,
                        _userService.default.getUserById(String(resetPasswordTokenDoc.user))
                    ];
                case 2:
                    user = _state.sent();
                    if (!user) {
                        throw new Error();
                    }
                    _tmp = {};
                    return [
                        4,
                        _userService.default.updateUserById(user.id, (_tmp.password = newPassword, _tmp))
                    ];
                case 3:
                    _state.sent();
                    _tmp1 = {};
                    return [
                        4,
                        _tokenModel.default.deleteMany((_tmp1.user = user.id, _tmp1.type = _constants.tokenTypes.RESET_PASSWORD, _tmp1))
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    error = _state.sent();
                    throw new _apiError.default(_httpStatus.default.UNAUTHORIZED, "Password reset failed");
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return function resetPassword(resetPasswordToken, newPassword) {
        return _ref.apply(this, arguments);
    };
}();
var _default = {
    loginUserWithEmailAndPassword: loginUserWithEmailAndPassword,
    logout: logout,
    refreshAuth: refreshAuth,
    resetPassword: resetPassword
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHRva2VuU2VydmljZSBmcm9tICcuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCBUb2tlbk1vZGVsIGZyb20gJy4uL21vZGVscy90b2tlbi90b2tlbi5tb2RlbCc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuXG5jb25zdCBsb2dpblVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IGFzeW5jIChcbiAgZW1haWw6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlFbWFpbChlbWFpbCk7XG4gIGlmICghdXNlciB8fCAhKGF3YWl0IHVzZXIuaXNQYXNzd29yZE1hdGNoKHBhc3N3b3JkKSkpIHtcbiAgICB0aHJvdyBuZXcgQXBpRXJyb3IoaHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsICdJbmNvcnJlY3QgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgfVxuICByZXR1cm4gdXNlcjtcbn07XG5cbmNvbnN0IGxvZ291dCA9IGFzeW5jIChyZWZyZXNoVG9rZW46IHN0cmluZykgPT4ge1xuICBjb25zdCByZWZyZXNoVG9rZW5Eb2MgPSBhd2FpdCBUb2tlbk1vZGVsLmZpbmRPbmUoe1xuICAgIHRva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgdHlwZTogdG9rZW5UeXBlcy5SRUZSRVNILFxuICAgIGJsYWNrbGlzdGVkOiBmYWxzZSxcbiAgfSk7XG4gIGlmICghcmVmcmVzaFRva2VuRG9jKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuTk9UX0ZPVU5ELCAnTm90IGZvdW5kJyk7XG4gIH1cbiAgYXdhaXQgcmVmcmVzaFRva2VuRG9jLnJlbW92ZSgpO1xufTtcblxuY29uc3QgcmVmcmVzaEF1dGggPSBhc3luYyAocmVmcmVzaFRva2VuOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW5Eb2MgPSBhd2FpdCB0b2tlblNlcnZpY2UudmVyaWZ5VG9rZW4oXG4gICAgICByZWZyZXNoVG9rZW4sXG4gICAgICB0b2tlblR5cGVzLlJFRlJFU0hcbiAgICApO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChTdHJpbmcocmVmcmVzaFRva2VuRG9jLnVzZXIpKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICBhd2FpdCByZWZyZXNoVG9rZW5Eb2MucmVtb3ZlKCk7XG4gICAgcmV0dXJuIHRva2VuU2VydmljZS5nZW5lcmF0ZUF1dGhUb2tlbnModXNlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELCAnUGxlYXNlIGF1dGhlbnRpY2F0ZScpO1xuICB9XG59O1xuXG5jb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgKFxuICByZXNldFBhc3N3b3JkVG9rZW46IHN0cmluZyxcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzZXRQYXNzd29yZFRva2VuRG9jID0gYXdhaXQgdG9rZW5TZXJ2aWNlLnZlcmlmeVRva2VuKFxuICAgICAgcmVzZXRQYXNzd29yZFRva2VuLFxuICAgICAgdG9rZW5UeXBlcy5SRVNFVF9QQVNTV09SRFxuICAgICk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKFxuICAgICAgU3RyaW5nKHJlc2V0UGFzc3dvcmRUb2tlbkRvYy51c2VyKVxuICAgICk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlVXNlckJ5SWQodXNlci5pZCwgeyBwYXNzd29yZDogbmV3UGFzc3dvcmQgfSk7XG4gICAgYXdhaXQgVG9rZW5Nb2RlbC5kZWxldGVNYW55KHtcbiAgICAgIHVzZXI6IHVzZXIuaWQsXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VUX1BBU1NXT1JELFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLlVOQVVUSE9SSVpFRCwgJ1Bhc3N3b3JkIHJlc2V0IGZhaWxlZCcpO1xuICB9XG59O1xuXG4vLyBjb25zdCB2ZXJpZnlFbWFpbCA9IGFzeW5jICh2ZXJpZnlFbWFpbFRva2VuOiBzdHJpbmcpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCB2ZXJpZnlFbWFpbFRva2VuRG9jID0gYXdhaXQgdG9rZW5TZXJ2aWNlLnZlcmlmeVRva2VuKFxuLy8gICAgICAgdmVyaWZ5RW1haWxUb2tlbixcbi8vICAgICAgIHRva2VuVHlwZXMuVkVSSUZZX0VNQUlMXG4vLyAgICAgKTtcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQoXG4vLyAgICAgICBTdHJpbmcodmVyaWZ5RW1haWxUb2tlbkRvYy51c2VyKVxuLy8gICAgICk7XG4vLyAgICAgaWYgKCF1c2VyKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbi8vICAgICB9XG4vLyAgICAgYXdhaXQgVG9rZW5Nb2RlbC5kZWxldGVNYW55KHtcbi8vICAgICAgIHVzZXI6IHVzZXIuaWQsXG4vLyAgICAgICB0eXBlOiB0b2tlblR5cGVzLlZFUklGWV9FTUFJTCxcbi8vICAgICB9KTtcbi8vICAgICBhd2FpdCB1c2VyU2VydmljZS51cGRhdGVVc2VyQnlJZCh1c2VyLmlkLCB7IGlzRW1haWxWZXJpZmllZDogdHJ1ZSB9KTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoaHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsICdFbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkJyk7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW5Vc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIGxvZ291dCxcbiAgcmVmcmVzaEF1dGgsXG4gIHJlc2V0UGFzc3dvcmQsXG4gIC8vICAgdmVyaWZ5RW1haWwsXG59O1xuIl0sIm5hbWVzIjpbImxvZ2luVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJ1c2VyU2VydmljZSIsImdldFVzZXJCeUVtYWlsIiwiaXNQYXNzd29yZE1hdGNoIiwiQXBpRXJyb3IiLCJodHRwU3RhdHVzIiwiVU5BVVRIT1JJWkVEIiwibG9nb3V0IiwicmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuRG9jIiwiVG9rZW5Nb2RlbCIsImZpbmRPbmUiLCJ0b2tlbiIsInR5cGUiLCJ0b2tlblR5cGVzIiwiUkVGUkVTSCIsImJsYWNrbGlzdGVkIiwiTk9UX0ZPVU5EIiwicmVtb3ZlIiwicmVmcmVzaEF1dGgiLCJlcnJvciIsInRva2VuU2VydmljZSIsInZlcmlmeVRva2VuIiwiZ2V0VXNlckJ5SWQiLCJTdHJpbmciLCJFcnJvciIsImdlbmVyYXRlQXV0aFRva2VucyIsInJlc2V0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkVG9rZW4iLCJuZXdQYXNzd29yZCIsInJlc2V0UGFzc3dvcmRUb2tlbkRvYyIsIlJFU0VUX1BBU1NXT1JEIiwidXBkYXRlVXNlckJ5SWQiLCJpZCIsImRlbGV0ZU1hbnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdFQSw0REFBNEQ7QUFDNUQsVUFBVTtBQUNWLGtFQUFrRTtBQUNsRSwwQkFBMEI7QUFD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