import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default  class PingCommand extends  Command {
    public constructor() {
        super("ping", {
            aliases: ["ping", "p"],
            category: "Public",
            description: {
                content: "Check the latency of the ping to the discord api",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }

    public exec(message: Message): Promise<Message> {
        return message.util.send(`pong ${this.client.ws.ping}ms`);
    }

}
