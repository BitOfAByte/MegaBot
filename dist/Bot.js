"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const botClient_1 = __importDefault(require("./client/botClient"));
const client = new botClient_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF5QztBQUN6QyxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQztBQUMzRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2tlbiwgb3duZXJzIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgYm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9ib3RDbGllbnRcIjtcclxuXHJcbmNvbnN0IGNsaWVudDogYm90Q2xpZW50ID0gbmV3IGJvdENsaWVudCh7IHRva2VuLCBvd25lcnMgfSk7XHJcbmNsaWVudC5zdGFydCgpOyJdfQ==