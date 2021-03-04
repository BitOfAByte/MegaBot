import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember } from "discord.js";
import { Bans } from "../../database/Models/Bans";
import { Repository } from 'typeorm';

export default class BanCommand extends Command {
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
                        start: (msg: Message) => `${msg.author}, please provide a member to ban...`,
                        retry: (msg: Message) => `${msg.author}, please provide a vaild member to ban...`
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
        const banRepo: Repository<Bans> = this.client.db.getRepository(Bans);

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
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