"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const common_tags_1 = require("common-tags");
class HelpCommand extends discord_akairo_1.Command {
    constructor() {
        super("help", {
            aliases: ["help", "commands", "cmds"],
            category: "Public",
            description: {
                content: "I don't think I need to explain the command",
                usage: "help [cmd]",
                examples: [
                    "help",
                    "help ban"
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: "command",
                    type: "commandAlias",
                    default: null
                }
            ]
        });
    }
    async exec(message, { command }) {
        if (command) {
            return message.channel.send(new discord_js_1.MessageEmbed()
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
                .setColor("RANDOM")
                .setDescription(common_tags_1.stripIndents `
                    **Description:**
                    ${command.description.content || "No content provided"} 
                   
                    **Usage:**
                    ${command.description.usage || "No usage provided"}
                    
                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(e => `\`${e}\``).join("\n") : "No examples provided"}
                `));
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor("RANDOM")
            .setFooter(`${this.client.commandHandler.prefix}help [command] for more information on a command`);
        for (const category of this.handler.categories.values()) {
            if (["default"].includes(category.id))
                continue;
            embed.addField(category.id, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `**\`${cmd}\`**`)
                .join(", ") || "No command aliases in this category.");
        }
        return message.channel.send(embed);
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljL0hlbHBDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXdDO0FBQ3hDLDJDQUFtRDtBQUNuRCw2Q0FBMkM7QUFFM0MsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsNkNBQTZDO2dCQUN0RCxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsUUFBUSxFQUFFO29CQUNOLE1BQU07b0JBQ04sVUFBVTtpQkFDYjthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2lCQUNoQjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBd0I7UUFDakUsSUFBRyxPQUFPLEVBQUU7WUFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksRUFBRTtpQkFDekMsU0FBUyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDbkUsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsY0FBYyxDQUFDLDBCQUFZLENBQUM7O3NCQUV2QixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxxQkFBcUI7OztzQkFHcEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksbUJBQW1COzs7c0JBR2hELE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7aUJBQ3pILENBQUMsQ0FDTCxDQUFDO1NBQ0w7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUNyRixRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sa0RBQWtELENBQUMsQ0FBQTtRQUN0RyxLQUFJLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3BELElBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFBRSxTQUFTO1lBRS9DLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRO2lCQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7aUJBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxzQ0FBc0MsQ0FDeEQsQ0FBQztTQUNMO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBRUo7QUEzREQsOEJBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJ1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBzdHJpcEluZGVudHMgfSBmcm9tICdjb21tb24tdGFncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJoZWxwXCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiaGVscFwiLCBcImNvbW1hbmRzXCIsIFwiY21kc1wiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkkgZG9uJ3QgdGhpbmsgSSBuZWVkIHRvIGV4cGxhaW4gdGhlIGNvbW1hbmRcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcImhlbHAgW2NtZF1cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWxwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWxwIGJhblwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbW1hbmRcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbW1hbmRBbGlhc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgY29tbWFuZCB9OiB7IGNvbW1hbmQ6IENvbW1hbmQgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGlmKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgLnNldEF1dGhvcihgSGVscCB8ICR7Y29tbWFuZH1gLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKHN0cmlwSW5kZW50cyBgXHJcbiAgICAgICAgICAgICAgICAgICAgKipEZXNjcmlwdGlvbjoqKlxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29tbWFuZC5kZXNjcmlwdGlvbi5jb250ZW50IHx8IFwiTm8gY29udGVudCBwcm92aWRlZFwifSBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICoqVXNhZ2U6KipcclxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24udXNhZ2UgfHwgXCJObyB1c2FnZSBwcm92aWRlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICoqRXhhbXBsZXM6KipcclxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMgPyBjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzLm1hcChlID0+IGBcXGAke2V9XFxgYCkuam9pbihcIlxcblwiKSA6IFwiTm8gZXhhbXBsZXMgcHJvdmlkZWRcIn1cclxuICAgICAgICAgICAgICAgIGApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0QXV0aG9yKGBIZWxwIHwgJHt0aGlzLmNsaWVudC51c2VyLnVzZXJuYW1lfWAsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAgICAgLnNldEZvb3RlcihgJHt0aGlzLmNsaWVudC5jb21tYW5kSGFuZGxlci5wcmVmaXh9aGVscCBbY29tbWFuZF0gZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gYSBjb21tYW5kYClcclxuICAgICAgICBmb3IoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5oYW5kbGVyLmNhdGVnb3JpZXMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgaWYoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoY2F0ZWdvcnkuaWQsIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNtZCA9PiBjbWQuYWxpYXNlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgLm1hcChjbWQgPT4gYCoqXFxgJHtjbWR9XFxgKipgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSB8fCBcIk5vIGNvbW1hbmQgYWxpYXNlcyBpbiB0aGlzIGNhdGVnb3J5LlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZW1iZWQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==