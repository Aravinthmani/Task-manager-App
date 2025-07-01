const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();


//middleware
app.use(express.static('./public')); // to serve static files
app.use(express.json()); // to parse JSON bodies


app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on http://localhost:${port}`));

    }catch(error) {
        console.error('Error starting the server:', error);
    }
}

start();



