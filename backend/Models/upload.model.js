const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  book_name: { type: String, required: true },
  author: { type: String, required: true },
  number_of_pages: { type: String, required: true },
  date_of_release: { type: String, required: true }
}, {
  timestamps: true,
});

const Upload = mongoose.model('uploads', uploadSchema);

module.exports = Upload;