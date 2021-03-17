import  { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember } from "discord.js";
import ms from 'ms';

export default class TempbanCommand extends Command {
    public constructor() {
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
                    type: (msg: Message, str: string) => {
                        return Number(ms(str))
                    },
                    prompt: {
                        start: (msg: Message) => `${msg.author}, you must provide a time`,
                        retry: (msg: Message) => `${msg.author}, you must provide a vaild time`
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

    public async exec(message: Message, { member, time, reason }: { member: GuildMember, time: number, reason: string}): Promise<any> {
        if(member.roles.highest.position >= message.member.roles.highest.position && message.member.id != message.guild.ownerID) {
            return message.channel.send(`${message.author.tag}, you cannot tempban ${member.user.username}`)
        }
        await message.channel.send("this command is under development...");
    }
}