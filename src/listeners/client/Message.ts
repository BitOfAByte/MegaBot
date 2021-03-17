import { Listener } from "discord-akairo";
import { Message } from "discord.js";
const Levels = require('hive-xp');

export default class MessageDelete extends Listener {
    public constructor(props) {
        super("message", {
            emitter: "client",
            event: "message",
            category: "client"
        });
    }

    public async exec(message): Promise<Message> {
        if(message.author.bot) return;
        Levels.setURL("mongodb+srv://Nemijah:Azizaetl8.@megabot.gifrp.mongodb.net/MegaBot");

        const randomXp = Math.floor(Math.random() * 20);
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.author.username} leveled up to ${user.level}! Keep it going!`);
        }
    }
}