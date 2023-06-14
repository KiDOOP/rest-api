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
var _passport = /*#__PURE__*/ _interopRequireDefault(require("passport"));
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
// const verifyCallback =
//   (req: Request, resolve, reject, requiredRights: string[]) =>
//   async (err, user, info) => {
//     if (err || info || !user) {
//       return reject(
//         new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')
//       );
//     }
//     req.user = user;
//     if (requiredRights.length) {
//       const userRights = roleRights.get(user.role);
//       let hasRequiredRights = true;
//       if (userRights) {
//         hasRequiredRights = requiredRights.every((requiredRight) =>
//           userRights.includes(requiredRight)
//         );
//       }
//       if (!hasRequiredRights && req.params.userId !== user.id) {
//         return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
//       }
//     }
//     resolve();
//   };
// const auth =
//   (...requiredRights: string[]) =>
//   async (req: Request, res: Response, next: NextFunction) =>
//     new Promise((resolve, reject) => {
//       passport.authenticate(
//         'jwt',
//         { session: false },
//         verifyCallback(req, resolve, reject, requiredRights)
//       )(req, res, next);
//     })
//       .then(() => next())
//       .catch((err) => next(err));
// const verifyCallback =
//   (req, resolve, reject, requiredRights) => async (err, user, info) => {
//     if (err || info || !user) {
//       return reject(
//         new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')
//       );
//     }
//     req.user = user;
//     resolve();
//   };
var auth = function() {
    return function() {
        var _ref = _asyncToGenerator(function(req, res, next) {
            return __generator(this, function(_state) {
                return [
                    2,
                    new Promise(function() {
                        _passport.default.authenticate("jwt", {
                            session: false
                        })(req, res, next);
                    }).then(function() {
                        return next();
                    }).catch(function(err) {
                        return next(err);
                    })
                ];
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }();
};
var _default = auth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgQXBpRXJyb3IgZnJvbSAnLi4vdXRpbHMvQXBpRXJyb3InO1xuXG4vLyBjb25zdCB2ZXJpZnlDYWxsYmFjayA9XG4vLyAgIChyZXE6IFJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCwgcmVxdWlyZWRSaWdodHM6IHN0cmluZ1tdKSA9PlxuLy8gICBhc3luYyAoZXJyLCB1c2VyLCBpbmZvKSA9PiB7XG4vLyAgICAgaWYgKGVyciB8fCBpbmZvIHx8ICF1c2VyKSB7XG4vLyAgICAgICByZXR1cm4gcmVqZWN0KFxuLy8gICAgICAgICBuZXcgQXBpRXJyb3IoaHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsICdQbGVhc2UgYXV0aGVudGljYXRlJylcbi8vICAgICAgICk7XG4vLyAgICAgfVxuLy8gICAgIHJlcS51c2VyID0gdXNlcjtcblxuLy8gICAgIGlmIChyZXF1aXJlZFJpZ2h0cy5sZW5ndGgpIHtcbi8vICAgICAgIGNvbnN0IHVzZXJSaWdodHMgPSByb2xlUmlnaHRzLmdldCh1c2VyLnJvbGUpO1xuLy8gICAgICAgbGV0IGhhc1JlcXVpcmVkUmlnaHRzID0gdHJ1ZTtcbi8vICAgICAgIGlmICh1c2VyUmlnaHRzKSB7XG4vLyAgICAgICAgIGhhc1JlcXVpcmVkUmlnaHRzID0gcmVxdWlyZWRSaWdodHMuZXZlcnkoKHJlcXVpcmVkUmlnaHQpID0+XG4vLyAgICAgICAgICAgdXNlclJpZ2h0cy5pbmNsdWRlcyhyZXF1aXJlZFJpZ2h0KVxuLy8gICAgICAgICApO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBpZiAoIWhhc1JlcXVpcmVkUmlnaHRzICYmIHJlcS5wYXJhbXMudXNlcklkICE9PSB1c2VyLmlkKSB7XG4vLyAgICAgICAgIHJldHVybiByZWplY3QobmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuRk9SQklEREVOLCAnRm9yYmlkZGVuJykpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXNvbHZlKCk7XG4vLyAgIH07XG5cbi8vIGNvbnN0IGF1dGggPVxuLy8gICAoLi4ucmVxdWlyZWRSaWdodHM6IHN0cmluZ1tdKSA9PlxuLy8gICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+XG4vLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgcGFzc3BvcnQuYXV0aGVudGljYXRlKFxuLy8gICAgICAgICAnand0Jyxcbi8vICAgICAgICAgeyBzZXNzaW9uOiBmYWxzZSB9LFxuLy8gICAgICAgICB2ZXJpZnlDYWxsYmFjayhyZXEsIHJlc29sdmUsIHJlamVjdCwgcmVxdWlyZWRSaWdodHMpXG4vLyAgICAgICApKHJlcSwgcmVzLCBuZXh0KTtcbi8vICAgICB9KVxuLy8gICAgICAgLnRoZW4oKCkgPT4gbmV4dCgpKVxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IG5leHQoZXJyKSk7XG5cbi8vIGNvbnN0IHZlcmlmeUNhbGxiYWNrID1cbi8vICAgKHJlcSwgcmVzb2x2ZSwgcmVqZWN0LCByZXF1aXJlZFJpZ2h0cykgPT4gYXN5bmMgKGVyciwgdXNlciwgaW5mbykgPT4ge1xuLy8gICAgIGlmIChlcnIgfHwgaW5mbyB8fCAhdXNlcikge1xuLy8gICAgICAgcmV0dXJuIHJlamVjdChcbi8vICAgICAgICAgbmV3IEFwaUVycm9yKGh0dHBTdGF0dXMuVU5BVVRIT1JJWkVELCAnUGxlYXNlIGF1dGhlbnRpY2F0ZScpXG4vLyAgICAgICApO1xuLy8gICAgIH1cbi8vICAgICByZXEudXNlciA9IHVzZXI7XG5cbi8vICAgICByZXNvbHZlKCk7XG4vLyAgIH07XG5cbmNvbnN0IGF1dGggPSAoKSA9PiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSkocmVxLCByZXMsIG5leHQpO1xuICB9KVxuICAgIC50aGVuKCgpID0+IG5leHQoKSlcbiAgICAuY2F0Y2goKGVycikgPT4gbmV4dChlcnIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGg7XG4iXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsIm5leHQiLCJQcm9taXNlIiwicGFzc3BvcnQiLCJhdXRoZW50aWNhdGUiLCJzZXNzaW9uIiwidGhlbiIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRUEsU0FBb0I7OztlQUFwQixRQUFvQjs7OzZEQS9EQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9CLHlCQUF5QjtBQUN6QixpRUFBaUU7QUFDakUsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkIsdUVBQXVFO0FBQ3ZFLFdBQVc7QUFDWCxRQUFRO0FBQ1IsdUJBQXVCO0FBRXZCLG1DQUFtQztBQUNuQyxzREFBc0Q7QUFDdEQsc0NBQXNDO0FBQ3RDLDBCQUEwQjtBQUMxQixzRUFBc0U7QUFDdEUsK0NBQStDO0FBQy9DLGFBQWE7QUFDYixVQUFVO0FBRVYsbUVBQW1FO0FBQ25FLDBFQUEwRTtBQUMxRSxVQUFVO0FBQ1YsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixPQUFPO0FBRVAsZUFBZTtBQUNmLHFDQUFxQztBQUNyQywrREFBK0Q7QUFDL0QseUNBQXlDO0FBQ3pDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLCtEQUErRDtBQUMvRCwyQkFBMkI7QUFDM0IsU0FBUztBQUNULDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFFcEMseUJBQXlCO0FBQ3pCLDJFQUEyRTtBQUMzRSxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLHVFQUF1RTtBQUN2RSxXQUFXO0FBQ1gsUUFBUTtBQUNSLHVCQUF1QjtBQUV2QixpQkFBaUI7QUFDakIsT0FBTztBQUVQLElBQU1BLElBQUksR0FBRzs7bUJBQU0sa0JBQUEsU0FBT0MsR0FBWSxFQUFFQyxHQUFhLEVBQUVDLElBQWtCLEVBQUs7O2dCQUM1RTs7b0JBQU8sSUFBSUMsT0FBTyxDQUFDLFdBQU07d0JBQ3ZCQyxTQUFRLFFBQUEsQ0FBQ0MsWUFBWSxDQUFDLEtBQUssRUFBRTs0QkFBRUMsT0FBTyxFQUFFLEtBQUs7eUJBQUUsQ0FBQyxDQUFDTixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQ25FLENBQUMsQ0FBQyxDQUNDSyxJQUFJLENBQUM7K0JBQU1MLElBQUksRUFBRTtxQkFBQSxDQUFDLENBQ2xCTSxLQUFLLENBQUMsU0FBQ0MsR0FBRzsrQkFBS1AsSUFBSSxDQUFDTyxHQUFHLENBQUM7cUJBQUEsQ0FBQztrQkFBQzs7UUFDL0IsQ0FBQyxDQUFBO3dCQU55QlQsR0FBWSxFQUFFQyxHQUFhLEVBQUVDLElBQWtCOzs7O0NBTXhFLEFBQUM7SUFFRixRQUFvQixHQUFMSCxJQUFJIn0=