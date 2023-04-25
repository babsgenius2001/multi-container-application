//express for building the API routes and back-end server
const express = require('express')

//cross-origin resource sharing package from Node.js runtime
const cors = require('cors')

const app = express()
//using the cross-origin resource package
app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Title 1"
    },
    {
      "id":"2",
      "title":"Title 2"
    },
    {
      "id":"3",
      "title":"Title 2"
    }
  ])
})

app.listen(4000, () => {
  console.log('Backend Server started on port 4000')
})