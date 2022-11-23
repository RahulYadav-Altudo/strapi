module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "E0oarbNYZi9wm9z96RYRZDFTARJXHj5dNAsW1rh7qVI",
      sites: [
        {
          name: 'headless-strapi',
          id: "37a70b75-992b-4ed8-ae36-01938b12ae7c",
          buildHook: "https://api.netlify.com/build_hooks/637e3e69acf33a0366a9c6b3",
          branch: 'dev' // optional
        }
      ]
    },
  },
  "import-export-entries": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM'),
        defaultReplyTo: env('EMAIL_REPLY_TO'), 
        testAddress: env('EMAIL_TEST_ADDRESS'),
      },
    },
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
});
