const express = require('express')
const router = express.Router()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const twilioController = require('../controllers/twilioController')

// Twilio
router.post('/verifyOTPMessage', twilioController.verifyOTPMessage)
router.post('/sendOTPMessage', twilioController.sendOTPMessage)

router.post('/sendMessage', (req, res) => {
    client.messages
        .create({
            body: 'This is a message that I want to send over WhatsApp with Twilio!',
            from: '+19107131896',
            // statusCallback: 'https://twilio-dev-app.herokuapp.com/routes/twilioCallBack',
            to: '+254715134415'
        })
        .then((message)=> {res.send(message)})

})

router.get('/verify', (req,res) => {
    let Sid = 'SM0c6f895512784f278edf05494975762c'
    client.messages(Sid)
      .fetch()
      .then(message => console.log(message));
})
router.post('/twilioCallBack', (req, res) => {
    console.log('Twilio callback')

})

module.exports = router