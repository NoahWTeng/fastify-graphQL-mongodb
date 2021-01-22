const container = require('./src/Container');

const app = container.resolve('app');

app.start().catch((error) => {
  console.log('[ error.stack ] >', error.stack);
  process.exit();
});
