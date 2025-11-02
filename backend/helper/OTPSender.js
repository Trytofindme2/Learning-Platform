const transporter = require('../helper/transporter')
const OTPGenerator = require('../helper/otpGenerator')

const OTPSender = async (to) => {
    let otp = OTPGenerator(6)

    let mailOptions = {
        from : process.env.APP_EMAIL,
        to,
        subject: "Your One-Time Password (OTP)",
        html: `
      <div style="font-family:Arial,sans-serif;color:#333">
        <h2>Verify Your Email</h2>
        <p>Your One-Time Password (OTP) is:</p>
        <h1 style="color:#007bff">${otp}</h1>
        <p>This OTP is valid for <strong>5 minutes</strong>.</p>
        <p>If you did not request this, please ignore this email.</p>
      </div>
    `,
    }

    await transporter.sendMail(mailOptions);
}

module.exports = OTPSender