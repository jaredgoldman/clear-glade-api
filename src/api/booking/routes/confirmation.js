module.exports = {
  routes: [
    {
      method: "POST",
      path: "/confirm",
      handler: "confirmation.sendBookingConfirmation",
    },
  ],
};
