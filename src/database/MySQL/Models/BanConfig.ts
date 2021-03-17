const { DataTypes, Model } = require('sequelize');

module.exports = class BanConfig extends Model {
    static init(sequelize) {
        return super.init({
            user: {
                type: DataTypes.STRING
            },
            userId: {
                type: DataTypes.STRING
            },
            reason: {
                type: DataTypes.STRING
            },
            moderator: {
                type: DataTypes.STRING
            },
            moderatorId: {
                type: DataTypes.STRING
            },
            active: {
                type: DataTypes.BOOLEAN
            },
            infractionId: {
                type: DataTypes.STRING,
                autoincrement: true
            },
        }, {
            tableName: 'Bans',
            sequelize
        })
    }
}