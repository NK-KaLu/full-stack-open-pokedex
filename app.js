const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



app.get('/version', (req, res) => {
  res.send('asdadas no skipping this commit') // change this string to ensure a new version deployed
})


app.get('/health', (req, res) => {
  //throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})


