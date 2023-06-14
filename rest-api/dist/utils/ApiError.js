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
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ApiError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(ApiError, Error1);
    var _super = _createSuper(ApiError);
    function ApiError(statusCode, message) {
        _classCallCheck(this, ApiError);
        var _this;
        _this = _super.call(this, message);
        _this.statusCode = statusCode;
        _this.status = "".concat(statusCode).startsWith("4") ? "fail" : "error";
        _this.isOperational = true;
        Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
        return _this;
    }
    return ApiError;
}(_wrapNativeSuper(Error));
var _default = ApiError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9BcGlFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcGlFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgaXNPcGVyYXRpb25hbDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgICB0aGlzLnN0YXR1cyA9IGAke3N0YXR1c0NvZGV9YC5zdGFydHNXaXRoKCc0JykgPyAnZmFpbCcgOiAnZXJyb3InO1xuICAgIHRoaXMuaXNPcGVyYXRpb25hbCA9IHRydWU7XG5cbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcGlFcnJvcjtcbiJdLCJuYW1lcyI6WyJBcGlFcnJvciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhcnRzV2l0aCIsImlzT3BlcmF0aW9uYWwiLCJFcnJvciIsImNhcHR1cmVTdGFja1RyYWNlIiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQSxTQUF3Qjs7O2VBQXhCLFFBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCeEIsSUFBQSxBQUFNQSxRQUFRLGlCQWdCWCxBQWhCSDs7Y0FBTUEsUUFBUTs4QkFBUkEsUUFBUTthQUFSQSxRQUFRLENBS0FDLFVBQWtCLEVBQUVDLE9BQWU7OEJBTDNDRixRQUFROztrQ0FNSkUsT0FBTyxFQUFFO1FBRWYsTUFBS0QsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFDN0IsTUFBS0UsTUFBTSxHQUFHLEFBQUMsRUFBQSxDQUFhLE1BQUEsQ0FBWEYsVUFBVSxDQUFFLENBQUNHLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pFLE1BQUtDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFMUJDLEtBQUssQ0FBQ0MsaUJBQWlCLGdDQUFPLE1BQUtDLFdBQVcsQ0FBQyxDQUFDOzs7V0FaOUNSLFFBQVE7Q0FjYixrQkFkc0JNLEtBQUssRUFjM0I7SUFFRCxRQUF3QixHQUFUTixRQUFRIn0=