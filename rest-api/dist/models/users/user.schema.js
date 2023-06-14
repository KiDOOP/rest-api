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
var _mongoose = require("mongoose");
var _validator = /*#__PURE__*/ _interopRequireDefault(require("validator"));
var _bcrypt = /*#__PURE__*/ _interopRequireDefault(require("bcrypt"));
var _userMethods = require("./user.methods");
var _userStatics = require("./user.statics");
var _plugins = require("../plugins");
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
var UserSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            "Email is required"
        ],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [
            _validator.default.isEmail,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Password is required"
        ],
        minlength: 7,
        trim: true,
        validate: function(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error("Password must contain at least one letter and one number");
            }
        },
        private: true
    },
    phone_number: {
        type: String,
        required: [
            true,
            "Phone Number is empty"
        ],
        minlength: 10,
        trim: true
    },
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
// add plugin that converts mongoose to json
UserSchema.plugin(_plugins.toJSON);
UserSchema.plugin(_plugins.paginate);
UserSchema.methods.setLastUpdated = _userMethods.setLastUpdated;
UserSchema.methods.isPasswordMatch = _userMethods.isPasswordMatch;
UserSchema.statics.isEmailTaken = _userStatics.isEmailTaken;
UserSchema.pre("save", function() {
    var _ref = _asyncToGenerator(function(next) {
        var user;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    user = this;
                    if (!user.isModified("password")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _bcrypt.default.hash(user.password, 8)
                    ];
                case 1:
                    user.password = _state.sent();
                    _state.label = 2;
                case 2:
                    next();
                    return [
                        2
                    ];
            }
        });
    });
    return function(next) {
        return _ref.apply(this, arguments);
    };
}());
var _default = UserSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlcnMvdXNlci5zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgc2V0TGFzdFVwZGF0ZWQsIGlzUGFzc3dvcmRNYXRjaCB9IGZyb20gJy4vdXNlci5tZXRob2RzJztcbmltcG9ydCB7IGlzRW1haWxUYWtlbiB9IGZyb20gJy4vdXNlci5zdGF0aWNzJztcbmltcG9ydCB7IHRvSlNPTiwgcGFnaW5hdGUgfSBmcm9tICcuLi9wbHVnaW5zJztcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ05hbWUgaXMgcmVxdWlyZWQnXSxcbiAgICB0cmltOiB0cnVlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdFbWFpbCBpcyByZXF1aXJlZCddLFxuICAgIHRyaW06IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgICB2YWxpZGF0ZTogW3ZhbGlkYXRvci5pc0VtYWlsLCAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCddLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdQYXNzd29yZCBpcyByZXF1aXJlZCddLFxuICAgIG1pbmxlbmd0aDogNyxcbiAgICB0cmltOiB0cnVlLFxuICAgIHZhbGlkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdmFsdWUubWF0Y2goL1xcZC8pIHx8ICF2YWx1ZS5tYXRjaCgvW2EtekEtWl0vKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJpdmF0ZTogdHJ1ZSxcbiAgfSxcbiAgcGhvbmVfbnVtYmVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1Bob25lIE51bWJlciBpcyBlbXB0eSddLFxuICAgIG1pbmxlbmd0aDogMTAsXG4gICAgdHJpbTogdHJ1ZSxcbiAgfSxcbiAgZGF0ZU9mRW50cnk6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IG5ldyBEYXRlKCksXG4gIH0sXG4gIGxhc3RVcGRhdGVkOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBuZXcgRGF0ZSgpLFxuICB9LFxufSk7XG5cbi8vIGFkZCBwbHVnaW4gdGhhdCBjb252ZXJ0cyBtb25nb29zZSB0byBqc29uXG5Vc2VyU2NoZW1hLnBsdWdpbih0b0pTT04pO1xuVXNlclNjaGVtYS5wbHVnaW4ocGFnaW5hdGUpO1xuVXNlclNjaGVtYS5tZXRob2RzLnNldExhc3RVcGRhdGVkID0gc2V0TGFzdFVwZGF0ZWQ7XG5Vc2VyU2NoZW1hLm1ldGhvZHMuaXNQYXNzd29yZE1hdGNoID0gaXNQYXNzd29yZE1hdGNoO1xuVXNlclNjaGVtYS5zdGF0aWNzLmlzRW1haWxUYWtlbiA9IGlzRW1haWxUYWtlbjtcblVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcbiAgY29uc3QgdXNlciA9IHRoaXM7XG4gIGlmICh1c2VyLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHtcbiAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godXNlci5wYXNzd29yZCwgOCk7XG4gIH1cbiAgbmV4dCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTY2hlbWE7XG4iXSwibmFtZXMiOlsiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJ2YWxpZGF0ZSIsInZhbGlkYXRvciIsImlzRW1haWwiLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInZhbHVlIiwibWF0Y2giLCJFcnJvciIsInByaXZhdGUiLCJwaG9uZV9udW1iZXIiLCJkYXRlT2ZFbnRyeSIsIkRhdGUiLCJkZWZhdWx0IiwibGFzdFVwZGF0ZWQiLCJwbHVnaW4iLCJ0b0pTT04iLCJwYWdpbmF0ZSIsIm1ldGhvZHMiLCJzZXRMYXN0VXBkYXRlZCIsImlzUGFzc3dvcmRNYXRjaCIsInN0YXRpY3MiLCJpc0VtYWlsVGFrZW4iLCJwcmUiLCJuZXh0IiwidXNlciIsImlzTW9kaWZpZWQiLCJiY3J5cHQiLCJoYXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpRUEsU0FBMEI7OztlQUExQixRQUEwQjs7O3dCQWpFSCxVQUFVOzhEQUNYLFdBQVc7MkRBQ2QsUUFBUTsyQkFDcUIsZ0JBQWdCOzJCQUNuQyxnQkFBZ0I7dUJBQ1osWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxVQUFVLEdBQUcsSUFBSUMsU0FBTSxPQUFBLENBQUM7SUFDNUJDLElBQUksRUFBRTtRQUNKQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLGtCQUFrQjtTQUFDO1FBQ3BDQyxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0RDLEtBQUssRUFBRTtRQUNMSixJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLG1CQUFtQjtTQUFDO1FBQ3JDQyxJQUFJLEVBQUUsSUFBSTtRQUNWRSxNQUFNLEVBQUUsSUFBSTtRQUNaQyxTQUFTLEVBQUUsSUFBSTtRQUNmQyxRQUFRLEVBQUU7WUFBQ0MsVUFBUyxRQUFBLENBQUNDLE9BQU87WUFBRSw4QkFBOEI7U0FBQztLQUM5RDtJQUNEQyxRQUFRLEVBQUU7UUFDUlYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRTtZQUFDLElBQUk7WUFBRSxzQkFBc0I7U0FBQztRQUN4Q1MsU0FBUyxFQUFFLENBQUM7UUFDWlIsSUFBSSxFQUFFLElBQUk7UUFDVkksUUFBUSxFQUFSQSxTQUFTSyxLQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDQSxLQUFLLENBQUNDLEtBQUssTUFBTSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxZQUFZLEVBQUU7Z0JBQ2xELE1BQU0sSUFBSUMsS0FBSyxDQUNiLDBEQUEwRCxDQUMzRCxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7UUFDREMsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNEQyxZQUFZLEVBQUU7UUFDWmhCLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUU7WUFBQyxJQUFJO1lBQUUsdUJBQXVCO1NBQUM7UUFDekNTLFNBQVMsRUFBRSxFQUFFO1FBQ2JSLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRGMsV0FBVyxFQUFFO1FBQ1hqQixJQUFJLEVBQUVrQixJQUFJO1FBQ1ZDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLEVBQUU7S0FDcEI7SUFDREUsV0FBVyxFQUFFO1FBQ1hwQixJQUFJLEVBQUVrQixJQUFJO1FBQ1ZDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLEVBQUU7S0FDcEI7Q0FDRixDQUFDLEFBQUM7QUFFSCw0Q0FBNEM7QUFDNUNyQixVQUFVLENBQUN3QixNQUFNLENBQUNDLFFBQU0sT0FBQSxDQUFDLENBQUM7QUFDMUJ6QixVQUFVLENBQUN3QixNQUFNLENBQUNFLFFBQVEsU0FBQSxDQUFDLENBQUM7QUFDNUIxQixVQUFVLENBQUMyQixPQUFPLENBQUNDLGNBQWMsR0FBR0EsWUFBYyxlQUFBLENBQUM7QUFDbkQ1QixVQUFVLENBQUMyQixPQUFPLENBQUNFLGVBQWUsR0FBR0EsWUFBZSxnQkFBQSxDQUFDO0FBQ3JEN0IsVUFBVSxDQUFDOEIsT0FBTyxDQUFDQyxZQUFZLEdBQUdBLFlBQVksYUFBQSxDQUFDO0FBQy9DL0IsVUFBVSxDQUFDZ0MsR0FBRyxDQUFDLE1BQU07ZUFBRSxrQkFBQSxTQUFnQkMsSUFBSSxFQUFFO1lBQ3JDQyxJQUFJOzs7O29CQUFKQSxJQUFJLEdBQUcsSUFBSSxDQUFDO3lCQUNkQSxJQUFJLENBQUNDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBM0JEOzs7c0JBQTJCO29CQUNiOzt3QkFBTUUsT0FBTSxRQUFBLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDckIsUUFBUSxFQUFFLENBQUMsQ0FBQztzQkFBQTs7b0JBQW5EcUIsSUFBSSxDQUFDckIsUUFBUSxHQUFHLGFBQW1DLENBQUM7OztvQkFFdERvQixJQUFJLEVBQUUsQ0FBQzs7Ozs7O0lBQ1QsQ0FBQyxDQUFBO29CQU5zQ0EsSUFBSTs7O0lBTXpDLENBQUM7SUFFSCxRQUEwQixHQUFYakMsVUFBVSJ9