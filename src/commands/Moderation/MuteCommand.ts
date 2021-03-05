import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember } from "discord.js";

export default class BanCommand extends Command {
    constructor() {
        super("mute", {
            aliases: ["mute"],
            category: "Moderation",
            description: {
                content: "mutes a member from the guild",
                usage: "mute [member] [reason]",
                examples: [
                    "mute @Nemijah#6391 swearing",
                    "mute Developer | Toby swearing"
                ]
            },
            ratelimit: 3,
            userPermissions: ["MANAGE_ROLES"],
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, please provide a member to mute...`,
                        retry: (msg: Message) => `${msg.author}, please provide a vaild member to mute...`
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

    public async exec(message: Message, { member, reason }: { member: GuildMember, reason: string}): Promise<Message> {
        const guild = message.guild;
        const role = guild.roles.cache.get('731884413994008676')

        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id != message.guild.ownerID)
            return message.channel.send(`${message.author.tag}. you're not allowed to mute ${member.user.tag}`);

        if(role) {
            member.roles.add(role);
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
        } else {
            await message.channel.send(new MessageEmbed()
                .setAuthor("**ERROR 404 **" + this.client.user.displayAvatarURL())
                .setDescription("Could not find the role name " + `${role.name}`)
                .setColor("DARK_RED")
            );
        }
    }
}