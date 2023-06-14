"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // const generateVerifyEmailToken = async (user: IUserDocument) => {
//   const expires = moment().add(
//     config.jwt.verifyEmailExpirationMinutes,
//     'minutes'
//   );
//   const verifyEmailToken = generateToken(
//     user.id,
//     expires,
//     tokenTypes.VERIFY_EMAIL
//   );
//   await saveToken(verifyEmailToken, user.id, expires, tokenTypes.VERIFY_EMAIL);
//   return verifyEmailToken;
// };
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
var _moment = /*#__PURE__*/ _interopRequireDefault(require("moment"));
var _httpStatus = /*#__PURE__*/ _interopRequireDefault(require("http-status"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("../config"));
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
var generateToken = function(userId, expires, type) {
    var secret = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _config.default.jwt.secret;
    var payload = {
        sub: userId,
        iat: (0, _moment.default)().unix(),
        exp: expires.unix(),
        type: type
    };
    return _jsonwebtoken.default.sign(payload, secret);
};
var saveToken = function() {
    var _ref = _asyncToGenerator(function(token, userId, expires, type) {
        var blacklisted, tokenDoc, _tmp;
        var _arguments = arguments;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    blacklisted = _arguments.length > 4 && _arguments[4] !== void 0 ? _arguments[4] : false;
                    _tmp = {};
                    return [
                        4,
                        _tokenModel.default.create((_tmp.token = token, _tmp.user = userId, _tmp.expires = expires.toDate(), _tmp.type = type, _tmp.blacklisted = blacklisted, _tmp))
                    ];
                case 1:
                    tokenDoc = _state.sent();
                    return [
                        2,
                        tokenDoc
                    ];
            }
        });
    });
    return function saveToken(token, userId, expires, type) {
        return _ref.apply(this, arguments);
    };
}();
var verifyToken = function() {
    var _ref = _asyncToGenerator(function(token, type) {
        var payload, tokenDoc, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = _jsonwebtoken.default.verify(token, _config.default.jwt.secret);
                    _tmp = {};
                    return [
                        4,
                        _tokenModel.default.findOne((_tmp.token = token, _tmp.type = type, _tmp.user = payload.sub, _tmp.blacklisted = false, _tmp))
                    ];
                case 1:
                    tokenDoc = _state.sent();
                    if (!tokenDoc) {
                        throw new Error("Token not found");
                    }
                    return [
                        2,
                        tokenDoc
                    ];
            }
        });
    });
    return function verifyToken(token, type) {
        return _ref.apply(this, arguments);
    };
}();
var generateAuthTokens = function() {
    var _ref = _asyncToGenerator(function(user) {
        var accessTokenExpires, accessToken, refreshTokenExpires, refreshToken, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    accessTokenExpires = (0, _moment.default)().add(_config.default.jwt.accessExpirationMinutes, "minutes");
                    accessToken = generateToken(user.id, accessTokenExpires, _constants.tokenTypes.ACCESS);
                    refreshTokenExpires = (0, _moment.default)().add(_config.default.jwt.refreshExpirationDays, "days");
                    refreshToken = generateToken(user.id, refreshTokenExpires, _constants.tokenTypes.REFRESH);
                    return [
                        4,
                        saveToken(refreshToken, user.id, refreshTokenExpires, _constants.tokenTypes.REFRESH)
                    ];
                case 1:
                    _state.sent();
                    _tmp = {};
                    return [
                        2,
                        (_tmp.access = {
                            token: accessToken,
                            expires: accessTokenExpires.toDate()
                        }, _tmp.refresh = {
                            token: refreshToken,
                            expires: refreshTokenExpires.toDate()
                        }, _tmp)
                    ];
            }
        });
    });
    return function generateAuthTokens(user) {
        return _ref.apply(this, arguments);
    };
}();
var generateResetPasswordToken = function() {
    var _ref = _asyncToGenerator(function(email) {
        var user, expires, resetPasswordToken;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _userService.default.getUserByEmail(email)
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "No users found with this email");
                    }
                    expires = (0, _moment.default)().add(_config.default.jwt.resetPasswordExpirationMinutes, "minutes");
                    resetPasswordToken = generateToken(user.id, expires, _constants.tokenTypes.RESET_PASSWORD);
                    return [
                        4,
                        saveToken(resetPasswordToken, user.id, expires, _constants.tokenTypes.RESET_PASSWORD)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        resetPasswordToken
                    ];
            }
        });
    });
    return function generateResetPasswordToken(email) {
        return _ref.apply(this, arguments);
    };
}();
var _default = {
    generateToken: generateToken,
    saveToken: saveToken,
    verifyToken: verifyToken,
    generateAuthTokens: generateAuthTokens,
    generateResetPasswordToken: generateResetPasswordToken
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy90b2tlbi5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCBUb2tlbk1vZGVsIGZyb20gJy4uL21vZGVscy90b2tlbi90b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBJVXNlckRvY3VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3VzZXJzL3VzZXIudHlwZXMnO1xuaW1wb3J0IEFwaUVycm9yIGZyb20gJy4uL3V0aWxzL0FwaUVycm9yJztcbmltcG9ydCB7IHRva2VuVHlwZXMgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcblxuY29uc3QgZ2VuZXJhdGVUb2tlbiA9IChcbiAgdXNlcklkOiBUeXBlcy5PYmplY3RJZCxcbiAgZXhwaXJlczogbW9tZW50Lk1vbWVudCxcbiAgdHlwZTogdG9rZW5UeXBlcyxcbiAgc2VjcmV0ID0gY29uZmlnLmp3dC5zZWNyZXRcbikgPT4ge1xuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIHN1YjogdXNlcklkLFxuICAgIGlhdDogbW9tZW50KCkudW5peCgpLFxuICAgIGV4cDogZXhwaXJlcy51bml4KCksXG4gICAgdHlwZSxcbiAgfTtcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldCk7XG59O1xuXG5jb25zdCBzYXZlVG9rZW4gPSBhc3luYyAoXG4gIHRva2VuOiBzdHJpbmcsXG4gIHVzZXJJZDogVHlwZXMuT2JqZWN0SWQsXG4gIGV4cGlyZXM6IG1vbWVudC5Nb21lbnQsXG4gIHR5cGU6IHRva2VuVHlwZXMsXG4gIGJsYWNrbGlzdGVkID0gZmFsc2VcbikgPT4ge1xuICBjb25zdCB0b2tlbkRvYyA9IGF3YWl0IFRva2VuTW9kZWwuY3JlYXRlKHtcbiAgICB0b2tlbixcbiAgICB1c2VyOiB1c2VySWQsXG4gICAgZXhwaXJlczogZXhwaXJlcy50b0RhdGUoKSxcbiAgICB0eXBlLFxuICAgIGJsYWNrbGlzdGVkLFxuICB9KTtcbiAgcmV0dXJuIHRva2VuRG9jO1xufTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSBhc3luYyAodG9rZW46IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBheWxvYWQgPSBqd3QudmVyaWZ5KHRva2VuLCBjb25maWcuand0LnNlY3JldCk7XG4gIGNvbnN0IHRva2VuRG9jID0gYXdhaXQgVG9rZW5Nb2RlbC5maW5kT25lKHtcbiAgICB0b2tlbixcbiAgICB0eXBlLFxuICAgIHVzZXI6IHBheWxvYWQuc3ViLFxuICAgIGJsYWNrbGlzdGVkOiBmYWxzZSxcbiAgfSk7XG4gIGlmICghdG9rZW5Eb2MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIG5vdCBmb3VuZCcpO1xuICB9XG4gIHJldHVybiB0b2tlbkRvYztcbn07XG5cbmNvbnN0IGdlbmVyYXRlQXV0aFRva2VucyA9IGFzeW5jICh1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gIGNvbnN0IGFjY2Vzc1Rva2VuRXhwaXJlcyA9IG1vbWVudCgpLmFkZChcbiAgICBjb25maWcuand0LmFjY2Vzc0V4cGlyYXRpb25NaW51dGVzLFxuICAgICdtaW51dGVzJ1xuICApO1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdlbmVyYXRlVG9rZW4oXG4gICAgdXNlci5pZCxcbiAgICBhY2Nlc3NUb2tlbkV4cGlyZXMsXG4gICAgdG9rZW5UeXBlcy5BQ0NFU1NcbiAgKTtcblxuICBjb25zdCByZWZyZXNoVG9rZW5FeHBpcmVzID0gbW9tZW50KCkuYWRkKFxuICAgIGNvbmZpZy5qd3QucmVmcmVzaEV4cGlyYXRpb25EYXlzLFxuICAgICdkYXlzJ1xuICApO1xuICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZW5lcmF0ZVRva2VuKFxuICAgIHVzZXIuaWQsXG4gICAgcmVmcmVzaFRva2VuRXhwaXJlcyxcbiAgICB0b2tlblR5cGVzLlJFRlJFU0hcbiAgKTtcbiAgYXdhaXQgc2F2ZVRva2VuKFxuICAgIHJlZnJlc2hUb2tlbixcbiAgICB1c2VyLmlkLFxuICAgIHJlZnJlc2hUb2tlbkV4cGlyZXMsXG4gICAgdG9rZW5UeXBlcy5SRUZSRVNIXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3M6IHtcbiAgICAgIHRva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgIGV4cGlyZXM6IGFjY2Vzc1Rva2VuRXhwaXJlcy50b0RhdGUoKSxcbiAgICB9LFxuICAgIHJlZnJlc2g6IHtcbiAgICAgIHRva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBleHBpcmVzOiByZWZyZXNoVG9rZW5FeHBpcmVzLnRvRGF0ZSgpLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBnZW5lcmF0ZVJlc2V0UGFzc3dvcmRUb2tlbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlFbWFpbChlbWFpbCk7XG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ05vIHVzZXJzIGZvdW5kIHdpdGggdGhpcyBlbWFpbCcpO1xuICB9XG4gIGNvbnN0IGV4cGlyZXMgPSBtb21lbnQoKS5hZGQoXG4gICAgY29uZmlnLmp3dC5yZXNldFBhc3N3b3JkRXhwaXJhdGlvbk1pbnV0ZXMsXG4gICAgJ21pbnV0ZXMnXG4gICk7XG4gIGNvbnN0IHJlc2V0UGFzc3dvcmRUb2tlbiA9IGdlbmVyYXRlVG9rZW4oXG4gICAgdXNlci5pZCxcbiAgICBleHBpcmVzLFxuICAgIHRva2VuVHlwZXMuUkVTRVRfUEFTU1dPUkRcbiAgKTtcbiAgYXdhaXQgc2F2ZVRva2VuKFxuICAgIHJlc2V0UGFzc3dvcmRUb2tlbixcbiAgICB1c2VyLmlkLFxuICAgIGV4cGlyZXMsXG4gICAgdG9rZW5UeXBlcy5SRVNFVF9QQVNTV09SRFxuICApO1xuICByZXR1cm4gcmVzZXRQYXNzd29yZFRva2VuO1xufTtcblxuLy8gY29uc3QgZ2VuZXJhdGVWZXJpZnlFbWFpbFRva2VuID0gYXN5bmMgKHVzZXI6IElVc2VyRG9jdW1lbnQpID0+IHtcbi8vICAgY29uc3QgZXhwaXJlcyA9IG1vbWVudCgpLmFkZChcbi8vICAgICBjb25maWcuand0LnZlcmlmeUVtYWlsRXhwaXJhdGlvbk1pbnV0ZXMsXG4vLyAgICAgJ21pbnV0ZXMnXG4vLyAgICk7XG4vLyAgIGNvbnN0IHZlcmlmeUVtYWlsVG9rZW4gPSBnZW5lcmF0ZVRva2VuKFxuLy8gICAgIHVzZXIuaWQsXG4vLyAgICAgZXhwaXJlcyxcbi8vICAgICB0b2tlblR5cGVzLlZFUklGWV9FTUFJTFxuLy8gICApO1xuLy8gICBhd2FpdCBzYXZlVG9rZW4odmVyaWZ5RW1haWxUb2tlbiwgdXNlci5pZCwgZXhwaXJlcywgdG9rZW5UeXBlcy5WRVJJRllfRU1BSUwpO1xuLy8gICByZXR1cm4gdmVyaWZ5RW1haWxUb2tlbjtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2VuZXJhdGVUb2tlbixcbiAgc2F2ZVRva2VuLFxuICB2ZXJpZnlUb2tlbixcbiAgZ2VuZXJhdGVBdXRoVG9rZW5zLFxuICBnZW5lcmF0ZVJlc2V0UGFzc3dvcmRUb2tlbixcbiAgLy8gICBnZW5lcmF0ZVZlcmlmeUVtYWlsVG9rZW4sXG59O1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlVG9rZW4iLCJ1c2VySWQiLCJleHBpcmVzIiwidHlwZSIsInNlY3JldCIsImNvbmZpZyIsImp3dCIsInBheWxvYWQiLCJzdWIiLCJpYXQiLCJtb21lbnQiLCJ1bml4IiwiZXhwIiwic2lnbiIsInNhdmVUb2tlbiIsInRva2VuIiwiYmxhY2tsaXN0ZWQiLCJ0b2tlbkRvYyIsIlRva2VuTW9kZWwiLCJjcmVhdGUiLCJ1c2VyIiwidG9EYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnkiLCJmaW5kT25lIiwiRXJyb3IiLCJnZW5lcmF0ZUF1dGhUb2tlbnMiLCJhY2Nlc3NUb2tlbkV4cGlyZXMiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbkV4cGlyZXMiLCJyZWZyZXNoVG9rZW4iLCJhZGQiLCJhY2Nlc3NFeHBpcmF0aW9uTWludXRlcyIsImlkIiwidG9rZW5UeXBlcyIsIkFDQ0VTUyIsInJlZnJlc2hFeHBpcmF0aW9uRGF5cyIsIlJFRlJFU0giLCJhY2Nlc3MiLCJyZWZyZXNoIiwiZ2VuZXJhdGVSZXNldFBhc3N3b3JkVG9rZW4iLCJlbWFpbCIsInJlc2V0UGFzc3dvcmRUb2tlbiIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckJ5RW1haWwiLCJBcGlFcnJvciIsImh0dHBTdGF0dXMiLCJOT1RfRk9VTkQiLCJyZXNldFBhc3N3b3JkRXhwaXJhdGlvbk1pbnV0ZXMiLCJSRVNFVF9QQVNTV09SRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUhBLG9FQUFvRTtBQUNwRSxrQ0FBa0M7QUFDbEMsK0NBQStDO0FBQy9DLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsNENBQTRDO0FBQzVDLGVBQWU7QUFDZixlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLE9BQU87QUFDUCxrRkFBa0Y7QUFDbEYsNkJBQTZCO0FBQzdCLEtBQUs7QUFFTCxTQU9FOzs7ZUFQRixRQU9FOzs7aUVBNUljLGNBQWM7MkRBRVgsUUFBUTsrREFDSixhQUFhOzJEQUNqQixXQUFXO2dFQUNOLGdCQUFnQjsrREFDakIsNkJBQTZCOzZEQUUvQixtQkFBbUI7eUJBQ2IscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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