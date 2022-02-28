const twilio = require('twilio')

const twilioAccountSID = process.env.TWILIO_SID 
const twilioAccountToken = process.env.TWILIO_AUTH_TOKEN 
const twilioServiceSID = process.env.TWILIO_SERVICE_SID

const client = new twilio(twilioAccountSID, twilioAccountToken)

const verifyOTPMessage = (req, res, next) => {
    const { phoneNumber, verificationCode } = req.body

    client.verify.services(twilioServiceSID)
      .verificationChecks
      .create({ to: phoneNumber, code: verificationCode })
      .then(verification_check => {
          res.status(200).json({
              verificationResponse : verification_check.status,

          })
      });
}
const sendOTPMessage = (req, res, next) => {
    const { phoneNumber } = req.body

    client.verify.services(twilioServiceSID)
        .verifications
        .create({to: phoneNumber, channel: 'sms'})
        .then(verification => {
            res.status(200).json({
                verificationResponse : verification.status
            })
        })
}

module.exports = {sendOTPMessage, verifyOTPMessage}