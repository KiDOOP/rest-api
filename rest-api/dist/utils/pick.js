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
var pick = function(object, keys) {
    return keys.reduce(function(obj, token) {
        if (object && Object.hasOwn(object, token)) {
            obj[token] = object[token];
        }
        return obj;
    }, {});
};
var _default = pick;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9waWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBpY2sgPSAob2JqZWN0OiBhbnksIGtleXM6IHN0cmluZ1tdKSA9PiB7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgob2JqOiBhbnksIHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICBpZiAob2JqZWN0ICYmIE9iamVjdC5oYXNPd24ob2JqZWN0LCB0b2tlbikpIHtcbiAgICAgIG9ialt0b2tlbl0gPSBvYmplY3RbdG9rZW5dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrO1xuIl0sIm5hbWVzIjpbInBpY2siLCJvYmplY3QiLCJrZXlzIiwicmVkdWNlIiwib2JqIiwidG9rZW4iLCJPYmplY3QiLCJoYXNPd24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBLFNBQW9COzs7ZUFBcEIsUUFBb0I7OztBQVRwQixJQUFNQSxJQUFJLEdBQUcsU0FBQ0MsTUFBVyxFQUFFQyxJQUFjLEVBQUs7SUFDNUMsT0FBT0EsSUFBSSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsR0FBUSxFQUFFQyxLQUFhLEVBQUs7UUFDOUMsSUFBSUosTUFBTSxJQUFJSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ04sTUFBTSxFQUFFSSxLQUFLLENBQUMsRUFBRTtZQUMxQ0QsR0FBRyxDQUFDQyxLQUFLLENBQUMsR0FBR0osTUFBTSxDQUFDSSxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsT0FBT0QsR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxBQUFDO0lBRUYsUUFBb0IsR0FBTEosSUFBSSJ9