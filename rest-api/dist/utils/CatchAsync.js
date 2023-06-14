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
var catchAsync = function(fn) {
    return function(req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
var _default = catchAsync;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9DYXRjaEFzeW5jLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgY2F0Y2hBc3luYyA9XG4gIChmbjogKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiBQcm9taXNlPHZvaWQ+KSA9PlxuICAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICBQcm9taXNlLnJlc29sdmUoZm4ocmVxLCByZXMsIG5leHQpKS5jYXRjaChuZXh0KTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hBc3luYztcbiJdLCJuYW1lcyI6WyJjYXRjaEFzeW5jIiwiZm4iLCJyZXEiLCJyZXMiLCJuZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUEsU0FBMEI7OztlQUExQixRQUEwQjs7O0FBTjFCLElBQU1BLFVBQVUsR0FDZCxTQUFDQyxFQUFzRTtXQUN2RSxTQUFDQyxHQUFZLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0IsRUFBSztRQUNuREMsT0FBTyxDQUFDQyxPQUFPLENBQUNMLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUFBLEFBQUM7SUFFSixRQUEwQixHQUFYSixVQUFVIn0=