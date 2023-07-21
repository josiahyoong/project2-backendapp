const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntrySchema = new Schema(
    {
        currentDate: {
            type: Date,
            required: true
        },

        meal: {
            type: String,
            required: true
        },

        food: {
            type: String,
            required: false
        },

        time_24H: {
            type: String,
            required: false
        }

    }
);

/*
    When you name the Mongoose model as "Entry", it will automatically infer the corresponding MongoDB collection name to be "entries". 
    Mongoose follows a naming convention where it converts the model name to lowercase and pluralizes it to determine the collection name. 
*/
module.exports = mongoose.model("Entry", EntrySchema);