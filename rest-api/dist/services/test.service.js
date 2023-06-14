/* eslint-disable no-plusplus */ "use strict";
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
var _testModel = /*#__PURE__*/ _interopRequireDefault(require("../models/tests/test.model"));
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
var createTest = function() {
    var _ref = _asyncToGenerator(function(testBody) {
        return __generator(this, function(_state) {
            return [
                2,
                _testModel.default.create(testBody)
            ];
        });
    });
    return function createTest(testBody) {
        return _ref.apply(this, arguments);
    };
}();
var getTestById = function() {
    var _ref = _asyncToGenerator(function(id) {
        return __generator(this, function(_state) {
            return [
                2,
                _testModel.default.findById(id)
            ];
        });
    });
    return function getTestById(id) {
        return _ref.apply(this, arguments);
    };
}();
var queryTests = function() {
    var _ref = _asyncToGenerator(function(filter, options) {
        var tests;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testModel.default.paginate(filter, options)
                    ];
                case 1:
                    tests = _state.sent();
                    return [
                        2,
                        tests
                    ];
            }
        });
    });
    return function queryTests(filter, options) {
        return _ref.apply(this, arguments);
    };
}();
var submitTest = function() {
    var _ref = _asyncToGenerator(function(testBody, testId) {
        var test, score, index;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getTestById(testId)
                    ];
                case 1:
                    test = _state.sent();
                    console.log(test);
                    score = 0;
                    for(index = 0; index < test.questions.length; index++){
                        if (test.questions[index].answer === testBody.answers[index]) {
                            score++;
                        }
                    }
                    return [
                        2,
                        score
                    ];
            }
        });
    });
    return function submitTest(testBody, testId) {
        return _ref.apply(this, arguments);
    };
}();
var updateTestById = function() {
    var _ref = _asyncToGenerator(function(testId, updateBody) {
        var test;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getTestById(testId)
                    ];
                case 1:
                    test = _state.sent();
                    if (!test) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "Test not found");
                    }
                    Object.assign(test, updateBody);
                    return [
                        4,
                        test.save()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        test
                    ];
            }
        });
    });
    return function updateTestById(testId, updateBody) {
        return _ref.apply(this, arguments);
    };
}();
var deleteTestById = function() {
    var _ref = _asyncToGenerator(function(testId) {
        var test;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getTestById(testId)
                    ];
                case 1:
                    test = _state.sent();
                    if (!test) {
                        throw new _apiError.default(_httpStatus.default.NOT_FOUND, "Test not found");
                    }
                    return [
                        4,
                        test.remove()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        test
                    ];
            }
        });
    });
    return function deleteTestById(testId) {
        return _ref.apply(this, arguments);
    };
}();
var _default = {
    createTest: createTest,
    updateTestById: updateTestById,
    queryTests: queryTests,
    deleteTestById: deleteTestById,
    getTestById: getTestById,
    submitTest: submitTest
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy90ZXN0LnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFRlc3QsIFRlc3RVcGRhdGUgfSBmcm9tICcuLi9zaGFyZWQvY3VzdG9tVHlwZXMnO1xuaW1wb3J0IFRlc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvdGVzdHMvdGVzdC5tb2RlbCc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuXG5jb25zdCBjcmVhdGVUZXN0ID0gYXN5bmMgKHRlc3RCb2R5OiBUZXN0KSA9PiB7XG4gIHJldHVybiBUZXN0TW9kZWwuY3JlYXRlKHRlc3RCb2R5KTtcbn07XG5cbmNvbnN0IGdldFRlc3RCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFRlc3RNb2RlbC5maW5kQnlJZChpZCk7XG5cbmNvbnN0IHF1ZXJ5VGVzdHMgPSBhc3luYyAoZmlsdGVyOiBhbnksIG9wdGlvbnM6IGFueSkgPT4ge1xuICBjb25zdCB0ZXN0cyA9IGF3YWl0IFRlc3RNb2RlbC5wYWdpbmF0ZShmaWx0ZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gdGVzdHM7XG59O1xuXG5jb25zdCBzdWJtaXRUZXN0ID0gYXN5bmMgKFxuICB0ZXN0Qm9keTogeyB1c2VySWQ6IHN0cmluZzsgYW5zd2VyczogW3N0cmluZ10gfSxcbiAgdGVzdElkOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCB0ZXN0OiBhbnkgPSBhd2FpdCBnZXRUZXN0QnlJZCh0ZXN0SWQpO1xuICBjb25zb2xlLmxvZyh0ZXN0KTtcbiAgbGV0IHNjb3JlID0gMDtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRlc3QucXVlc3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmICh0ZXN0LnF1ZXN0aW9uc1tpbmRleF0uYW5zd2VyID09PSB0ZXN0Qm9keS5hbnN3ZXJzW2luZGV4XSkge1xuICAgICAgc2NvcmUrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjb3JlO1xufTtcblxuY29uc3QgdXBkYXRlVGVzdEJ5SWQgPSBhc3luYyAodGVzdElkOiBzdHJpbmcsIHVwZGF0ZUJvZHk6IFRlc3RVcGRhdGUpID0+IHtcbiAgY29uc3QgdGVzdCA9IGF3YWl0IGdldFRlc3RCeUlkKHRlc3RJZCk7XG4gIGlmICghdGVzdCkge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ1Rlc3Qgbm90IGZvdW5kJyk7XG4gIH1cbiAgT2JqZWN0LmFzc2lnbih0ZXN0LCB1cGRhdGVCb2R5KTtcbiAgYXdhaXQgdGVzdC5zYXZlKCk7XG4gIHJldHVybiB0ZXN0O1xufTtcblxuY29uc3QgZGVsZXRlVGVzdEJ5SWQgPSBhc3luYyAodGVzdElkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGVzdCA9IGF3YWl0IGdldFRlc3RCeUlkKHRlc3RJZCk7XG4gIGlmICghdGVzdCkge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcihodHRwU3RhdHVzLk5PVF9GT1VORCwgJ1Rlc3Qgbm90IGZvdW5kJyk7XG4gIH1cbiAgYXdhaXQgdGVzdC5yZW1vdmUoKTtcbiAgcmV0dXJuIHRlc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVRlc3QsXG4gIHVwZGF0ZVRlc3RCeUlkLFxuICBxdWVyeVRlc3RzLFxuICBkZWxldGVUZXN0QnlJZCxcbiAgZ2V0VGVzdEJ5SWQsXG4gIHN1Ym1pdFRlc3QsXG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRlc3QiLCJ0ZXN0Qm9keSIsIlRlc3RNb2RlbCIsImNyZWF0ZSIsImdldFRlc3RCeUlkIiwiaWQiLCJmaW5kQnlJZCIsInF1ZXJ5VGVzdHMiLCJmaWx0ZXIiLCJvcHRpb25zIiwidGVzdHMiLCJwYWdpbmF0ZSIsInN1Ym1pdFRlc3QiLCJ0ZXN0SWQiLCJ0ZXN0Iiwic2NvcmUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJhbnN3ZXIiLCJhbnN3ZXJzIiwidXBkYXRlVGVzdEJ5SWQiLCJ1cGRhdGVCb2R5IiwiQXBpRXJyb3IiLCJodHRwU3RhdHVzIiwiTk9UX0ZPVU5EIiwiT2JqZWN0IiwiYXNzaWduIiwic2F2ZSIsImRlbGV0ZVRlc3RCeUlkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEIsR0FDOUI7Ozs7K0JBa0RBLFNBT0U7OztlQVBGLFFBT0U7OzsrREF6RHFCLGFBQWE7OERBRWQsNEJBQTRCOzZEQUM3QixtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTUEsVUFBVTtlQUFHLGtCQUFBLFNBQU9DLFFBQWMsRUFBSzs7WUFDM0M7O2dCQUFPQyxVQUFTLFFBQUEsQ0FBQ0MsTUFBTSxDQUFDRixRQUFRLENBQUM7Y0FBQzs7SUFDcEMsQ0FBQyxDQUFBO29CQUZLRCxVQUFVLENBQVVDLFFBQWM7OztHQUV2QyxBQUFDO0FBRUYsSUFBTUcsV0FBVztlQUFHLGtCQUFBLFNBQU9DLEVBQVU7O1lBQUtIOztnQkFBQUEsVUFBUyxRQUFBLENBQUNJLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDO2NBQUE7O0tBQUEsQ0FBQTtvQkFBMURELFdBQVcsQ0FBVUMsRUFBVTs7O0dBQTJCLEFBQUM7QUFFakUsSUFBTUUsVUFBVTtlQUFHLGtCQUFBLFNBQU9DLE1BQVcsRUFBRUMsT0FBWSxFQUFLO1lBQ2hEQyxLQUFLOzs7O29CQUFHOzt3QkFBTVIsVUFBUyxRQUFBLENBQUNTLFFBQVEsQ0FBQ0gsTUFBTSxFQUFFQyxPQUFPLENBQUM7c0JBQUE7O29CQUFqREMsS0FBSyxHQUFHLGFBQXlDLENBQUE7b0JBQ3ZEOzt3QkFBT0EsS0FBSztzQkFB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