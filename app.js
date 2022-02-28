const express = require('express')
require('dotenv/config')
 const routes = require('./routes/routes')

const app = express()

app.use(express.json())
app.use('/routes',routes)

app.get('/',(req, res)=>{
    res.send('Welcome to twilio')
})
const port = process.env.PORT || 10000 

app.listen(port, () => {
    console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${port}`)
});

