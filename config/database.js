const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
   
    postgres: {
      connection: {
       // connectionString:'postgres://ecpmmerceadmin_user:nnQ4t6za8NirVPQXgYk78NNbZ6Eh0Tqa@dpg-cjdp4g0q339s73e5nk80-a.singapore-postgres.render.com/ecpmmerceadmin',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL') 

      },
      
    },
  }
   

  return {
    connection: {
      client,
      ...connections[client],
      //acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
