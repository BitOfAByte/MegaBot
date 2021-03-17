"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
require('../../database/Mongodb/database');
const Giveaways_1 = require("../../database/TypeOrm/Models/Giveaways");
const giveaways_1 = __importDefault(require("../../structures/giveaways/giveaways"));
const db = require('../../database/MySQL/sql');
const BanConfig = require('../../database/MySQL/Models/BanConfig');
const WarnConfig = require('../../database/MySQL/Models/WarnConfig');
class ready extends discord_akairo_1.Listener {
    constructor(props) {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`Logged in as ${this.client.user.tag}`);
        const giveawayRepo = this.client.db.getRepository(Giveaways_1.Giveaways);
        console.log(`${this.client.user.tag} is now ready!`);
        setInterval(async () => {
            const giveaways = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Date.now()).map(async (g) => {
                const msg = await this.client.channels.cache.get(g.channel).messages.fetch()
                    .catch(() => null);
                if (!msg)
                    return giveawayRepo.delete(g);
                await giveaways_1.default.end(giveawayRepo, msg);
            });
        }, 3e5);
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
exports.default = ready;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9yZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUEwQztBQUUxQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUUzQyx1RUFBb0U7QUFFcEUscUZBQThEO0FBRTlELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0FBRXJFLE1BQXFCLEtBQU0sU0FBUSx5QkFBUTtJQUN2QyxZQUFtQixLQUFLO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTSxJQUFJO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVwRCxNQUFNLFlBQVksR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsQ0FBQztRQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJELFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNuQixNQUFNLFNBQVMsR0FBZ0IsTUFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRTtnQkFDdEQsTUFBTSxHQUFHLEdBQVksTUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtxQkFDakcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV2QixJQUFHLENBQUMsR0FBRztvQkFBRSxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZDLE1BQU0sbUJBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBR1AsRUFBRSxDQUFDLFlBQVksRUFBRTthQUNaLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0NBQ0o7QUF0Q0Qsd0JBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7TWVzc2FnZSwgVGV4dENoYW5uZWx9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5yZXF1aXJlKCcuLi8uLi9kYXRhYmFzZS9Nb25nb2RiL2RhdGFiYXNlJyk7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBHaXZlYXdheXMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvVHlwZU9ybS9Nb2RlbHMvR2l2ZWF3YXlzXCI7XHJcblxyXG5pbXBvcnQgZ2l2ZWF3YXlzTSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlcy9naXZlYXdheXMvZ2l2ZWF3YXlzXCI7XHJcblxyXG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uLy4uL2RhdGFiYXNlL015U1FML3NxbCcpO1xyXG5jb25zdCBCYW5Db25maWcgPSByZXF1aXJlKCcuLi8uLi9kYXRhYmFzZS9NeVNRTC9Nb2RlbHMvQmFuQ29uZmlnJyk7XHJcbmNvbnN0IFdhcm5Db25maWcgPSByZXF1aXJlKCcuLi8uLi9kYXRhYmFzZS9NeVNRTC9Nb2RlbHMvV2FybkNvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZHkgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihcInJlYWR5XCIsIHtcclxuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgICAgICAgZXZlbnQ6IFwicmVhZHlcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGV4ZWMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYExvZ2dlZCBpbiBhcyAke3RoaXMuY2xpZW50LnVzZXIudGFnfWApO1xyXG5cclxuICAgICAgICBjb25zdCBnaXZlYXdheVJlcG86IFJlcG9zaXRvcnk8R2l2ZWF3YXlzPiA9IHRoaXMuY2xpZW50LmRiLmdldFJlcG9zaXRvcnkoR2l2ZWF3YXlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsaWVudC51c2VyLnRhZ30gaXMgbm93IHJlYWR5IWApO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdpdmVhd2F5czogR2l2ZWF3YXlzW10gPSBhd2FpdCBnaXZlYXdheVJlcG8uZmluZCgpO1xyXG4gICAgICAgICAgICBnaXZlYXdheXMuZmlsdGVyKGcgPT4gZy5lbmQgPD0gRGF0ZS5ub3coKSkubWFwKGFzeW5jICBnID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1zZzogTWVzc2FnZSA9IGF3YWl0ICh0aGlzLmNsaWVudC5jaGFubmVscy5jYWNoZS5nZXQoZy5jaGFubmVsKSBhcyBUZXh0Q2hhbm5lbCkubWVzc2FnZXMuZmV0Y2goKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighbXNnKSByZXR1cm4gZ2l2ZWF3YXlSZXBvLmRlbGV0ZShnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBnaXZlYXdheXNNLmVuZChnaXZlYXdheVJlcG8sIG1zZyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgM2U1KVxyXG5cclxuXHJcbiAgICAgICAgZGIuYXV0aGVudGljYXRlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTXlTUUwgZGF0YWJhc2UuLi5cIik7XHJcbiAgICAgICAgICAgICAgICBCYW5Db25maWcuaW5pdChkYik7XHJcbiAgICAgICAgICAgICAgICBCYW5Db25maWcuc3luYygpO1xyXG4gICAgICAgICAgICAgICAgV2FybkNvbmZpZy5pbml0KGRiKTtcclxuICAgICAgICAgICAgICAgIFdhcm5Db25maWcuc3luYygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19