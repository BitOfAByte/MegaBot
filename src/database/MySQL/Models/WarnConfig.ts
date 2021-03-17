const x = require('sequelize');

module.exports = class WarnConfig extends x.Model {
    static init(sequelize) {
        return super.init({
            user: {
                type: x.DataTypes.STRING
            },
            userId: {
                type: x.DataTypes.STRING
            },
            reason: {
                type: x.DataTypes.STRING
            },
            moderator: {
                type: x.DataTypes.STRING
            },
            moderatorId: {
                type: x.DataTypes.STRING
            },
            active: {
                type: x.DataTypes.BOOLEAN
            },
        }, {
            tableName: 'Warns',
            sequelize
        })
    }
}