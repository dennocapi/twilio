const express = require('express')
const router = express.Router()

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post('/sendMessage', (req, res) => {
    client.messages
        .create({
            body: 'This is a message that I want to send over WhatsApp with Twilio!',
            from: '+19107131896',
            // statusCallback: 'https://abc1234.free.beeceptor.com',
            to: '+254715134415'
        })
        .then(message => res.send(message));

        // res.send(message)

})

module.exports = router