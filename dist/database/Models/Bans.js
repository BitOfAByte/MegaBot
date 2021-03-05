"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bans = void 0;
const typeorm_1 = require("typeorm");
let Bans = class Bans {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Bans.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Bans.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Bans.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Bans.prototype, "moderator", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Bans.prototype, "reason", void 0);
Bans = __decorate([
    typeorm_1.Entity("bans")
], Bans);
exports.Bans = Bans;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9Nb2RlbHMvQmFucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0U7QUFJbEUsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQWtCaEIsQ0FBQTtBQWZHO0lBREMsZ0NBQXNCLEVBQUU7O2dDQUNiO0FBR1o7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUM7O21DQUN4QjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOztrQ0FDMUI7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7dUNBQ3JCO0FBSW5CO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOztvQ0FDeEI7QUFoQlAsSUFBSTtJQUZoQixnQkFBTSxDQUFDLE1BQU0sQ0FBQztHQUVGLElBQUksQ0FrQmhCO0FBbEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbkBFbnRpdHkoXCJiYW5zXCIpXHJcblxyXG5leHBvcnQgY2xhc3MgQmFucyB7XHJcblxyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQhOiBudW1iZXI7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyfSlcclxuICAgIGd1aWxkITogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMiB9KVxyXG4gICAgdXNlciE6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjIgfSlcclxuICAgIG1vZGVyYXRvciE6IHN0cmluZztcclxuXHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyIH0pXHJcbiAgICByZWFzb24hOiBzdHJpbmc7XHJcblxyXG59Il19