import { Command } from 'discord-akairo';
import { MessageEmbed, Message, GuildMember } from "discord.js";
import { Repository } from 'typeorm';
import  { Kicks } from "../../database/Models/Kicks";

export default class KickCommand extends  Command {
    constructor(props) {
        super("kick", {
            aliases: ["boot", "kick"],
            category: "Moderation",
            description: {
                content: "Kicks a member from the guild and saves it into the database..",
                usage: "kick [ user ] [ reason ]",
                examples: [
                    "kick Nemijah#6392 disrespectful towards staff",
                    "kick Toby disrespectful towards staff"
                ]
            },
            userPermissions: ["KICK_MEMBERS"],
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, please provide a member to kick`,
                        retry: (msg: Message) => `${msg.author}, please provide a vaild member to warn...`
                    }
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    default: "disrespectful towards staff"
                }
            ]
        });
    }

    public async exec(message: Message, { member, reason }: { member: GuildMember, reason: string }): Promise<Message> {
        const kickRepo: Repository<Kicks> = this.client.db.getRepository(Kicks);

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to kick ${member.user.tag}`);


        await member.kick();

        await message.channel.send(new MessageEmbed()
            .setTitle(message.guild.name)
            .addFields(
                { name: "Member ", value: member.user.tag, inline: true},
                { name: "Reason ", value: reason, inline: true},
                { name: "Moderator ", value: message.author.tag, inline: false},
                { name: "Moderator id ", value: message.author.id, inline: false},
            )
            .setTimestamp()
            .setFooter(member.user.displayAvatarURL({ dynamic: true}) + member.user.tag + " has been kicked")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        );


        await kickRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        });
    }
}