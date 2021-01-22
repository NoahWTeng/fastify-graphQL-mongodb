const mongoose = require('mongoose');

const FilmsDef = {
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
};

const filmsSchema = new mongoose.Schema(FilmsDef, {
  versionKey: false,
  minimize: false,
  strict: true,
});

filmsSchema.index({ title: 1 });

module.exports = mongoose.model('films', filmsSchema);
