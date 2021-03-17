"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Levels = require('hive-xp');
class MessageDelete extends discord_akairo_1.Listener {
    constructor(props) {
        super("message", {
            emitter: "client",
            event: "message",
            category: "client"
        });
    }
    async exec(message) {
        if (message.author.bot)
            return;
        Levels.setURL("mongodb+srv://Nemijah:Azizaetl8.@megabot.gifrp.mongodb.net/MegaBot");
        const randomXp = Math.floor(Math.random() * 20);
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.author.username} leveled up to ${user.level}! Keep it going!`);
        }
    }
}
exports.default = MessageDelete;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L01lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMEM7QUFFMUMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQXFCLGFBQWMsU0FBUSx5QkFBUTtJQUMvQyxZQUFtQixLQUFLO1FBQ3BCLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDYixPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQ3JCLElBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFFcEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFGLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsa0JBQWtCLElBQUksQ0FBQyxLQUFLLGtCQUFrQixDQUFDLENBQUM7U0FDbEc7SUFDTCxDQUFDO0NBQ0o7QUFwQkQsZ0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmNvbnN0IExldmVscyA9IHJlcXVpcmUoJ2hpdmUteHAnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VEZWxldGUgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihcIm1lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICBlbWl0dGVyOiBcImNsaWVudFwiLFxyXG4gICAgICAgICAgICBldmVudDogXCJtZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImNsaWVudFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGlmKG1lc3NhZ2UuYXV0aG9yLmJvdCkgcmV0dXJuO1xyXG4gICAgICAgIExldmVscy5zZXRVUkwoXCJtb25nb2RiK3NydjovL05lbWlqYWg6QXppemFldGw4LkBtZWdhYm90LmdpZnJwLm1vbmdvZGIubmV0L01lZ2FCb3RcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVhwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApO1xyXG4gICAgICAgIGNvbnN0IGhhc0xldmVsZWRVcCA9IGF3YWl0IExldmVscy5hcHBlbmRYcChtZXNzYWdlLmF1dGhvci5pZCwgbWVzc2FnZS5ndWlsZC5pZCwgcmFuZG9tWHApO1xyXG4gICAgICAgIGlmIChoYXNMZXZlbGVkVXApIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IExldmVscy5mZXRjaChtZXNzYWdlLmF1dGhvci5pZCwgbWVzc2FnZS5ndWlsZC5pZCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGAke21lc3NhZ2UuYXV0aG9yLnVzZXJuYW1lfSBsZXZlbGVkIHVwIHRvICR7dXNlci5sZXZlbH0hIEtlZXAgaXQgZ29pbmchYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19