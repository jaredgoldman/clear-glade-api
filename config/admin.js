module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae0c385dc4f7b308ac1f6282ee8e1861'),
  },
});
