module.exports = {
  apps: [
    {
      name: 'api-fastify-graphQL',
      script: 'index.js',
      env_production: {
        NODE_ENV: 'production',
        DB_HOST: 'localhost',
        DB_PORT: '3008',
        DB_USER: '',
        DB_PASS: '',
        DB_NAME: '',
        JWT_SECRET: '',
      },
    },
  ],
};
