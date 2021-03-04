"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const config_1 = require("../config");
const database_1 = __importDefault(require("../database/database"));
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
        this.db = database_1.default.get(config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = botClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9ib3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBK0U7QUFDL0UsMkNBQStDO0FBQy9DLCtCQUE0QjtBQUM1QixzQ0FBbUQ7QUFFbkQsb0VBQTRDO0FBZTVDLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQThCL0MsWUFBbUIsTUFBa0I7UUFDakMsS0FBSyxDQUFDO1lBQ0YsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxvQkFBTyxDQUFDLEdBQUc7U0FDdkIsQ0FBQyxDQUFDO1FBL0JBLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFDSSxtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFO1lBQzdELFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDNUMsTUFBTSxFQUFFLGVBQU07WUFDZCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNkLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsMkNBQTJDO29CQUNuRyxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsMkNBQTJDO29CQUNuRyxPQUFPLEVBQUUsb0RBQW9EO29CQUM3RCxLQUFLLEVBQUUsNENBQTRDO29CQUNuRCxNQUFNLEVBQUUsa0JBQWtCO29CQUMxQixPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQjtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDNUIsQ0FBQyxDQUFDO1FBU0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUExREQsNEJBMERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgIHsgTWVzc2FnZSwgSW50ZW50cyB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBkYk5hbWUgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IGRhdGFiYXNlICBmcm9tICcuLi9kYXRhYmFzZS9kYXRhYmFzZSdcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiZGlzY29yZC1ha2Fpcm9cIiB7XHJcbiAgICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XHJcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICAgICAgZGI6IENvbm5lY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3RPcHRpb25zIHtcclxuICAgIHRva2VuPzogc3RyaW5nLFxyXG4gICAgb3duZXJzOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gICAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICAgIHB1YmxpYyBkYiE6ICBDb25uZWN0aW9uO1xyXG4gICAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgICAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIiksXHJcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICAgICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcclxuICAgICAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgICAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kYCxcclxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZGAsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBcIllvdSB0b29rIHRvIGxvbmcsIHRoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGVkLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogXCJZb3UgZXhjZWVkZWQgdGhlIG1heGltdW0gYW1vdW50IG9mIHJldHJpZXNcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbDogXCJDb21tYW5kIGNhbmNlbGVkXCIsXHJcbiAgICAgICAgICAgICAgICByZXRyaWVzOiAzLFxyXG4gICAgICAgICAgICAgICAgdGltZTogM2U0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG90aGVyd2lzZTogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVyc1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnMsXHJcbiAgICAgICAgICAgIGludGVudHM6IEludGVudHMuQUxMXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByb2Nlc3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZGIgPSBkYXRhYmFzZS5nZXQoZGJOYW1lKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmRiLmNvbm5lY3QoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmRiLnN5bmNocm9uaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5faW5pdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKTtcclxuICAgIH1cclxufSJdfQ==