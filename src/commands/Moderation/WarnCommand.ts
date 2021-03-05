import  { Command } from 'discord-akairo';
import  { Message, MessageEmbed, GuildMember } from "discord.js";
import { Repository} from "typeorm";
import { Warns } from '../../database/Models/Warns';

export default class WarnCommand extends Command {
    constructor() {
        super("warn", {
            aliases: ["warn", "w"],
            category: "Moderation",
            description: {
                content: "warns a member",
                usage: "warn [ member ] [ reason ]",
                examples: [
                    "warn @Nemijah#6301 swearing",
                    "warn Toby swearing"
                ]
            },
            ratelimit: 3,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, please provide a member to warn...`,
                        retry: (msg: Message) => `${msg.author}, please provide a vaild member to warn...`
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
    public async exec(message: Message, { member, reason}: { member: GuildMember, reason: string}): Promise<Message> {
        const warnRepo: Repository<Warns> = this.client.db.getRepository(Warns);

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to warn ${member.user.tag}`);

        await warnRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        });

        return message.channel.send(`${member.user.tag} has been warned by ${message.author.tag} for: *${reason}*`);
    }
}