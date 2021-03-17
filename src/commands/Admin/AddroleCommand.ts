import  { Command } from "discord-akairo";
import { Message, GuildMember, Role } from "discord.js";

export default class AddroleCommand extends  Command {
    public constructor() {
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
                        start: (msg: Message) => `${msg.author.tag}, please provide a user you want to add a role to`,
                        retry: (msg: Message) => `${msg.author.tag}, please provide a vaild user...`
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

    public async exec(message: Message, { member, role }: { member: GuildMember, role: Role }): Promise<Message> {
        member.roles.add(role.id);
        return message.channel.send(`The roles, ${role.name}, has been added to ${member.user.username}.`)
    }

}