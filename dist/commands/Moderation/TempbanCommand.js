"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const ms_1 = __importDefault(require("ms"));
class TempbanCommand extends discord_akairo_1.Command {
    constructor() {
        super("tempban", {
            aliases: ["softban", "tempban"],
            category: "Moderation",
            description: {
                content: "tempbans a member for x amount of time",
                usage: "m!tempban @Toby 1d spamming",
                example: [
                    "tempban @Nemijah#6392 1d spam",
                    "softban Owo 1d spam",
                ]
            },
            userPermissions: ["BAN_MEMBERS"],
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member"
                },
                {
                    id: "time",
                    type: (msg, str) => {
                        return Number(ms_1.default(str));
                    },
                    prompt: {
                        start: (msg) => `${msg.author}, you must provide a time`,
                        retry: (msg) => `${msg.author}, you must provide a vaild time`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    default: "spamming"
                }
            ]
        });
    }
    async exec(message, { member, time, reason }) {
        if (member.roles.highest.position >= message.member.roles.highest.position && message.member.id != message.guild.ownerID) {
            return message.channel.send(`${message.author.tag}, you cannot tempban ${member.user.username}`);
        }
        await message.channel.send("this command is under development...");
    }
}
exports.default = TempbanCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGJhbkNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvTW9kZXJhdGlvbi9UZW1wYmFuQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUEwQztBQUUxQyw0Q0FBb0I7QUFFcEIsTUFBcUIsY0FBZSxTQUFRLHdCQUFPO0lBQy9DO1FBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7WUFDL0IsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSx3Q0FBd0M7Z0JBQ2pELEtBQUssRUFBRSw2QkFBNkI7Z0JBQ3BDLE9BQU8sRUFBRTtvQkFDTCwrQkFBK0I7b0JBQy9CLHFCQUFxQjtpQkFDeEI7YUFDSjtZQUNELGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO3dCQUNoQyxPQUFPLE1BQU0sQ0FBQyxZQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtvQkFDMUIsQ0FBQztvQkFDRCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLDJCQUEyQjt3QkFDakUsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLGlDQUFpQztxQkFDMUU7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLFVBQVU7aUJBQ3RCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQXdEO1FBQzlHLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDckgsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyx3QkFBd0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ25HO1FBQ0QsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDSjtBQTdDRCxpQ0E2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQsIEd1aWxkTWVtYmVyIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IG1zIGZyb20gJ21zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBiYW5Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ0ZW1wYmFuXCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wic29mdGJhblwiLCBcInRlbXBiYW5cIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1vZGVyYXRpb25cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwidGVtcGJhbnMgYSBtZW1iZXIgZm9yIHggYW1vdW50IG9mIHRpbWVcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcIm0hdGVtcGJhbiBAVG9ieSAxZCBzcGFtbWluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGJhbiBATmVtaWphaCM2MzkyIDFkIHNwYW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInNvZnRiYW4gT3dvIDFkIHNwYW1cIixcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb25zOiBbXCJCQU5fTUVNQkVSU1wiXSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogKG1zZzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihtcyhzdHIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgeW91IG11c3QgcHJvdmlkZSBhIHRpbWVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT4gYCR7bXNnLmF1dGhvcn0sIHlvdSBtdXN0IHByb3ZpZGUgYSB2YWlsZCB0aW1lYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVhc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcInNwYW1taW5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgbWVtYmVyLCB0aW1lLCByZWFzb24gfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyLCB0aW1lOiBudW1iZXIsIHJlYXNvbjogc3RyaW5nfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYobWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gbWVzc2FnZS5tZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiAmJiBtZXNzYWdlLm1lbWJlci5pZCAhPSBtZXNzYWdlLmd1aWxkLm93bmVySUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGAke21lc3NhZ2UuYXV0aG9yLnRhZ30sIHlvdSBjYW5ub3QgdGVtcGJhbiAke21lbWJlci51c2VyLnVzZXJuYW1lfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwidGhpcyBjb21tYW5kIGlzIHVuZGVyIGRldmVsb3BtZW50Li4uXCIpO1xyXG4gICAgfVxyXG59Il19