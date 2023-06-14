"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
var _config = /*#__PURE__*/ _interopRequireDefault(require("./config"));
var _loaders = /*#__PURE__*/ _interopRequireDefault(require("./loaders"));
var _logger = /*#__PURE__*/ _interopRequireDefault(require("./loaders/logger"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
process.on("uncaughtException", function(error) {
    console.log("\uD83D\uDD34 UNCAUGHT EXCEPTION!");
    console.info(error);
    console.info("⚠️ Server Closed!");
    process.exit(1);
});
var server;
var app = (0, _express.default)();
(0, _loaders.default)({
    expressApp: app
}).then(function() {
    server = app.listen(_config.default.port, function() {
        _logger.default.info("\uD83D\uDE80 Server started on port ".concat(process.env.PORT));
    });
});
process.on("unhandledRejection", function(error) {
    _logger.default.info("\uD83D\uDD34 UNHANDLED REJECTION!");
    _logger.default.info(error);
    if (server) {
        server.close(function() {
            _logger.default.info("⚠️ Server Closed!");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});
process.on("SIGTERM", function() {
    _logger.default.info("\uD83D\uDD34 SIGTERM RECEIVED!");
    if (server) {
        server.close(function() {
            _logger.default.info("⚠️ Server Closed!");
        });
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZygn8J+UtCBVTkNBVUdIVCBFWENFUFRJT04hJyk7XG4gIGNvbnNvbGUuaW5mbyhlcnJvcik7XG4gIGNvbnNvbGUuaW5mbygn4pqg77iPIFNlcnZlciBDbG9zZWQhJyk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IExvYWRlcnMgZnJvbSAnLi9sb2FkZXJzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2FkZXJzL2xvZ2dlcic7XG5cbmxldCBzZXJ2ZXI6IGFueTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbkxvYWRlcnMoeyBleHByZXNzQXBwOiBhcHAgfSkudGhlbigoKSA9PiB7XG4gIHNlcnZlciA9IGFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgICBsb2dnZXIuaW5mbyhg8J+agCBTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICR7cHJvY2Vzcy5lbnYuUE9SVH1gKTtcbiAgfSk7XG59KTtcblxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKGVycm9yOiBFcnJvcikgPT4ge1xuICBsb2dnZXIuaW5mbygn8J+UtCBVTkhBTkRMRUQgUkVKRUNUSU9OIScpO1xuICBsb2dnZXIuaW5mbyhlcnJvcik7XG4gIGlmIChzZXJ2ZXIpIHtcbiAgICBzZXJ2ZXIuY2xvc2UoKCkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oJ+KaoO+4jyBTZXJ2ZXIgQ2xvc2VkIScpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufSk7XG5wcm9jZXNzLm9uKCdTSUdURVJNJywgKCkgPT4ge1xuICBsb2dnZXIuaW5mbygn8J+UtCBTSUdURVJNIFJFQ0VJVkVEIScpO1xuICBpZiAoc2VydmVyKSB7XG4gICAgc2VydmVyLmNsb3NlKCgpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKCfimqDvuI8gU2VydmVyIENsb3NlZCEnKTtcbiAgICB9KTtcbiAgfVxufSk7Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImluZm8iLCJleGl0Iiwic2VydmVyIiwiYXBwIiwiZXhwcmVzcyIsIkxvYWRlcnMiLCJleHByZXNzQXBwIiwidGhlbiIsImxpc3RlbiIsImNvbmZpZyIsInBvcnQiLCJsb2dnZXIiLCJlbnYiLCJQT1JUIiwiY2xvc2UiXSwibWFwcGluZ3MiOiJBQUFBQTs7Ozs0REFPb0IsU0FBUzsyREFDVixVQUFVOzREQUNULFdBQVc7MkRBQ1osa0JBQWtCOzs7Ozs7QUFWckNBLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFNBQUNDLEtBQUssRUFBSztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQXVCLENBQUMsQ0FBQztJQUNyQ0QsT0FBTyxDQUFDRSxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQ3BCQyxPQUFPLENBQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xDTCxPQUFPLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQztBQU9ILElBQUlDLE1BQU0sQUFBSyxBQUFDO0FBQ2hCLElBQU1DLEdBQUcsR0FBR0MsSUFBQUEsUUFBTyxRQUFBLEdBQUUsQUFBQztBQUN0QkMsSUFBQUEsUUFBTyxRQUFBLEVBQUM7SUFBRUMsVUFBVSxFQUFFSCxHQUFHO0NBQUUsQ0FBQyxDQUFDSSxJQUFJLENBQUMsV0FBTTtJQUN0Q0wsTUFBTSxHQUFHQyxHQUFHLENBQUNLLE1BQU0sQ0FBQ0MsT0FBTSxRQUFBLENBQUNDLElBQUksRUFBRSxXQUFNO1FBQ3JDQyxPQUFNLFFBQUEsQ0FBQ1gsSUFBSSxDQUFDLEFBQUMsc0NBQXlCLENBQW1CLE1BQUEsQ0FBakJMLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUhsQixPQUFPLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxTQUFDQyxLQUFZLEVBQUs7SUFDakRjLE9BQU0sUUFBQSxDQUFDWCxJQUFJLENBQUMsbUNBQXdCLENBQUMsQ0FBQztJQUN0Q1csT0FBTSxRQUFBLENBQUNYLElBQUksQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFDbkIsSUFBSUssTUFBTSxFQUFFO1FBQ1ZBLE1BQU0sQ0FBQ1ksS0FBSyxDQUFDLFdBQU07WUFDakJILE9BQU0sUUFBQSxDQUFDWCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQ0wsT0FBTyxDQUFDTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxPQUFPO1FBQ0xOLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUNITixPQUFPLENBQUNDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBTTtJQUMxQmUsT0FBTSxRQUFBLENBQUNYLElBQUksQ0FBQyxnQ0FBcUIsQ0FBQyxDQUFDO0lBQ25DLElBQUlFLE1BQU0sRUFBRTtRQUNWQSxNQUFNLENBQUNZLEtBQUssQ0FBQyxXQUFNO1lBQ2pCSCxPQUFNLFFBQUEsQ0FBQ1gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==