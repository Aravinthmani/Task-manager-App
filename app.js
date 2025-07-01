const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('./public')); // to serve static files
app.use(express.json()); // to parse JSON bodies


app.use('/api/v1/tasks', tasks);


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));

    }catch(error) {
        console.error('Error starting the server:', error);
    }
}

start();



