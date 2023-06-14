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
var _catchAsync = /*#__PURE__*/ _interopRequireDefault(require("../utils/CatchAsync"));
var _pick = /*#__PURE__*/ _interopRequireDefault(require("../utils/pick"));
var _apiError = /*#__PURE__*/ _interopRequireDefault(require("../utils/ApiError"));
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
var createUser = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var user;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.userService.createUser(req.body)
                    ];
                case 1:
                    user = _state.sent();
                    res.status(_httpStatus.default.CREATED).send(user);
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
var getUser = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var user;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.userService.getUserById(req.params.userId)
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "User not found");
                    }
                    res.send(user);
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
var getUsers = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var filter, options, result;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    filter = (0, _pick.default)(req.query, [
                        "name",
                        "email"
                    ]);
                    options = (0, _pick.default)(req.query, [
                        "sortBy",
                        "limit",
                        "page"
                    ]);
                    return [
                        4,
                        _services.userService.queryUsers(filter, options)
                    ];
                case 1:
                    result = _state.sent();
                    res.send(result);
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
var updateUser = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var user;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.userService.updateUserById(req.params.userId, req.body)
                    ];
                case 1:
                    user = _state.sent();
                    res.send(user);
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
var deleteUser = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.userService.deleteUserById(req.params.userId)
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
    createUser: createUser,
    getUser: getUser,
    getUsers: getUsers,
    updateUser: updateUser,
    deleteUser: deleteUser
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjYXRjaEFzeW5jIGZyb20gJy4uL3V0aWxzL0NhdGNoQXN5bmMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi4vdXRpbHMvcGljayc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZVVzZXIocmVxLmJvZHkpO1xuICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuc2VuZCh1c2VyKTtcbn0pO1xuXG5jb25zdCBnZXRVc2VyID0gY2F0Y2hBc3luYyhhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyQnlJZChyZXEucGFyYW1zLnVzZXJJZCk7XG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ1VzZXIgbm90IGZvdW5kJyk7XG4gIH1cbiAgcmVzLnNlbmQodXNlcik7XG59KTtcblxuY29uc3QgZ2V0VXNlcnMgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgZmlsdGVyID0gcGljayhyZXEucXVlcnksIFsnbmFtZScsICdlbWFpbCddKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHBpY2socmVxLnF1ZXJ5LCBbJ3NvcnRCeScsICdsaW1pdCcsICdwYWdlJ10pO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyU2VydmljZS5xdWVyeVVzZXJzKGZpbHRlciwgb3B0aW9ucyk7XG4gIHJlcy5zZW5kKHJlc3VsdCk7XG59KTtcblxuY29uc3QgdXBkYXRlVXNlciA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UudXBkYXRlVXNlckJ5SWQocmVxLnBhcmFtcy51c2VySWQsIHJlcS5ib2R5KTtcbiAgcmVzLnNlbmQodXNlcik7XG59KTtcblxuY29uc3QgZGVsZXRlVXNlciA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBhd2FpdCB1c2VyU2VydmljZS5kZWxldGVVc2VyQnlJZChyZXEucGFyYW1zLnVzZXJJZCk7XG4gIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT19DT05URU5UKS5zZW5kKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVVc2VyLCBnZXRVc2VyLCBnZXRVc2VycywgdXBkYXRlVXNlciwgZGVsZXRlVXNlciB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXIiLCJjYXRjaEFzeW5jIiwicmVxIiwicmVzIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiYm9keSIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJDUkVBVEVEIiwic2VuZCIsImdldFVzZXIiLCJnZXRVc2VyQnlJZCIsInBhcmFtcyIsInVzZXJJZCIsIkFwaUVycm9yIiwiTk9UX0ZPVU5EIiwiZ2V0VXNlcnMiLCJmaWx0ZXIiLCJvcHRpb25zIiwicmVzdWx0IiwicGljayIsInF1ZXJ5IiwicXVlcnlVc2VycyIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVVc2VyQnlJZCIsImRlbGV0ZVVzZXIiLCJkZWxldGVVc2VyQnlJZCIsIk5PX0NP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