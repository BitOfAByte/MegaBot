import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from "discord.js";
import ms from 'ms';

import { Repository } from 'typeorm';
import { Giveaways} from "../../database/Models/Giveaways";

import giveaways from "../../structures/giveaways/giveaways";

export default class GiveawayCommand extends Command {
    constructor() {
        super("giveaway", {
            aliases: ["giveaway", "g"],
            category: "Admin",
            description: {
                content: "starts a giveaway",
                usage: "giveaway [time] [prize]",
                examples: [
                    "giveaway 10m Discord nitro"
                ]
            },
            userPermissions: "ADMINISTRATOR",
            ratelimit: 3,
            args: [
                {
                    id: "time",
                    type: (msg: Message, str: string) => {
                        return Number(ms(str))
                    },
                    prompt: {
                        start: (msg: Message) => `${msg.author}, you must provide a time`,
                        retry: (msg: Message) => `${msg.author}, you must provide a vaild time`
                    }
                },
                {
                    id: "item",
                    type: "string",
                    match: "rest",
                    prompt: {
                        start: (msg: Message) => `${msg.author}, you must provide a prize`
                    }
                }
            ]
        });
    }

    public async exec(message: Message, {time, item }: { time: number, item: string}): Promise<any> {
        const giveawayRepo: Repository<Giveaways> = this.client.db.getRepository(Giveaways);
        const end: number = Date.now() + time

        const msg: Message = await  message.channel.send(new MessageEmbed()
            .setAuthor(`Giveaway | ${item}`)
            .setColor("RANDOM")
            .setDescription(`${message.author.tag} is giving away **${item}**!`)
            .setFooter("Giveaway ends")
            .setTimestamp(end)
        );
       await msg.react("🥳");

        await giveawayRepo.insert({
            channel: msg.channel.id,
            message: msg.id,
            end: end
        });


        setTimeout(() => {
            giveaways.end(giveawayRepo, msg);
        }, time)
    }
}