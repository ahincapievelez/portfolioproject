require('dotenv').config()

// Load express
const express = require('express')

const cors = require('cors')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const contactRoutes = require('./routes/contactRoutes')

app.use(express.json())
app.use(cors())

app.use('/contact', contactRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})