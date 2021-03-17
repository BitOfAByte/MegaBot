const mongo = require('mongoose');

const WarnConfig = new mongo.Schema({
    user: { type: String, required: true},
    userId: { type: String, required: true},
    reason: { type: String, required: true},
    moderator: { type: String, required: true},
    moderatorId: { type: String, required: true},
    active: { type: Boolean, required: true},
    infractionId: { type: Number, required: false},
});

module.exports = new mongo.model("Bans", WarnConfig);