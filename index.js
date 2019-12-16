const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require('./config/environment')
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const path = require('path')
const dist = path.join(__dirname, 'dist');
// Need to connect to mongo with mongoose, to start interacting with our DB in javascript
mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))
// Create our express server
const app = express()
// Set up our middleware
app.use(bodyParser.json())
app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})
app.use('/api', router)
app.use(errorHandler)
app.use('/', express.static(dist));
app.get('*', function (req, res) {
  res.sendFile(path.join(dist, 'index.html'));
});
// Listen on our port!
app.listen(port, () => console.log(`We are good to go on port ${port}`))
module.exports = app