

module.exports = ({ env }) => ({
  

   connections : {
    client : 'postgres',
   
   
    connection: {
      
      host: 'dpg-cjdp4g0q339s73e5nk80-a.singapore-postgres.render.com',
      port: 5432,
      database: 'ecpmmerceadmin',
      user: 'ecpmmerceadmin_user',
      password: 'nnQ4t6za8NirVPQXgYk78NNbZ6Eh0Tqa',
      ssl: env.bool('DATABASE_SSL', true) 
    },
  
  }

 
});
