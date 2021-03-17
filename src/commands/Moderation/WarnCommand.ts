import  { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed} from "discord.js";
const warnConfig = require('../../database/MySQL/Models/WarnConfig');

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
       if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to warn ${member.user.tag}`);

       const CaseId = await warnConfig.findOne({ where: { id: this.id }});

       const embed = new MessageEmbed()
           .setTitle(`Moderation: Warn [CaseID: ${CaseId}]**`)
           .addField("Member ", member.user.tag, true)
           .addField("Reason ", reason, true)
           .addField("Moderator ", message.author.tag,  false)
           .addField( "Moderator id ", message.author.id, false)
           .setTimestamp()
           .setFooter(`©️by ${message.guild.iconURL()}`)
           .setColor("#ff0000")
           .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png' }));

       await message.channel.send(embed);

        await warnConfig.create({
            user: member.user.tag,
            userId: member.id,
            reason: reason,
            moderator: message.author.tag,
            moderatorId: message.author.id,
            active: true,
        });
    }
}