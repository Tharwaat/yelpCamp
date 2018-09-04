const mongoose = require("mongoose");

var campSchema = new mongoose.Schema({
    name: String,
    img : String,
    desc: String
});

module.exports = mongoose.model("Camp", campSchema);