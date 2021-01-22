require('colors');
const { films, planets, vehicles, people } = require('./data');

const mongoose = require('mongoose');
const { database } = require('../config');
const { FilmsModel, PeopleModel, PlanetsModel, VehiclesModel } = require('../src/app/models');

mongoose.set('bufferCommands', false);
mongoose.Promise = global.Promise;

(async function Seed() {
  try {
    await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`We connected database succesfully ==> ${database.url}\n`);

    try {
      // await FilmsModel.create(films);
      // console.log(`Succesfully Films created :)`.green);
      // await PlanetsModel.create(planets);
      // console.log(`Succesfully Planets created :)`.green);
      // await VehiclesModel.create(vehicles);
      // console.log(`Succesfully Vehicles created :)`.green);
      await PeopleModel.create(people);
      console.log(`Succesfully People created :)`.green);
    } catch (err) {
      console.error('Something went bad in the process to create the database!'.red, err);
    }
    mongoose.disconnect();
  } catch (error) {
    console.error(`We cannot connect to database ==> ${database.url}\n`.red, error);
  }
})();
