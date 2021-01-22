const mongoose = require('mongoose');

const PlanetsDef = {
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
};

const planetsSchema = new mongoose.Schema(PlanetsDef, {
  versionKey: false,
  minimize: false,
  strict: true,
});

planetsSchema.index({ name: 1 });

module.exports = mongoose.model('planets', planetsSchema);
