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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
var paginate = function(schema) {
    schema.statics.paginate = function() {
        var _ref = _asyncToGenerator(function(filter, options) {
            var sort, sortingCriteria, limit, page, skip, countPromise, docsPromise;
            return __generator(this, function(_state) {
                sort = "";
                if (options.sortBy) {
                    sortingCriteria = [];
                    options.sortBy.split(",").forEach(function(sortOption) {
                        var ref = _slicedToArray(sortOption.split(":"), 2), token = ref[0], order = ref[1];
                        sortingCriteria.push((order === "desc" ? "-" : "") + token);
                    });
                    sort = sortingCriteria.join(" ");
                } else {
                    sort = "createdAt";
                }
                limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
                page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
                skip = (page - 1) * limit;
                countPromise = this.countDocuments(filter).exec();
                docsPromise = this.find(filter).sort(sort).skip(skip).limit(limit);
                if (options.populate) {
                    options.populate.split(",").forEach(function(populateOption) {
                        // TODO check this any type
                        docsPromise = docsPromise.populate(populateOption.split(".").reverse().reduce(function(a, b) {
                            return {
                                path: b,
                                populate: a
                            };
                        }));
                    });
                }
                docsPromise = docsPromise.exec();
                return [
                    2,
                    Promise.all([
                        countPromise,
                        docsPromise
                    ]).then(function(values) {
                        var _values = _slicedToArray(values, 2), totalResults = _values[0], results = _values[1];
                        var totalPages = Math.ceil(totalResults / limit);
                        var result = {
                            results: results,
                            page: page,
                            limit: limit,
                            totalPages: totalPages,
                            totalResults: totalResults
                        };
                        return Promise.resolve(result);
                    })
                ];
            });
        });
        return function(filter, options) {
            return _ref.apply(this, arguments);
        };
    }();
};
var _default = paginate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvcGx1Z2lucy9wYWdpbmF0ZS5wbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBwYWdpbmF0ZSA9IChzY2hlbWE6IFNjaGVtYSkgPT4ge1xuICBzY2hlbWEuc3RhdGljcy5wYWdpbmF0ZSA9IGFzeW5jIGZ1bmN0aW9uIChmaWx0ZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgc29ydCA9ICcnO1xuICAgIGlmIChvcHRpb25zLnNvcnRCeSkge1xuICAgICAgY29uc3Qgc29ydGluZ0NyaXRlcmlhOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgb3B0aW9ucy5zb3J0Qnkuc3BsaXQoJywnKS5mb3JFYWNoKChzb3J0T3B0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgW3Rva2VuLCBvcmRlcl0gPSBzb3J0T3B0aW9uLnNwbGl0KCc6Jyk7XG4gICAgICAgIHNvcnRpbmdDcml0ZXJpYS5wdXNoKChvcmRlciA9PT0gJ2Rlc2MnID8gJy0nIDogJycpICsgdG9rZW4pO1xuICAgICAgfSk7XG4gICAgICBzb3J0ID0gc29ydGluZ0NyaXRlcmlhLmpvaW4oJyAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydCA9ICdjcmVhdGVkQXQnO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbWl0ID1cbiAgICAgIG9wdGlvbnMubGltaXQgJiYgcGFyc2VJbnQob3B0aW9ucy5saW1pdCwgMTApID4gMFxuICAgICAgICA/IHBhcnNlSW50KG9wdGlvbnMubGltaXQsIDEwKVxuICAgICAgICA6IDEwO1xuICAgIGNvbnN0IHBhZ2UgPVxuICAgICAgb3B0aW9ucy5wYWdlICYmIHBhcnNlSW50KG9wdGlvbnMucGFnZSwgMTApID4gMFxuICAgICAgICA/IHBhcnNlSW50KG9wdGlvbnMucGFnZSwgMTApXG4gICAgICAgIDogMTtcbiAgICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgY29uc3QgY291bnRQcm9taXNlID0gdGhpcy5jb3VudERvY3VtZW50cyhmaWx0ZXIpLmV4ZWMoKTtcbiAgICBsZXQgZG9jc1Byb21pc2UgPSB0aGlzLmZpbmQoZmlsdGVyKS5zb3J0KHNvcnQpLnNraXAoc2tpcCkubGltaXQobGltaXQpO1xuXG4gICAgaWYgKG9wdGlvbnMucG9wdWxhdGUpIHtcbiAgICAgIG9wdGlvbnMucG9wdWxhdGUuc3BsaXQoJywnKS5mb3JFYWNoKChwb3B1bGF0ZU9wdGlvbjogYW55KSA9PiB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhpcyBhbnkgdHlwZVxuICAgICAgICBkb2NzUHJvbWlzZSA9IGRvY3NQcm9taXNlLnBvcHVsYXRlKFxuICAgICAgICAgIHBvcHVsYXRlT3B0aW9uXG4gICAgICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLnJlZHVjZSgoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+ICh7IHBhdGg6IGIsIHBvcHVsYXRlOiBhIH0pKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jc1Byb21pc2UgPSBkb2NzUHJvbWlzZS5leGVjKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2NvdW50UHJvbWlzZSwgZG9jc1Byb21pc2VdKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnN0IFt0b3RhbFJlc3VsdHMsIHJlc3VsdHNdID0gdmFsdWVzO1xuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyBsaW1pdCk7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHJlc3VsdHMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICB0b3RhbFBhZ2VzLFxuICAgICAgICB0b3RhbFJlc3VsdHMsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnaW5hdGU7XG4iXSwibmFtZXMiOlsicGFnaW5hdGUiLCJzY2hlbWEiLCJzdGF0aWNzIiwiZmlsdGVyIiwib3B0aW9ucyIsInNvcnQiLCJzb3J0aW5nQ3JpdGVyaWEiLCJsaW1pdCIsInBhZ2UiLCJza2lwIiwiY291bnRQcm9taXNlIiwiZG9jc1Byb21pc2UiLCJzb3J0QnkiLCJzcGxpdCIsImZvckVhY2giLCJzb3J0T3B0aW9uIiwidG9rZW4iLCJvcmRlciIsInB1c2giLCJqb2luIiwicGFyc2VJbnQiLCJjb3VudERvY3VtZW50cyIsImV4ZWMiLCJmaW5kIiwicG9wdWxhdGUiLCJwb3B1bGF0ZU9wdGlvbiIsInJldmVyc2UiLCJyZWR1Y2UiLCJhIiwiYiIsInBhdGgiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsInRvdGFsUmVzdWx0cyIsInJlc3VsdHMiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXN1bHQiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwREEsU0FBd0I7OztlQUF4QixRQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4RHhCLElBQU1BLFFBQVEsR0FBRyxTQUFDQyxNQUFjLEVBQUs7SUFDbkNBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRixRQUFRO21CQUFHLGtCQUFBLFNBQWdCRyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtnQkFDckRDLElBQUksRUFFQUMsZUFBZSxFQVVqQkMsS0FBSyxFQUlMQyxJQUFJLEVBSUpDLElBQUksRUFFSkMsWUFBWSxFQUNkQyxXQUFXOztnQkF2QlhOLElBQUksR0FBRyxFQUFF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