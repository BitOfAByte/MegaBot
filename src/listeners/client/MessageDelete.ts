import { Listener } from 'discord-akairo';
import {TextChannel, Message, MessageEmbed} from "discord.js";

export default class MessageDelete extends Listener {
    public constructor(props) {
        super("messageDelete", {
            emitter: "client",
            event: "messageDelete",
            category: "client"
        });
    }

    public async exec(message: Message): Promise<Message> {
        if (message.partial || message.author.bot) return;
        const channel = this.client.channels.cache.get('731868386543403040') as TextChannel;

        return channel.send(new MessageEmbed()
            .setAuthor(`Message deleted | ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(message.content)
            .addFields(
                { name: "Author: ", value: `${message.author.tag} (\`${message.author.id}\`)`, inline: true},
                { name: "Channel ", value: `${message.channel} (\`${message.channel.id}\`)` , inline: true}
            )
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        );
    }
}