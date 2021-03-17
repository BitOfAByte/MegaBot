"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms_1 = __importDefault(require("ms"));
const Giveaways_1 = require("../../database/TypeOrm/Models/Giveaways");
const giveaways_1 = __importDefault(require("../../structures/giveaways/giveaways"));
class GiveawayCommand extends discord_akairo_1.Command {
    constructor() {
        super("giveaway", {
            aliases: ["giveaway", "g"],
            category: "Admin",
            description: {
                content: "starts a giveaway",
                usage: "giveaway [time] [prize]",
                examples: [
                    "giveaway 10m Discord nitro"
                ]
            },
            userPermissions: "ADMINISTRATOR",
            ratelimit: 3,
            args: [
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
                    id: "item",
                    type: "string",
                    match: "rest",
                    prompt: {
                        start: (msg) => `${msg.author}, you must provide a prize`
                    }
                }
            ]
        });
    }
    async exec(message, { time, item }) {
        const giveawayRepo = this.client.db.getRepository(Giveaways_1.Giveaways);
        const end = Date.now() + time;
        const msg = await message.channel.send(new discord_js_1.MessageEmbed()
            .setAuthor(`Giveaway | ${item}`)
            .setColor("RANDOM")
            .setDescription(`${message.author.tag} is giving away **${item}**!`)
            .setFooter("Giveaway ends")
            .setTimestamp(end));
        await msg.react("🥳");
        await giveawayRepo.insert({
            channel: msg.channel.id,
            message: msg.id,
            end: end
        });
        setTimeout(() => {
            giveaways_1.default.end(giveawayRepo, msg);
        }, time);
    }
}
exports.default = GiveawayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL0FkbWluL0dpdmVhd2F5Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFDbkQsNENBQW9CO0FBR3BCLHVFQUFrRTtBQUVsRSxxRkFBNkQ7QUFFN0QsTUFBcUIsZUFBZ0IsU0FBUSx3QkFBTztJQUNoRDtRQUNJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1lBQzFCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxRQUFRLEVBQUU7b0JBQ04sNEJBQTRCO2lCQUMvQjthQUNKO1lBQ0QsZUFBZSxFQUFFLGVBQWU7WUFDaEMsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO3dCQUNoQyxPQUFPLE1BQU0sQ0FBQyxZQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtvQkFDMUIsQ0FBQztvQkFDRCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLDJCQUEyQjt3QkFDakUsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLGlDQUFpQztxQkFDMUU7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSw0QkFBNEI7cUJBQ3JFO2lCQUNKO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBaUM7UUFDNUUsTUFBTSxZQUFZLEdBQTBCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLENBQUM7UUFDcEYsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUVyQyxNQUFNLEdBQUcsR0FBWSxNQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksRUFBRTthQUM5RCxTQUFTLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQzthQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLGNBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxxQkFBcUIsSUFBSSxLQUFLLENBQUM7YUFDbkUsU0FBUyxDQUFDLGVBQWUsQ0FBQzthQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ3JCLENBQUM7UUFDRixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsR0FBRyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUM7UUFHSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osbUJBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNaLENBQUM7Q0FDSjtBQTdERCxrQ0E2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgbXMgZnJvbSAnbXMnO1xyXG5cclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xyXG5pbXBvcnQgeyBHaXZlYXdheXN9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9UeXBlT3JtL01vZGVscy9HaXZlYXdheXNcIlxyXG5cclxuaW1wb3J0IGdpdmVhd2F5cyBmcm9tIFwiLi4vLi4vc3RydWN0dXJlcy9naXZlYXdheXMvZ2l2ZWF3YXlzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXZlYXdheUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiZ2l2ZWF3YXlcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJnaXZlYXdheVwiLCBcImdcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkFkbWluXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcInN0YXJ0cyBhIGdpdmVhd2F5XCIsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJnaXZlYXdheSBbdGltZV0gW3ByaXplXVwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImdpdmVhd2F5IDEwbSBEaXNjb3JkIG5pdHJvXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb25zOiBcIkFETUlOSVNUUkFUT1JcIixcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IChtc2c6IE1lc3NhZ2UsIHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIobXMoc3RyKSlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT4gYCR7bXNnLmF1dGhvcn0sIHlvdSBtdXN0IHByb3ZpZGUgYSB0aW1lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB5b3UgbXVzdCBwcm92aWRlIGEgdmFpbGQgdGltZWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIml0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB5b3UgbXVzdCBwcm92aWRlIGEgcHJpemVgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwge3RpbWUsIGl0ZW0gfTogeyB0aW1lOiBudW1iZXIsIGl0ZW06IHN0cmluZ30pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGdpdmVhd2F5UmVwbzogUmVwb3NpdG9yeTxHaXZlYXdheXM+ID0gdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShHaXZlYXdheXMpO1xyXG4gICAgICAgIGNvbnN0IGVuZDogbnVtYmVyID0gRGF0ZS5ub3coKSArIHRpbWVcclxuXHJcbiAgICAgICAgY29uc3QgbXNnOiBNZXNzYWdlID0gYXdhaXQgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0QXV0aG9yKGBHaXZlYXdheSB8ICR7aXRlbX1gKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAke21lc3NhZ2UuYXV0aG9yLnRhZ30gaXMgZ2l2aW5nIGF3YXkgKioke2l0ZW19KiohYClcclxuICAgICAgICAgICAgLnNldEZvb3RlcihcIkdpdmVhd2F5IGVuZHNcIilcclxuICAgICAgICAgICAgLnNldFRpbWVzdGFtcChlbmQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCBtc2cucmVhY3QoXCLwn6WzXCIpO1xyXG5cclxuICAgICAgICBhd2FpdCBnaXZlYXdheVJlcG8uaW5zZXJ0KHtcclxuICAgICAgICAgICAgY2hhbm5lbDogbXNnLmNoYW5uZWwuaWQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZy5pZCxcclxuICAgICAgICAgICAgZW5kOiBlbmRcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBnaXZlYXdheXMuZW5kKGdpdmVhd2F5UmVwbywgbXNnKTtcclxuICAgICAgICB9LCB0aW1lKVxyXG4gICAgfVxyXG59Il19