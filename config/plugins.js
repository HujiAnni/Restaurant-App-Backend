module.exports = ({ env }) => ({
  // ...

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "hagm0fwva",
        api_key: "681641872956482",
        api_secret: "ULRXC6XiCflwMOQWefGiKmoO94k",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'defaultSecretValue'),}
  // ...
  // "strapi-google-auth": true,
});
