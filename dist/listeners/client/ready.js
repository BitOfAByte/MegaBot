"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Giveaways_1 = require("../../database/Models/Giveaways");
const giveaways_1 = __importDefault(require("../../structures/giveaways/giveaways"));
class ready extends discord_akairo_1.Listener {
    constructor(props) {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
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
    }
}
exports.default = ready;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9yZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUEwQztBQUcxQywrREFBNEQ7QUFFNUQscUZBQThEO0FBRTlELE1BQXFCLEtBQU0sU0FBUSx5QkFBUTtJQUN2QyxZQUFtQixLQUFLO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTSxJQUFJO1FBQ1AsTUFBTSxZQUFZLEdBQTBCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRCxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbkIsTUFBTSxTQUFTLEdBQWdCLE1BQU0sWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUU7Z0JBQ3RELE1BQU0sR0FBRyxHQUFZLE1BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7cUJBQ2pHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkIsSUFBRyxDQUFDLEdBQUc7b0JBQUUsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QyxNQUFNLG1CQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7Q0FDSjtBQTFCRCx3QkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgVGV4dENoYW5uZWwsIE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgR2l2ZWF3YXlzIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL01vZGVscy9HaXZlYXdheXNcIjtcclxuXHJcbmltcG9ydCBnaXZlYXdheXNNIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVzL2dpdmVhd2F5cy9naXZlYXdheXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlYWR5IGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyZWFkeVwiLCB7XHJcbiAgICAgICAgICAgIGVtaXR0ZXI6IFwiY2xpZW50XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiBcInJlYWR5XCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImNsaWVudFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdpdmVhd2F5UmVwbzogUmVwb3NpdG9yeTxHaXZlYXdheXM+ID0gdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShHaXZlYXdheXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBpcyBub3cgcmVhZHkhYCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2l2ZWF3YXlzOiBHaXZlYXdheXNbXSA9IGF3YWl0IGdpdmVhd2F5UmVwby5maW5kKCk7XHJcbiAgICAgICAgICAgIGdpdmVhd2F5cy5maWx0ZXIoZyA9PiBnLmVuZCA8PSBEYXRlLm5vdygpKS5tYXAoYXN5bmMgIGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnOiBNZXNzYWdlID0gYXdhaXQgKHRoaXMuY2xpZW50LmNoYW5uZWxzLmNhY2hlLmdldChnLmNoYW5uZWwpIGFzIFRleHRDaGFubmVsKS5tZXNzYWdlcy5mZXRjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFtc2cpIHJldHVybiBnaXZlYXdheVJlcG8uZGVsZXRlKGcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IGdpdmVhd2F5c00uZW5kKGdpdmVhd2F5UmVwbywgbXNnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAzZTUpXHJcbiAgICB9XHJcbn0iXX0=