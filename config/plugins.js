module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "jaredgoldmandev@gmail.com",
        defaultReplyTo: "jaredgoldmandev@gmail.com",
      },
    },
  },
});
