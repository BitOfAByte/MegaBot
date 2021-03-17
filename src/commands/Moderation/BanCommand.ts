import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember } from "discord.js";
import {where} from "sequelize";
const banConfig = require('../../database/MySQL/Models/BanConfig');

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
            userPermissions: ["BAN_MEMBERS"],
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
        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to ban ${member.user.tag}`);


        member.ban();

        await message.channel.send(new MessageEmbed()
            .setTitle(message.guild.name)
            .addFields(
                { name: "Member ", value: member.user.tag, inline: true},
                { name: "Reason ", value: reason, inline: true},
                { name: "Moderator ", value: message.author.tag, inline: false},
                { name: "Moderator id ", value: message.author.id, inline: false},
            )
            .setTimestamp()
            .setFooter(member.user.displayAvatarURL({ dynamic: true}) + member.user.tag + " has been banned")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        );

        await banConfig.create({
            user: member.user.tag,
            userId: member.id,
            reason: reason,
            moderator: message.author.tag,
            moderatorId: message.author.id,
            active: true,
        });
    }
}
