import { Listener } from 'discord-akairo';
import {Message, TextChannel} from 'discord.js';
require('../../database/Mongodb/database');
import { Repository } from "typeorm";
import { Giveaways } from "../../database/TypeOrm/Models/Giveaways";

import giveawaysM from "../../structures/giveaways/giveaways";
import { Manager } from 'erela.js';
const manager = require('discord.js');
const db = require('../../database/MySQL/sql');
const BanConfig = require('../../database/MySQL/Models/BanConfig');
const WarnConfig = require('../../database/MySQL/Models/WarnConfig');

export default class ready extends Listener {
    public constructor(props) {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }


    public exec(): void {
        console.log(`Logged in as ${this.client.user.tag}`);

        const giveawayRepo: Repository<Giveaways> = this.client.db.getRepository(Giveaways);
        console.log(`${this.client.user.tag} is now ready!`);

        setInterval(async () => {
            const giveaways: Giveaways[] = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Date.now()).map(async  g => {
                const msg: Message = await (this.client.channels.cache.get(g.channel) as TextChannel).messages.fetch()
                    .catch(() => null);

                if(!msg) return giveawayRepo.delete(g);

                await giveawaysM.end(giveawayRepo, msg);
            })
        }, 3e5)


        db.authenticate()
            .then(() => {
                console.log("Connected to MySQL database...");
                BanConfig.init(db);
                BanConfig.sync();
                WarnConfig.init(db);
                WarnConfig.sync();
            });


    }
}