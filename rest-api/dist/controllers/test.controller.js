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
var createTest = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var test;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.testService.createTest(req.body)
                    ];
                case 1:
                    test = _state.sent();
                    res.status(_httpStatus.default.CREATED).send(test);
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
var submitTest = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var score, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.testService.submitTest(req.body, req.params.testId)
                    ];
                case 1:
                    score = _state.sent();
                    _tmp = {};
                    res.status(_httpStatus.default.CREATED).send((_tmp.score = score, _tmp.message = "test submitted successfully", _tmp));
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
var getTest = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var test;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.testService.getTestById(req.params.testId)
                    ];
                case 1:
                    test = _state.sent();
                    if (!test) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "Test not found");
                    }
                    res.send(test);
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
var getTests = (0, _catchAsync.default)(function() {
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
                        _services.testService.queryTests(filter, options)
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
var updateTest = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        var test;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.testService.updateTestById(req.params.testId, req.body)
                    ];
                case 1:
                    test = _state.sent();
                    res.send(test);
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
var deleteTest = (0, _catchAsync.default)(function() {
    var _ref = _asyncToGenerator(function(req, res) {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _services.testService.deleteTestById(req.params.testId)
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
    createTest: createTest,
    getTest: getTest,
    getTests: getTests,
    updateTest: updateTest,
    deleteTest: deleteTest,
    submitTest: submitTest
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90ZXN0LmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBjYXRjaEFzeW5jIGZyb20gJy4uL3V0aWxzL0NhdGNoQXN5bmMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi4vdXRpbHMvcGljayc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuaW1wb3J0IHsgdGVzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IGNyZWF0ZVRlc3QgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdGVzdCA9IGF3YWl0IHRlc3RTZXJ2aWNlLmNyZWF0ZVRlc3QocmVxLmJvZHkpO1xuICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRCkuc2VuZCh0ZXN0KTtcbn0pO1xuXG5jb25zdCBzdWJtaXRUZXN0ID0gY2F0Y2hBc3luYyhhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gYXdhaXQgdGVzdFNlcnZpY2Uuc3VibWl0VGVzdChyZXEuYm9keSwgcmVxLnBhcmFtcy50ZXN0SWQpO1xuICByZXNcbiAgICAuc3RhdHVzKGh0dHBTdGF0dXMuQ1JFQVRFRClcbiAgICAuc2VuZCh7IHNjb3JlLCBtZXNzYWdlOiAndGVzdCBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcbn0pO1xuXG5jb25zdCBnZXRUZXN0ID0gY2F0Y2hBc3luYyhhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBhd2FpdCB0ZXN0U2VydmljZS5nZXRUZXN0QnlJZChyZXEucGFyYW1zLnRlc3RJZCk7XG4gIGlmICghdGVzdCkge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ1Rlc3Qgbm90IGZvdW5kJyk7XG4gIH1cbiAgcmVzLnNlbmQodGVzdCk7XG59KTtcblxuY29uc3QgZ2V0VGVzdHMgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgZmlsdGVyID0gcGljayhyZXEucXVlcnksIFsnbmFtZScsICdlbWFpbCddKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHBpY2socmVxLnF1ZXJ5LCBbJ3NvcnRCeScsICdsaW1pdCcsICdwYWdlJ10pO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB0ZXN0U2VydmljZS5xdWVyeVRlc3RzKGZpbHRlciwgb3B0aW9ucyk7XG4gIHJlcy5zZW5kKHJlc3VsdCk7XG59KTtcblxuY29uc3QgdXBkYXRlVGVzdCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCB0ZXN0ID0gYXdhaXQgdGVzdFNlcnZpY2UudXBkYXRlVGVzdEJ5SWQocmVxLnBhcmFtcy50ZXN0SWQsIHJlcS5ib2R5KTtcbiAgcmVzLnNlbmQodGVzdCk7XG59KTtcblxuY29uc3QgZGVsZXRlVGVzdCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBhd2FpdCB0ZXN0U2VydmljZS5kZWxldGVUZXN0QnlJZChyZXEucGFyYW1zLnRlc3RJZCk7XG4gIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT19DT05URU5UKS5zZW5kKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUZXN0LFxuICBnZXRUZXN0LFxuICBnZXRUZXN0cyxcbiAgdXBkYXRlVGVzdCxcbiAgZGVsZXRlVGVzdCxcbiAgc3VibWl0VGVzdCxcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlVGVzdCIsImNhdGNoQXN5bmMiLCJyZXEiLCJyZXMiLCJ0ZXN0IiwidGVzdFNlcnZpY2UiLCJib2R5Iiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIkNSRUFURUQiLCJzZW5kIiwic3VibWl0VGVzdCIsInNjb3JlIiwicGFyYW1zIiwidGVzdElkIiwibWVzc2FnZSIsImdldFRlc3QiLCJnZXRUZXN0QnlJZCIsIkFwaUVycm9yIiwiTk9UX0ZPVU5EIiwiZ2V0VGVzdHMiLCJmaWx0ZXIiLCJvcHRpb25zIiwicmVzdWx0IiwicGljayIsInF1ZXJ5IiwicXVlcnlUZXN0cyIsInVwZGF0ZVRlc3QiLCJ1cGRhdGVUZXN0QnlJZCIsImRlbGV0ZVRlc3QiLCJkZWxldGVUZXN0QnlJZCIsIk5PX0NPTlRFTlQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQSxTQU9FOzs7ZUFQRixRQU9FOzs7K0RBbkRxQixhQUFhOytEQUViLHFCQUFxQjt5REFDM0IsZUFBZTs2REFDWCxtQkFBbUI7d0JBQ1osYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQSxVQUFVLEdBQUdDLElBQUFBLFdBQVUsUUFBQTtlQUFDLGtCQUFBLFNBQU9DLEdBQVksRUFBRUMsR0FBYSxFQUFLO1lBQzdEQyxJQUFJOzs7O29CQUFHOzt3QkFBTUMsU0FBVyxZQUFBLENBQUNMLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDSSxJQUFJLENBQUM7c0JBQUE7O29CQUE3Q0YsSUFBSSxHQUFHLGFBQXNDLENBQUE7b0JBQ25ERCxHQUFHLENBQUNJLE1BQU0sQ0FBQ0MsV0FBVSxRQUFBLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFDNUMsQ0FBQyxDQUFBO29CQUhvQ0YsR0FBWSxFQUFFQyxHQUFhOzs7SUFHOUQsQUFB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