"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Bans_1 = require("../../database/Models/Bans");
class BanCommand extends discord_akairo_1.Command {
    constructor() {
        super("ban", {
            aliases: ["ban"],
            category: "Moderation",
            description: {
                content: "bans a member from the guild",
                usage: "ban [member] [reason]",
                examples: [
                    "ban @Nemijah#6391 posing nsfw images",
                    "ban Developer | Toby posting nsfw images"
                ]
            },
            ratelimit: 3,
            userPermissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg) => `${msg.author}, please provide a member to ban...`,
                        retry: (msg) => `${msg.author}, please provide a vaild member to ban...`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    default: "swearing"
                }
            ]
        });
    }
    async exec(message, { member, reason }) {
        const banRepo = this.client.db.getRepository(Bans_1.Bans);
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to ban someone who has a higher rank than you!s`);
        // @ts-ignores
        member.ban(member.id);
        await banRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason,
            duration: "Perm"
        });
    }
}
exports.default = BanCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9Nb2RlcmF0aW9uL0JhbkNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMscURBQWtEO0FBR2xELE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUMzQztRQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLFFBQVEsRUFBRTtvQkFDTixzQ0FBc0M7b0JBQ3RDLDBDQUEwQztpQkFDN0M7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osZUFBZSxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQztZQUNqRCxJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxxQ0FBcUM7d0JBQzNFLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSwyQ0FBMkM7cUJBQ3BGO2lCQUNKO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxVQUFVO2lCQUN0QjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXlDO1FBQ3pGLE1BQU0sT0FBTyxHQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7UUFFckUsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDbkgsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxzRUFBc0UsQ0FBQyxDQUFDO1FBRTdILGNBQWM7UUFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QixNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDakIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDZixTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbkRELDZCQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkLCBHdWlsZE1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IEJhbnMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvTW9kZWxzL0JhbnNcIjtcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFuQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJiYW5cIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJiYW5cIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1vZGVyYXRpb25cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiYmFucyBhIG1lbWJlciBmcm9tIHRoZSBndWlsZFwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiYmFuIFttZW1iZXJdIFtyZWFzb25dXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFuIEBOZW1pamFoIzYzOTEgcG9zaW5nIG5zZncgaW1hZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYW4gRGV2ZWxvcGVyIHwgVG9ieSBwb3N0aW5nIG5zZncgaW1hZ2VzXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbnM6IFtcIkFETUlOSVNUUkFUT1JcIiwgXCJCQU5fTUVNQkVSU1wiXSxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgcGxlYXNlIHByb3ZpZGUgYSBtZW1iZXIgdG8gYmFuLi4uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBwbGVhc2UgcHJvdmlkZSBhIHZhaWxkIG1lbWJlciB0byBiYW4uLi5gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJyZWFzb25cIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcInN3ZWFyaW5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgbWVtYmVyLCByZWFzb259OiB7IG1lbWJlcjogR3VpbGRNZW1iZXIsIHJlYXNvbjogc3RyaW5nfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IGJhblJlcG86IFJlcG9zaXRvcnk8QmFucz4gPSB0aGlzLmNsaWVudC5kYi5nZXRSZXBvc2l0b3J5KEJhbnMpO1xyXG5cclxuICAgICAgICBpZihtZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiA+PSBtZXNzYWdlLm1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uICYmIG1lc3NhZ2UuYXV0aG9yLmlkICE9IG1lc3NhZ2UuZ3VpbGQub3duZXJJRClcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGAke21lc3NhZ2UuYXV0aG9yLnRhZ30uIHlvdSdyZSBub3QgYWxsb3dlZCB0byBiYW4gc29tZW9uZSB3aG8gaGFzIGEgaGlnaGVyIHJhbmsgdGhhbiB5b3Uhc2ApO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3Jlc1xyXG4gICAgICAgIG1lbWJlci5iYW4obWVtYmVyLmlkKTtcclxuXHJcbiAgICAgICAgYXdhaXQgYmFuUmVwby5pbnNlcnQoe1xyXG4gICAgICAgICAgICBndWlsZDogbWVzc2FnZS5ndWlsZC5pZCxcclxuICAgICAgICAgICAgdXNlcjogbWVtYmVyLmlkLFxyXG4gICAgICAgICAgICBtb2RlcmF0b3I6IG1lc3NhZ2UuYXV0aG9yLmlkLFxyXG4gICAgICAgICAgICByZWFzb246IHJlYXNvbixcclxuICAgICAgICAgICAgZHVyYXRpb246IFwiUGVybVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=