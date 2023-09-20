const mongoose = require('mongoose');

const { Schema } = mongoose;

const DataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    calculation: {
      type: String,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  {
    collection: 'create-data'
  }
);

module.exports = mongoose.model('Data', DataSchema);
