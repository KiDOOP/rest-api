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
var _testMethods = require("./test.methods");
var _plugins = require("../plugins");
var TestSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        trim: true
    },
    numOfQues: {
        type: Number,
        required: [
            true,
            "No of Questions is required"
        ],
        trim: true
    },
    questions: [
        {
            question: String,
            options: [],
            answer: String
        }, 
    ],
    users: [
        {
            user: {
                type: _mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: [
                    true,
                    "User is required"
                ]
            }
        }, 
    ],
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
TestSchema.plugin(_plugins.toJSON);
TestSchema.plugin(_plugins.paginate);
TestSchema.methods.setLastUpdated = _testMethods.setLastUpdated;
var _default = TestSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdGVzdHMvdGVzdC5zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgc2V0TGFzdFVwZGF0ZWQgfSBmcm9tICcuL3Rlc3QubWV0aG9kcyc7XG5pbXBvcnQgeyB0b0pTT04sIHBhZ2luYXRlIH0gZnJvbSAnLi4vcGx1Z2lucyc7XG5cbmNvbnN0IFRlc3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdOYW1lIGlzIHJlcXVpcmVkJ10sXG4gICAgdHJpbTogdHJ1ZSxcbiAgfSxcbiAgbnVtT2ZRdWVzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ05vIG9mIFF1ZXN0aW9ucyBpcyByZXF1aXJlZCddLFxuICAgIHRyaW06IHRydWUsXG4gIH0sXG4gIHF1ZXN0aW9uczogW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBTdHJpbmcsXG4gICAgICBvcHRpb25zOiBbXSxcbiAgICAgIGFuc3dlcjogU3RyaW5nLFxuICAgIH0sXG4gIF0sXG4gIHVzZXJzOiBbXG4gICAge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ3VzZXInLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdVc2VyIGlzIHJlcXVpcmVkJ10sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIGRhdGVPZkVudHJ5OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBuZXcgRGF0ZSgpLFxuICB9LFxuICBsYXN0VXBkYXRlZDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogbmV3IERhdGUoKSxcbiAgfSxcbn0pO1xuXG4vLyBhZGQgcGx1Z2luIHRoYXQgY29udmVydHMgbW9uZ29vc2UgdG8ganNvblxuVGVzdFNjaGVtYS5wbHVnaW4odG9KU09OKTtcblRlc3RTY2hlbWEucGx1Z2luKHBhZ2luYXRlKTtcblRlc3RTY2hlbWEubWV0aG9kcy5zZXRMYXN0VXBkYXRlZCA9IHNldExhc3RVcGRhdGVkO1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0U2NoZW1hO1xuIl0sIm5hbWVzIjpbIlRlc3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsIm51bU9mUXVlcyIsIk51bWJlciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsInVzZXJzIiwidXNlciIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJkYXRlT2ZFbnRyeSIsIkRhdGUiLCJkZWZhdWx0IiwibGFzdFVwZGF0ZWQiLCJwbHVnaW4iLCJ0b0pTT04iLCJwYWdpbmF0ZSIsIm1ldGhvZHMiLCJzZXRMYXN0VXBkYXRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBLFNBQTBCOzs7ZUFBMUIsUUFBMEI7Ozt3QkE5Q0gsVUFBVTsyQkFDRixnQkFBZ0I7dUJBQ2QsWUFBWTtBQUU3QyxJQUFNQSxVQUFVLEdBQUcsSUFBSUMsU0FBTSxPQUFBLENBQUM7SUFDNUJDLElBQUksRUFBRTtRQUNKQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLGtCQUFrQjtTQUFDO1FBQ3BDQyxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0RDLFNBQVMsRUFBRTtRQUNUSixJQUFJLEVBQUVLLE1BQU07UUFDWkgsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLDZCQUE2QjtTQUFDO1FBQy9DQyxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0RHLFNBQVMsRUFBRTtRQUNUO1lBQ0VDLFFBQVEsRUFBRU4sTUFBTTtZQUNoQk8sT0FBTyxFQUFFLEVBQUU7WUFDWEMsTUFBTSxFQUFFUixNQUFNO1NBQ2Y7S0FDRjtJQUNEUyxLQUFLLEVBQUU7UUFDTDtZQUNFQyxJQUFJLEVBQUU7Z0JBQ0pYLElBQUksRUFBRUYsU0FBTSxPQUFBLENBQUNjLEtBQUssQ0FBQ0MsUUFBUTtnQkFDM0JDLEdBQUcsRUFBRSxNQUFNO2dCQUNYWixRQUFRLEVBQUU7b0JBQUMsSUFBSTtvQkFBRSxrQkFBa0I7aUJBQUM7YUFDckM7U0FDRjtLQUNGO0lBQ0RhLFdBQVcsRUFBRTtRQUNYZixJQUFJLEVBQUVnQixJQUFJO1FBQ1ZDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLEVBQUU7S0FDcEI7SUFDREUsV0FBVyxFQUFFO1FBQ1hsQixJQUFJLEVBQUVnQixJQUFJO1FBQ1ZDLE9BQU8sRUFBRSxJQUFJRCxJQUFJLEVBQUU7S0FDcEI7Q0FDRixDQUFDLEFBQUM7QUFFSCw0Q0FBNEM7QUFDNUNuQixVQUFVLENBQUNzQixNQUFNLENBQUNDLFFBQU0sT0FBQSxDQUFDLENBQUM7QUFDMUJ2QixVQUFVLENBQUNzQixNQUFNLENBQUNFLFFBQVEsU0FBQSxDQUFDLENBQUM7QUFDNUJ4QixVQUFVLENBQUN5QixPQUFPLENBQUNDLGNBQWMsR0FBR0EsWUFBYyxlQUFBLENBQUM7SUFFbkQsUUFBMEIsR0FBWDFCLFVBQVUifQ==