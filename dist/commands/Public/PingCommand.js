"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping", "p"],
            category: "Public",
            description: {
                content: "Check the latency of the ping to the discord api",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.util.send(`pong ${this.client.ws.ping}ms`);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljL1BpbmdDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXNCLFdBQVksU0FBUyx3QkFBTztJQUM5QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsa0RBQWtEO2dCQUMzRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTTtpQkFDVDthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FFSjtBQXBCRCw4QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgUGluZ0NvbW1hbmQgZXh0ZW5kcyAgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJwaW5nXCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wicGluZ1wiLCBcInBcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgcGluZyB0byB0aGUgZGlzY29yZCBhcGlcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcInBpbmdcIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwaW5nXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgcG9uZyAke3RoaXMuY2xpZW50LndzLnBpbmd9bXNgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19