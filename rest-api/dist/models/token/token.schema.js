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
var _plugins = require("../plugins");
var _constants = require("../../config/constants");
var TokenSchema = new _mongoose.Schema({
    token: {
        type: String,
        required: true,
        index: true
    },
    user: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        enum: [
            _constants.tokenTypes.REFRESH,
            _constants.tokenTypes.RESET_PASSWORD,
            _constants.tokenTypes.VERIFY_EMAIL, 
        ],
        required: true
    },
    expires: {
        type: Date,
        required: true
    },
    blacklisted: {
        type: Boolean,
        default: false
    }
});
TokenSchema.plugin(_plugins.toJSON);
var _default = TokenSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdG9rZW4vdG9rZW4uc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IHRvSlNPTiB9IGZyb20gJy4uL3BsdWdpbnMnO1xuaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25zdGFudHMnO1xuXG5jb25zdCBUb2tlblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB0b2tlbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBpbmRleDogdHJ1ZSxcbiAgfSxcbiAgdXNlcjoge1xuICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgdHlwZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBlbnVtOiBbXG4gICAgICB0b2tlblR5cGVzLlJFRlJFU0gsXG4gICAgICB0b2tlblR5cGVzLlJFU0VUX1BBU1NXT1JELFxuICAgICAgdG9rZW5UeXBlcy5WRVJJRllfRU1BSUwsXG4gICAgXSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgZXhwaXJlczoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGJsYWNrbGlzdGVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbn0pO1xuVG9rZW5TY2hlbWEucGx1Z2luKHRvSlNPTik7XG5leHBvcnQgZGVmYXVsdCBUb2tlblNjaGVtYTtcbiJdLCJuYW1lcyI6WyJUb2tlblNjaGVtYSIsIlNjaGVtYSIsInRva2VuIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW5kZXgiLCJ1c2VyIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImVudW0iLCJ0b2tlblR5cGVzIiwiUkVGUkVTSCIsIlJFU0VUX1BBU1NXT1JEIiwiVkVSSUZZX0VNQUlMIiwiZXhwaXJlcyIsIkRhdGUiLCJibGFja2xpc3RlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGx1Z2luIiwidG9KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQ0EsU0FBMkI7OztlQUEzQixRQUEyQjs7O3dCQWxDSixVQUFVO3VCQUNWLFlBQVk7eUJBQ1Isd0JBQXdCO0FBRW5ELElBQU1BLFdBQVcsR0FBRyxJQUFJQyxTQUFNLE9BQUEsQ0FBQztJQUM3QkMsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0RDLElBQUksRUFBRTtRQUNKSixJQUFJLEVBQUVGLFNBQU0sT0FBQSxDQUFDTyxLQUFLLENBQUNDLFFBQVE7UUFDM0JDLEdBQUcsRUFBRSxNQUFNO1FBQ1hMLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREYsSUFBSSxFQUFFO1FBQ0pBLElBQUksRUFBRUMsTUFBTTtRQUNaTyxJQUFJLEVBQUU7WUFDSkMsVUFBVSxXQUFBLENBQUNDLE9BQU87WUFDbEJELFVBQVUsV0FBQSxDQUFDRSxjQUFjO1lBQ3pCRixVQUFVLFdBQUEsQ0FBQ0csWUFBWTtTQUN4QjtRQUNEVixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RXLE9BQU8sRUFBRTtRQUNQYixJQUFJLEVBQUVjLElBQUk7UUFDVlosUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNEYSxXQUFXLEVBQUU7UUFDWGYsSUFBSSxFQUFFZ0IsT0FBTztRQUNiQyxPQUFPLEVBQUUsS0FBSztLQUNmO0NBQ0YsQ0FBQyxBQUFDO0FBQ0hwQixXQUFXLENBQUNxQixNQUFNLENBQUNDLFFBQU0sT0FBQSxDQUFDLENBQUM7SUFDM0IsUUFBMkIsR0FBWnRCLFdBQVcifQ==