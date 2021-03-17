"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class AddroleCommand extends discord_akairo_1.Command {
    constructor() {
        super("addrole", {
            aliases: ["addrole", "ar"],
            category: "Admin",
            description: {
                content: "Adds a role to the member",
                usage: "addrole [ username ] [ role ]",
                exampels: [
                    "addrole @Nemijah#6392 owner",
                    "addrole Toby owner"
                ]
            },
            userPermissions: ["ADMINISTRATOR"],
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg) => `${msg.author.tag}, please provide a user you want to add a role to`,
                        retry: (msg) => `${msg.author.tag}, please provide a vaild user...`
                    }
                },
                {
                    id: "role",
                    type: "role",
                    match: "rest"
                }
            ]
        });
    }
    async exec(message, { member, role }) {
        member.roles.add(role.id);
        return message.channel.send(`The roles, ${role.name}, has been added to ${member.user.username}.`);
    }
}
exports.default = AddroleCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcm9sZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvQWRtaW4vQWRkcm9sZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMEM7QUFHMUMsTUFBcUIsY0FBZSxTQUFTLHdCQUFPO0lBQ2hEO1FBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7WUFDMUIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLFFBQVEsRUFBRTtvQkFDTiw2QkFBNkI7b0JBQzdCLG9CQUFvQjtpQkFDdkI7YUFDSjtZQUNELGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxtREFBbUQ7d0JBQzdGLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsa0NBQWtDO3FCQUMvRTtpQkFDSjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsTUFBTTtpQkFDaEI7YUFDSjtTQUVKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF1QztRQUNyRixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLHVCQUF1QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7SUFDdEcsQ0FBQztDQUVKO0FBdkNELGlDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBSb2xlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJvbGVDb21tYW5kIGV4dGVuZHMgIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiYWRkcm9sZVwiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImFkZHJvbGVcIiwgXCJhclwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQWRtaW5cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQWRkcyBhIHJvbGUgdG8gdGhlIG1lbWJlclwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiYWRkcm9sZSBbIHVzZXJuYW1lIF0gWyByb2xlIF1cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyb2xlIEBOZW1pamFoIzYzOTIgb3duZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFkZHJvbGUgVG9ieSBvd25lclwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW1wiQURNSU5JU1RSQVRPUlwiXSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBhcmdzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3IudGFnfSwgcGxlYXNlIHByb3ZpZGUgYSB1c2VyIHlvdSB3YW50IHRvIGFkZCBhIHJvbGUgdG9gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT4gYCR7bXNnLmF1dGhvci50YWd9LCBwbGVhc2UgcHJvdmlkZSBhIHZhaWxkIHVzZXIuLi5gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJyb2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyb2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IFwicmVzdFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBtZW1iZXIsIHJvbGUgfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyLCByb2xlOiBSb2xlIH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBtZW1iZXIucm9sZXMuYWRkKHJvbGUuaWQpO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChgVGhlIHJvbGVzLCAke3JvbGUubmFtZX0sIGhhcyBiZWVuIGFkZGVkIHRvICR7bWVtYmVyLnVzZXIudXNlcm5hbWV9LmApXHJcbiAgICB9XHJcblxyXG59Il19