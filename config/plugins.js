module.exports = ({ env }) => ({
  // ...

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "du9efatg4",
        api_key: "586311748251652",
        api_secret: "ModAL_s2MfyptxsGlQygZdOUxBc",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
  // "strapi-google-auth": true,
});
