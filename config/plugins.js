    module.exports = ({ env }) => ({
      // ...
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name:'dbop0bxeu',
            api_key: '849411433561177',
            api_secret: 'G54gB54OK5uZQ6xG0IK9kyKogU4',
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
      // ...
    });