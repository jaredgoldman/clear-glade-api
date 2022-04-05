const { format } = require("date-fns");

module.exports = {
  async sendBookingConfirmation(ctx) {
    try {
      const { email, thursday, end, roomName } =
        ctx.request.body.data.attributes;

      const dateRange = `${format(new Date(thursday), "PP")} - ${format(
        new Date(end),
        "PP"
      )}`;

      await strapi.plugins.email.services.email.send({
        to: email,
        from: "jaredgoldmandev@gmail.com",
        cc: "",
        bcc: "",
        replyTo: "",
        subject: "Clear Glade Farms - Booking Confirmation",
        text: `Booking Confirmation`,
        html: `
            <h3>Booking Confirmation</h3>
            <div>This email is to signify your booking confirmation of ${roomName} from ${dateRange} at Clear Glade Farms</div>
            <br/>
            <br/>
            <div>Best Regards,</div><br/>
            <div>Clear Glade Farms</div>
          `,
      });

      ctx.send("confirmation email sent");
    } catch (error) {
      console.log("email error", error);
    }
  },
};
