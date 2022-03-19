const { Schema, model } = require("mongoose");

const coffeeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ratio: String,
    cup: String,
    description: String,
});

module.exports = model("Coffee", coffeeSchema);
