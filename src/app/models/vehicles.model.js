const mongoose = require('mongoose');

const VehiclesDef = {
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  vehicle_class: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
};

const vehiclesSchema = new mongoose.Schema(VehiclesDef, {
  versionKey: false,
  minimize: false,
  strict: true,
});

vehiclesSchema.index({ name: 1 });

module.exports = mongoose.model('vehicles', vehiclesSchema);
