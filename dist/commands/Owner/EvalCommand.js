"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config_1 = require("../../config");
const vultrex_haste_1 = require("vultrex.haste");
const haste = new vultrex_haste_1.VultrexHaste({ url: "https://haste.bin" });
const deeptype_1 = require("@extreme_hero/deeptype");
const util_1 = require("util");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("eval", {
            aliases: ["eval"],
            category: "Owner",
            description: {
                content: "evaluates javascript",
                usage: "eval [ args ]",
            },
            ratelimit: 3,
            args: [
                {
                    id: "args",
                    type: "string",
                },
            ]
        });
    }
    async exec(message, { args }) {
        const msg = message;
        if (config_1.owners.includes("481913243493990400"))
            return;
        if (!args.length)
            return msg.reply(`Provide javascript code to evaluate...`);
        // @ts-ignore
        let code = args.join(' ');
        code = code.replace(/[""]/g, '"').replace(/[""]/g, "'");
        let evaled;
        try {
            const start = process.hrtime();
            evaled = eval(code);
            if (evaled instanceof Promise) {
                evaled = await evaled;
            }
            const stop = process.hrtime(start);
            const response = [
                `**Output:** \`\`\`js\n${this.clean(util_1.inspect(evaled, { depth: 0 }))}\n\`\`\``,
                `**Type:** \`\`\`ts\n${new deeptype_1.Type(evaled).is}\n\`\`\``,
                `**Time taken:** \`\`\`${(((stop[0]) + stop[1])) / 1e6}ms \`\`\``
            ];
            const res = response.join('\n');
            if (res.length < 2000) {
                await msg.channel.send(res);
            }
            else {
                await haste.post(res);
            }
        }
        catch (e) {
            return message.channel.send(`Error: \`\`\`x1\n${this.clean(e)}\n\`\`\``);
        }
    }
    ;
    clean(text) {
        if (typeof text === 'string') {
            text = text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`)
                .replace(new RegExp(this.client.token, 'gi'), 'No token for you bitch');
        }
        return text;
    }
}
exports.default = AvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZhbENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvT3duZXIvRXZhbENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMseUNBQXNDO0FBQ3RDLGlEQUE2QztBQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQyxDQUFBO0FBQzFELHFEQUE2QztBQUM3QywrQkFBNkI7QUFFN0IsTUFBcUIsYUFBYyxTQUFRLHdCQUFPO0lBQzlDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsS0FBSyxFQUFFLGVBQWU7YUFDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsUUFBUTtpQkFDakI7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxJQUFJLEVBQW9CO1FBQzFELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUVwQixJQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7WUFBRSxPQUFPO1FBQ2pELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBRTVFLGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxDQUFDO1FBRVgsSUFBSTtZQUNBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUcsTUFBTSxZQUFZLE9BQU8sRUFBRTtnQkFDMUIsTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDO2FBQ3pCO1lBRUQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxNQUFNLFFBQVEsR0FBRztnQkFDYix5QkFBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsVUFBVTtnQkFDMUUsdUJBQXVCLElBQUksZUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVTtnQkFDcEQseUJBQXlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxXQUFXO2FBQ3BFLENBQUE7WUFDRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUU7Z0JBQ2xCLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0gsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixLQUFLLENBQUMsSUFBSTtRQUNOLElBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJO2lCQUNOLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQy9DLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQzlDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO1NBQzlFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBaEVELGdDQWdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBvd25lcnMgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFZ1bHRyZXhIYXN0ZSB9IGZyb20gJ3Z1bHRyZXguaGFzdGUnO1xyXG5jb25zdCBoYXN0ZSA9IG5ldyBWdWx0cmV4SGFzdGUoe3VybDogXCJodHRwczovL2hhc3RlLmJpblwifSlcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BleHRyZW1lX2hlcm8vZGVlcHR5cGUnXHJcbmltcG9ydCB7aW5zcGVjdH0gZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImV2YWxcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJldmFsXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJPd25lclwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJldmFsdWF0ZXMgamF2YXNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiZXZhbCBbIGFyZ3MgXVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJhcmdzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IGFyZ3MgfTogeyBhcmdzOiBzdHJpbmcgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2U7XHJcblxyXG4gICAgICAgIGlmKG93bmVycy5pbmNsdWRlcyhcIjQ4MTkxMzI0MzQ5Mzk5MDQwMFwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmKCFhcmdzLmxlbmd0aCkgcmV0dXJuIG1zZy5yZXBseShgUHJvdmlkZSBqYXZhc2NyaXB0IGNvZGUgdG8gZXZhbHVhdGUuLi5gKTtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBjb2RlID0gYXJncy5qb2luKCcgJyk7XHJcblxyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoL1tcIlwiXS9nLCAnXCInKS5yZXBsYWNlKC9bXCJcIl0vZywgXCInXCIpO1xyXG4gICAgICAgIGxldCBldmFsZWQ7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvY2Vzcy5ocnRpbWUoKTtcclxuICAgICAgICAgICAgZXZhbGVkID0gZXZhbChjb2RlKTtcclxuICAgICAgICAgICAgaWYoZXZhbGVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgZXZhbGVkID0gYXdhaXQgZXZhbGVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG9wID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IFtcclxuICAgICAgICAgICAgICAgIGAqKk91dHB1dDoqKiBcXGBcXGBcXGBqc1xcbiR7dGhpcy5jbGVhbihpbnNwZWN0KGV2YWxlZCwge2RlcHRoOiAwfSkpfVxcblxcYFxcYFxcYGAsXHJcbiAgICAgICAgICAgICAgICBgKipUeXBlOioqIFxcYFxcYFxcYHRzXFxuJHtuZXcgVHlwZShldmFsZWQpLmlzfVxcblxcYFxcYFxcYGAsXHJcbiAgICAgICAgICAgICAgICBgKipUaW1lIHRha2VuOioqIFxcYFxcYFxcYCR7KCgoc3RvcFswXSkgKyBzdG9wWzFdKSkgLyAxZTZ9bXMgXFxgXFxgXFxgYFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlLmpvaW4oJ1xcbicpO1xyXG4gICAgICAgICAgICBpZihyZXMubGVuZ3RoIDwgMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbXNnLmNoYW5uZWwuc2VuZChyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgaGFzdGUucG9zdChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChgRXJyb3I6IFxcYFxcYFxcYHgxXFxuJHt0aGlzLmNsZWFuKGUpfVxcblxcYFxcYFxcYGApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2xlYW4odGV4dCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dFxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL2AvZywgYFxcYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg4MjAzKX1gKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL0AvZywgYEAke1N0cmluZy5mcm9tQ2hhckNvZGUoODIwMyl9YClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5jbGllbnQudG9rZW4sICdnaScpLCAnTm8gdG9rZW4gZm9yIHlvdSBiaXRjaCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG59Il19