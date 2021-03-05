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
exports.Kicks = void 0;
const typeorm_1 = require("typeorm");
let Kicks = class Kicks {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Kicks.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Kicks.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Kicks.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Kicks.prototype, "moderator", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Kicks.prototype, "reason", void 0);
Kicks = __decorate([
    typeorm_1.Entity("kicks")
], Kicks);
exports.Kicks = Kicks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2lja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvTW9kZWxzL0tpY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFrRTtBQUlsRSxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFLO0NBaUJqQixDQUFBO0FBZEc7SUFEQyxnQ0FBc0IsRUFBRTs7aUNBQ2I7QUFHWjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7b0NBQ3hCO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O21DQUMxQjtBQUdkO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzt3Q0FDckI7QUFJbkI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O3FDQUN4QjtBQWhCUCxLQUFLO0lBRmpCLGdCQUFNLENBQUMsT0FBTyxDQUFDO0dBRUgsS0FBSyxDQWlCakI7QUFqQlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuQEVudGl0eShcImtpY2tzXCIpXHJcblxyXG5leHBvcnQgY2xhc3MgS2lja3Mge1xyXG5cclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIGlkITogbnVtYmVyO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMn0pXHJcbiAgICBndWlsZCE6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjIgfSlcclxuICAgIHVzZXIhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyIH0pXHJcbiAgICBtb2RlcmF0b3IhOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMiB9KVxyXG4gICAgcmVhc29uITogc3RyaW5nO1xyXG59Il19