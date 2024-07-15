const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: String,
    createdAt: Date,
});
module.exports = mongoose.model('Message', messageSchema);