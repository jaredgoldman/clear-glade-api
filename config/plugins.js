module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "andrew@cleargladefarm.com",
        defaultReplyTo: "andrew@cleargladefarm.com",
      },
    },
  },
});
