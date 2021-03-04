import  { Command } from "discord-akairo";
import { Giveaways } from "../../database/Models/Giveaways";
import  { Repository } from 'typeorm';
import { MessageEmbed, Message, MessageReaction, User } from "discord.js";

export default {
    async end(giveawayRepo: Repository<Giveaways>, msg: Message) {
        await msg.fetch();
        await giveawayRepo.delete({ message: msg.id });

        const reaction:  MessageReaction = await msg.reactions.cache.filter(r => r.emoji.name === "🥳").first().fetch();
        await reaction.users.fetch();
        const winner: User = reaction.users.cache.filter(w => !w.bot).random();

        const embed: MessageEmbed = msg.embeds[0];
        embed.setFooter("Giveaway has ended")
        embed.setColor("RANDOM")
        embed.addField("Winner: ", winner ? `${winner.tag}` : "No winners");
        await msg.edit(embed);
    }
}