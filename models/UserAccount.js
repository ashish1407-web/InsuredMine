const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
    accountName : String,
    accountType: String,
    user: mongoose.Schema.Types.ObjectId
});
module.exports = mongoose.model('UserAccount', userAccountSchema);
