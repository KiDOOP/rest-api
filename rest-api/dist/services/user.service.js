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
var _userModel = /*#__PURE__*/ _interopRequireDefault(require("../models/users/user.model"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
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
var createUser = function() {
    var _ref = _asyncToGenerator(function(userBody) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _userModel.default.isEmailTaken(userBody.email)
                    ];
                case 1:
                    if (_state.sent()) {
                        throw new _apiError.default(_httpStatus.default.BAD_REQUEST, "Email already taken");
                    }
                    return [
                        2,
                        _userModel.default.create(userBody)
                    ];
            }
        });
    });
    return function createUser(userBody) {
        return _ref.apply(this, arguments);
    };
}();
var getUserById = function() {
    var _ref = _asyncToGenerator(function(id) {
        return __generator(this, function(_state) {
            return [
                2,
                _userModel.default.findById(id)
            ];
        });
    });
    return function getUserById(id) {
        return _ref.apply(this, arguments);
    };
}();
var getUserByEmail = function() {
    var _ref = _asyncToGenerator(function(email) {
        var _tmp;
        return __generator(this, function(_state) {
            _tmp = {};
            return [
                2,
                _userModel.default.findOne((_tmp.email = email, _tmp))
            ];
        });
    });
    return function getUserByEmail(email) {
        return _ref.apply(this, arguments);
    };
}();
var queryUsers = function() {
    var _ref = _asyncToGenerator(function(filter, options) {
        var users;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _userModel.default.paginate(filter, options)
                    ];
                case 1:
                    users = _state.sent();
                    return [
                        2,
                        users
                    ];
            }
        });
    });
    return function queryUsers(filter, options) {
        return _ref.apply(this, arguments);
    };
}();
var updateUserById = function() {
    var _ref = _asyncToGenerator(function(userId, updateBody) {
        var user, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getUserById(userId)
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "User not found");
                    }
                    _tmp = updateBody.email;
                    if (!_tmp) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        _userModel.default.isEmailTaken(updateBody.email, userId)
                    ];
                case 2:
                    _tmp = _state.sent();
                    _state.label = 3;
                case 3:
                    if (_tmp) {
                        throw new _apiError.default(_httpStatus.default.BAD_REQUEST, "Email already taken");
                    }
                    Object.assign(user, updateBody);
                    return [
                        4,
                        user.save()
                    ];
                case 4:
                    _state.sent();
                    return [
                        2,
                        user
                    ];
            }
        });
    });
    return function updateUserById(userId, updateBody) {
        return _ref.apply(this, arguments);
    };
}();
var deleteUserById = function() {
    var _ref = _asyncToGenerator(function(userId) {
        var user;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getUserById(userId)
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "User not found");
                    }
                    return [
                        4,
                        user.remove()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        user
                    ];
            }
        });
    });
    return function deleteUserById(userId) {
        return _ref.apply(this, arguments);
    };
}();
var _default = {
    createUser: createUser,
    updateUserById: updateUserById,
    queryUsers: queryUsers,
    deleteUserById: deleteUserById,
    getUserById: getUserById,
    getUserByEmail: getUserByEmail
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgVXNlciwgVXNlclVwZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9jdXN0b21UeXBlcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy91c2Vycy91c2VyLm1vZGVsJztcbmltcG9ydCBBcGlFcnJvciBmcm9tICcuLi91dGlscy9BcGlFcnJvcic7XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAodXNlckJvZHk6IFVzZXIpID0+IHtcbiAgaWYgKGF3YWl0IFVzZXJNb2RlbC5pc0VtYWlsVGFrZW4odXNlckJvZHkuZW1haWwpKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsICdFbWFpbCBhbHJlYWR5IHRha2VuJyk7XG4gIH1cbiAgcmV0dXJuIFVzZXJNb2RlbC5jcmVhdGUodXNlckJvZHkpO1xufTtcblxuY29uc3QgZ2V0VXNlckJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gVXNlck1vZGVsLmZpbmRCeUlkKGlkKTtcbmNvbnN0IGdldFVzZXJCeUVtYWlsID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IFVzZXJNb2RlbC5maW5kT25lKHsgZW1haWwgfSk7XG5cbmNvbnN0IHF1ZXJ5VXNlcnMgPSBhc3luYyAoZmlsdGVyOiBhbnksIG9wdGlvbnM6IGFueSkgPT4ge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJNb2RlbC5wYWdpbmF0ZShmaWx0ZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gdXNlcnM7XG59O1xuY29uc3QgdXBkYXRlVXNlckJ5SWQgPSBhc3luYyAodXNlcklkOiBzdHJpbmcsIHVwZGF0ZUJvZHk6IFVzZXJVcGRhdGUpID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHVzZXJJZCk7XG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ1VzZXIgbm90IGZvdW5kJyk7XG4gIH1cbiAgaWYgKFxuICAgIHVwZGF0ZUJvZHkuZW1haWwgJiZcbiAgICAoYXdhaXQgVXNlck1vZGVsLmlzRW1haWxUYWtlbih1cGRhdGVCb2R5LmVtYWlsLCB1c2VySWQpKVxuICApIHtcbiAgICB0aHJvdyBuZXcgQXBpRXJyb3IoaHR0cFN0YXR1cy5CQURfUkVRVUVTVCwgJ0VtYWlsIGFscmVhZHkgdGFrZW4nKTtcbiAgfVxuICBPYmplY3QuYXNzaWduKHVzZXIsIHVwZGF0ZUJvZHkpO1xuICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBkZWxldGVVc2VyQnlJZCA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQodXNlcklkKTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuTk9UX0ZPVU5ELCAnVXNlciBub3QgZm91bmQnKTtcbiAgfVxuICBhd2FpdCB1c2VyLnJlbW92ZSgpO1xuICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVXNlcixcbiAgdXBkYXRlVXNlckJ5SWQsXG4gIHF1ZXJ5VXNlcnMsXG4gIGRlbGV0ZVVzZXJCeUlkLFxuICBnZXRVc2VyQnlJZCxcbiAgZ2V0VXNlckJ5RW1haWwsXG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXIiLCJ1c2VyQm9keSIsIlVzZXJNb2RlbCIsImlzRW1haWxUYWtlbiIsImVtYWlsIiwiQXBpRXJyb3IiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJjcmVhdGUiLCJnZXRVc2VyQnlJZCIsImlkIiwiZmluZEJ5SWQiLCJnZXRVc2VyQnlFbWFpbCIsImZpbmRPbmUiLCJxdWVyeVVzZXJzIiwiZmlsdGVyIiwib3B0aW9ucyIsInVzZXJzIiwicGFnaW5hdGUiLCJ1cGRhdGVVc2VyQnlJZCIsInVzZXJJZCIsInVwZGF0ZUJvZHkiLCJ1c2VyIiwiTk9UX0ZPVU5EIiwiT2JqZWN0IiwiYXNzaWduIiwic2F2ZSIsImRlbGV0ZVVzZXJCeUlkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0Q0EsU0FPRTs7O2VBUEYsUUFPRTs7OytEQW5EcUIsYUFBYTs4REFFZCw0QkFBNEI7NkRBQzdCLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNQSxVQUFVO2VBQUcsa0JBQUEsU0FBT0MsUUFBYyxFQUFLOzs7O29CQUN2Qzs7d0JBQU1DLFVBQVMsUUFBQSxDQUFDQyxZQUFZLENBQUNGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDO3NCQUFBOztvQkFBaEQsSUFBSSxhQUE0QyxFQUFFO3dCQUNoRCxNQUFNLElBQUlDLFNBQVEsUUFBQSxDQUFDQyxXQUFVLFFBQUEsQ0FBQ0MsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQ3BFLENBQUM7b0JBQ0Q7O3dCQUFPTCxVQUFTLFFBQUEsQ0FBQ00sTUFBTSxDQUFDUCxRQUFRLENBQUM7c0JBQUM7OztJQUNwQyxDQUFDLENBQUE7b0JBTEtELFVBQVUsQ0FBVUMsUUFBYzs7O0dBS3ZDLEFBQUM7QUFFRixJQUFNUSxXQUFXO2VBQUcsa0JBQUEsU0FBT0MsRUFBVTs7WUFBS1I7O2dCQUFBQSxVQUFTLFFBQUEsQ0FBQ1MsUUFBUSxDQUFDRCxFQUFFLENBQUM7Y0FBQTs7S0FBQSxDQUFBO29CQUExREQsV0FBVyxDQUFVQyxFQUFVOzs7R0FBMkIsQUFBQztBQUNqRSxJQUFNRSxjQUFjO2VBQUcsa0JBQUEsU0FBT1IsS0FBYTs7OztZQUFLRjs7Z0JBQUFBLFVBQVMs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