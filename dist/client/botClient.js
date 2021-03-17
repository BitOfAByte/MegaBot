"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const config_1 = require("../config");
const typeorm_1 = __importDefault(require("../database/TypeOrm/typeorm"));
class botClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners,
            intents: discord_js_1.Intents.ALL
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    timeout: "You took to long, the command has been canceled...",
                    ended: "You exceeded the maximum amount of retries",
                    cancel: "Command canceled",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = typeorm_1.default.get(config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = botClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9ib3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBK0U7QUFDL0UsMkNBQStDO0FBQy9DLCtCQUE0QjtBQUM1QixzQ0FBbUQ7QUFDbkQsMEVBQW1EO0FBZ0JuRCxNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUE4Qi9DLFlBQW1CLE1BQWtCO1FBQ2pDLEtBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxHQUFHO1NBQ3ZCLENBQUMsQ0FBQztRQS9CQSxvQkFBZSxHQUFvQixJQUFJLGdDQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2hFLFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7U0FDaEQsQ0FBQyxDQUFDO1FBQ0ksbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRTtZQUM3RCxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxlQUFNO1lBQ2QsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLElBQUk7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixlQUFlLEVBQUUsR0FBRztZQUNwQixnQkFBZ0IsRUFBRTtnQkFDZCxNQUFNLEVBQUU7b0JBQ0osV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLDJDQUEyQztvQkFDbkcsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLDJDQUEyQztvQkFDbkcsT0FBTyxFQUFFLG9EQUFvRDtvQkFDN0QsS0FBSyxFQUFFLDRDQUE0QztvQkFDbkQsTUFBTSxFQUFFLGtCQUFrQjtvQkFDMUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDaEI7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzVCLENBQUMsQ0FBQztRQVNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNWLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLGlCQUFRLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2QsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBMURELDRCQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0ICB7IE1lc3NhZ2UsIEludGVudHMgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycywgZGJOYW1lIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IGRhdGFiYXNlIGZyb20gJy4uL2RhdGFiYXNlL1R5cGVPcm0vdHlwZW9ybSc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcclxuICAgIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcclxuICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlcjtcclxuICAgICAgICBkYjogQ29ubmVjdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xyXG4gICAgdG9rZW4/OiBzdHJpbmcsXHJcbiAgICBvd25lcnM6IHN0cmluZyB8IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudCB7XHJcbiAgICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zO1xyXG4gICAgcHVibGljIGRiITogIENvbm5lY3Rpb247XHJcbiAgICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcclxuICAgICAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcclxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgICAgICBhbGxvd01lbnRpb246IHRydWUsXHJcbiAgICAgICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWw6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxyXG4gICAgICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmRgLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kYCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IFwiWW91IHRvb2sgdG8gbG9uZywgdGhlIGNvbW1hbmQgaGFzIGJlZW4gY2FuY2VsZWQuLi5cIixcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgcmV0cmllc1wiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBcIkNvbW1hbmQgY2FuY2VsZWRcIixcclxuICAgICAgICAgICAgICAgIHJldHJpZXM6IDMsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAzZTRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3RoZXJ3aXNlOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgb3duZXJJRDogY29uZmlnLm93bmVycyxcclxuICAgICAgICAgICAgaW50ZW50czogSW50ZW50cy5BTExcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICAgICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgICAgICAgcHJvY2Vzc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLmxvYWRBbGwoKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICAgICAgdGhpcy5kYiA9IGRhdGFiYXNlLmdldChkYk5hbWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZGIuY29ubmVjdCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZGIuc3luY2hyb25pemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gICAgfVxyXG59Il19