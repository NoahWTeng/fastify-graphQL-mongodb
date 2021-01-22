const mongoose = require('mongoose');

mongoose.set('bufferCommands', false);
mongoose.Promise = global.Promise;

module.exports = function db({ config }) {
  return {
    start: async () => {
      try {
        await mongoose.connect(config.database.url, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        });

        console.log(`We connected database succesfully ==> ${config.database.url}\n`.green);
      } catch (error) {
        console.log(`We cannot connect to database: ${config.database.url}`.red);
        throw new Error('Failed to connecte database!');
      }
    },
    stop: async () => {
      mongoose.connection.close();
    },
  };
};
