"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // const sendVerificationEmail = catchAsync(async (req: Request, res: Response) => {
//   const verifyEmailToken = await tokenService.generateVerifyEmailToken(
//     req.user
//   );
//   await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
//   res.status(httpStatus.NO_CONTENT).send();
// });
// const verifyEmail = catchAsync(async (req: Request, res: Response) => {
//   if (typeof req.query.token !== 'string')
//     return res.status(httpStatus.BAD_REQUEST).send();
//   await authService.verifyEmail(req.query.token);
//   res.status(httpStatus.NO_CONTENT).send();
// });
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _httpStatus = /*#__PURE__*/ _interopRequireDefault(require("http-status"));
var _catchAsync = /*#__PURE__*/ _interopRequireDefault(require("../utils/CatchAsync"));
var _services = require("../services");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
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
var register = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var user, tokens, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.userService.createUser(req.body)
                    ];
                case 1:
                    user = _state.sent();
                    return [
                        4,
                        _services.tokenService.generateAuthTokens(user)
                    ];
                case 2:
                    tokens = _state.sent();
                    _tmp = {};
                    res.status(_httpStatus.default.CREATED).send((_tmp.user = user, _tmp.tokens = tokens, _tmp));
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
var login = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var _body, email, password, user, tokens, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _body = req.body, email = _body.email, password = _body.password;
                    return [
                        4,
                        _services.authService.loginUserWithEmailAndPassword(email, password)
                    ];
                case 1:
                    user = _state.sent();
                    return [
                        4,
                        _services.tokenService.generateAuthTokens(user)
                    ];
                case 2:
                    tokens = _state.sent();
                    _tmp = {};
                    res.send((_tmp.user = user, _tmp.tokens = tokens, _tmp));
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
var logout = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.authService.logout(req.body.refreshToken)
                    ];
                case 1:
                    _state.sent();
                    res.status(_httpStatus.default.NO_CONTENT).send();
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
var refreshTokens = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var tokens, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.authService.refreshAuth(req.body.refreshToken)
                    ];
                case 1:
                    tokens = _state.sent();
                    _tmp = {};
                    res.send(_objectSpread(_tmp, tokens));
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
// const forgotPassword = catchAsync(async (req, res) => {
//   const resetPasswordToken = await tokenService.generateResetPasswordToken(
//     req.body.email
//   );
//   await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
//   res.status(httpStatus.NO_CONTENT).send();
// });
var resetPassword = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (typeof req.query.token !== "string") return [
                        2,
                        res.status(_httpStatus.default.BAD_REQUEST).send()
                    ];
                    return [
                        4,
                        _services.authService.resetPassword(req.query.token, req.body.password)
                    ];
                case 1:
                    _state.sent();
                    res.status(_httpStatus.default.NO_CONTENT).send();
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
var _default = {
    register: register,
    login: login,
    logout: logout,
    refreshTokens: refreshTokens,
    //   forgotPassword,
    resetPassword: resetPassword
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjYXRjaEFzeW5jIGZyb20gJy4uL3V0aWxzL0NhdGNoQXN5bmMnO1xuaW1wb3J0IHsgYXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlLCB0b2tlblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IHJlZ2lzdGVyID0gY2F0Y2hBc3luYyhhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jcmVhdGVVc2VyKHJlcS5ib2R5KTtcbiAgY29uc3QgdG9rZW5zID0gYXdhaXQgdG9rZW5TZXJ2aWNlLmdlbmVyYXRlQXV0aFRva2Vucyh1c2VyKTtcbiAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLkNSRUFURUQpLnNlbmQoeyB1c2VyLCB0b2tlbnMgfSk7XG59KTtcblxuY29uc3QgbG9naW4gPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW5Vc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgY29uc3QgdG9rZW5zID0gYXdhaXQgdG9rZW5TZXJ2aWNlLmdlbmVyYXRlQXV0aFRva2Vucyh1c2VyKTtcbiAgcmVzLnNlbmQoeyB1c2VyLCB0b2tlbnMgfSk7XG59KTtcblxuY29uc3QgbG9nb3V0ID0gY2F0Y2hBc3luYyhhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGF3YWl0IGF1dGhTZXJ2aWNlLmxvZ291dChyZXEuYm9keS5yZWZyZXNoVG9rZW4pO1xuICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9fQ09OVEVOVCkuc2VuZCgpO1xufSk7XG5cbmNvbnN0IHJlZnJlc2hUb2tlbnMgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdG9rZW5zID0gYXdhaXQgYXV0aFNlcnZpY2UucmVmcmVzaEF1dGgocmVxLmJvZHkucmVmcmVzaFRva2VuKTtcbiAgcmVzLnNlbmQoeyAuLi50b2tlbnMgfSk7XG59KTtcblxuLy8gY29uc3QgZm9yZ290UGFzc3dvcmQgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICBjb25zdCByZXNldFBhc3N3b3JkVG9rZW4gPSBhd2FpdCB0b2tlblNlcnZpY2UuZ2VuZXJhdGVSZXNldFBhc3N3b3JkVG9rZW4oXG4vLyAgICAgcmVxLmJvZHkuZW1haWxcbi8vICAgKTtcbi8vICAgYXdhaXQgZW1haWxTZXJ2aWNlLnNlbmRSZXNldFBhc3N3b3JkRW1haWwocmVxLmJvZHkuZW1haWwsIHJlc2V0UGFzc3dvcmRUb2tlbik7XG4vLyAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT19DT05URU5UKS5zZW5kKCk7XG4vLyB9KTtcblxuY29uc3QgcmVzZXRQYXNzd29yZCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAodHlwZW9mIHJlcS5xdWVyeS50b2tlbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuc2VuZCgpO1xuICBhd2FpdCBhdXRoU2VydmljZS5yZXNldFBhc3N3b3JkKHJlcS5xdWVyeS50b2tlbiwgcmVxLmJvZHkucGFzc3dvcmQpO1xuICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9fQ09OVEVOVCkuc2VuZCgpO1xufSk7XG5cbi8vIGNvbnN0IHNlbmRWZXJpZmljYXRpb25FbWFpbCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuLy8gICBjb25zdCB2ZXJpZnlFbWFpbFRva2VuID0gYXdhaXQgdG9rZW5TZXJ2aWNlLmdlbmVyYXRlVmVyaWZ5RW1haWxUb2tlbihcbi8vICAgICByZXEudXNlclxuLy8gICApO1xuLy8gICBhd2FpdCBlbWFpbFNlcnZpY2Uuc2VuZFZlcmlmaWNhdGlvbkVtYWlsKHJlcS51c2VyLmVtYWlsLCB2ZXJpZnlFbWFpbFRva2VuKTtcbi8vICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk5PX0NPTlRFTlQpLnNlbmQoKTtcbi8vIH0pO1xuXG4vLyBjb25zdCB2ZXJpZnlFbWFpbCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuLy8gICBpZiAodHlwZW9mIHJlcS5xdWVyeS50b2tlbiAhPT0gJ3N0cmluZycpXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuc2VuZCgpO1xuLy8gICBhd2FpdCBhdXRoU2VydmljZS52ZXJpZnlFbWFpbChyZXEucXVlcnkudG9rZW4pO1xuLy8gICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuTk9fQ09OVEVOVCkuc2VuZCgpO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVnaXN0ZXIsXG4gIGxvZ2luLFxuICBsb2dvdXQsXG4gIHJlZnJlc2hUb2tlbnMsXG4gIC8vICAgZm9yZ290UGFzc3dvcmQsXG4gIHJlc2V0UGFzc3dvcmQsXG4gIC8vICAgc2VuZFZlcmlmaWNhdGlvbkVtYWlsLFxuICAvLyAgIHZlcmlmeUVtYWlsLFxufTtcbiJdLCJuYW1lcyI6WyJyZWdpc3RlciIsImNhdGNoQXN5bmMiLCJyZXEiLCJyZXMiLCJ1c2VyIiwidG9rZW5zIiwidXNlclNlcnZpY2UiLCJjcmVhdGVVc2VyIiwiYm9keSIsInRva2VuU2VydmljZSIsImdlbmVyYXRlQXV0aFRva2VucyIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJDUkVBVEVEIiwic2VuZCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGhTZXJ2aWNlIiwibG9naW5Vc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJyZWZyZXNoVG9rZW4iLCJOT19DT05URU5UIiwicmVmcmVzaFRva2VucyIsInJlZnJlc2hBdXRoIiwicmVzZXRQYXNzd29yZCIsInF1ZXJ5IiwidG9rZW4iLCJCQURfUkVRVUVTVCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkNBLG9GQUFvRjtBQUNwRiwwRUFBMEU7QUFDMUUsZUFBZTtBQUNmLE9BQU87QUFDUCxnRkFBZ0Y7QUFDaEYsOENBQThDO0FBQzlDLE1BQU07QUFFTiwwRUFBMEU7QUFDMUUsNkNBQTZDO0FBQzdDLHdEQUF3RDtBQUN4RCxvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLE1BQU07QUFFTixTQVNFOzs7ZUFURixRQVNFOzs7K0RBbkVxQixhQUFhOytEQUViLHFCQUFxQjt3QkFDVyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxRQUFRLEdBQUdDLElBQUFBLFdBQVUsUUFBQTtlQUFDLGtCQUFBLFNBQU9DLEdBQVksRUFBRUMsR0FBYSxFQUFLO1lBQzNEQyxJQUFJLEVBQ0pDLE1BQU07Ozs7b0JBREM7O3dCQUFNQyxTQUFXLFlBQUEsQ0FBQ0MsVUFBVSxDQUFDTCxHQUFHLENBQUNNLElBQUksQ0FBQztzQkFBQTs7b0JBQTdDSixJQUFJLEdBQUcsYUFBc0MsQ0FBQTtvQkFDcEM7O3dCQUFNSyxTQUFZLGFBQUEsQ0FBQ0Msa0JBQWtCLENBQUNOLElBQUks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