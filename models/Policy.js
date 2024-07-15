const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    policyNumber: String,
    premiumAmountWritten: Number,
    premiumAmount: Number,
    policyType: String,
    policyStartDate: Date,
    policyEndDate: Date,
    csr: String,
    policyMode: String,
    producer: String,
    policyCategory: mongoose.Schema.Types.ObjectId,
    company: mongoose.Schema.Types.ObjectId,
    user: mongoose.Schema.Types.ObjectId,
    agent: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Policy', policySchema);