"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isEmailTaken", {
    enumerable: true,
    get: function() {
        return isEmailTaken;
    }
});
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
function isEmailTaken(email, excludeId) {
    return _isEmailTaken.apply(this, arguments);
}
function _isEmailTaken() {
    _isEmailTaken = _asyncToGenerator(function(email, excludeId) {
        var user, _tmp;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _tmp = {};
                    return [
                        4,
                        this.findOne((_tmp.email = email, _tmp._id = {
                            $ne: excludeId || null
                        }, _tmp))
                    ];
                case 1:
                    user = _state.sent();
                    console.log(email);
                    return [
                        2,
                        !!user
                    ];
            }
        });
    });
    return _isEmailTaken.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlcnMvdXNlci5zdGF0aWNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSVVzZXJEb2N1bWVudCB9IGZyb20gJy4vdXNlci50eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0VtYWlsVGFrZW4oXG4gIHRoaXM6IE1vZGVsPElVc2VyRG9jdW1lbnQ+LFxuICBlbWFpbDogc3RyaW5nLFxuICBleGNsdWRlSWQ6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmZpbmRPbmUoeyBlbWFpbCwgX2lkOiB7ICRuZTogZXhjbHVkZUlkIHx8IG51bGwgfSB9KTtcbiAgY29uc29sZS5sb2coZW1haWwpO1xuICByZXR1cm4gISF1c2VyO1xufVxuIl0sIm5hbWVzIjpbImlzRW1haWxUYWtlbiIsImVtYWlsIiwiZXhjbHVkZUlkIiwidXNlciIsImZpbmRPbmUiLCJfaWQiLCIkbmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFHc0JBLGNBQVk7OztlQUFaQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQVpBLFlBQVksQ0FFaENDLEtBQWEsRUFDYkMsU0FBaUI7V0FIR0YsYUFBWTs7U0FBWkEsYUFBWTtJQUFaQSxhQUFZLEdBQTNCLGtCQUFBLFNBRUxDLEtBQWEsRUFDYkMsU0FBaUIsRUFDakI7WUFDTUMsSUFBSTs7Ozs7b0JBQUc7O3dCQUFNLElBQUksQ0FBQ0MsT0FBTyxPQUFHSCxLQUFLLEdBQUxBLEtBQUssT0FBRUksR0FBRyxHQUFFOzRCQUFFQyxHQUFHLEVBQUVKLFNBQVMsSUFBSSxJQUFJO3lCQUFFLFFBQUc7c0JBQUE7O29CQUFyRUMsSUFBSSxHQUFHLGFBQThELENBQUE7b0JBQzNFSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ25COzt3QkFBTyxDQUFDLENBQUNFLElBQUk7c0JBQUM7OztJQUNoQixDQUFDLENBQUE7V0FScUJILGFBQVkifQ==