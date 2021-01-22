const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const PeopleDef = {
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  planet_id: ObjectId,
  films: [ObjectId],
  vehicles: [ObjectId],
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
};

const peopleSchema = new mongoose.Schema(PeopleDef, {
  versionKey: false,
  minimize: false,
  strict: true,
});

peopleSchema.index({ name: 1 });

module.exports = mongoose.model('people', peopleSchema);
