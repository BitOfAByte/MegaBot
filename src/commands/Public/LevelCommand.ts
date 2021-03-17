import { Command } from "discord-akairo";
import { Message } from "discord.js";
const { MessageAttachment } = require('discord.js');
const canvacord = require('canvacord');
const Levels = require('hive-xp');

export default class LevelCommand extends Command {
    public constructor() {
        super("level", {
            aliases: ["rank", "level"],
            category: "Public",
            description: {
                content: "Displays the level you're in",
                usage: "level"
            },
        });
    }

    public async exec(message: Message): Promise<Message> {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const neededXp = Levels.xpFor(parseInt(user.level) + 1);


        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(message.author.presence.status)
            .setLevel(user.level)
            .setProgressBar("#FFA500", "COLOR")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator);

        return rank.build()
            .then(data => {
                const attachment = new MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
    }
}