# Task Manager App

A simple Node.js and Express-based Task Manager application that allows users to create, read, update, and delete tasks. The app uses MongoDB Atlas for database storage and is deployed on Render.

---
## Features
Perform CRUD Operations (Create, Read, Update, Delete) on tasks.
Built with a RESTful API design for easy integration.
Uses MongoDB Atlas, a cloud-based NoSQL database, for data storage.
Securely manages configuration using environment variables stored in a .env file.
The application is deployed on Render, making it accessible online.


## Technologies Used
Node.js: A JavaScript runtime environment for building server-side applications.
Express.js: A lightweight and flexible web framework for creating APIs.
MongoDB Atlas: A scalable and cloud-based NoSQL database solution.
Mongoose: An Object Data Modeling (ODM) library for MongoDB, simplifying database interactions.
dotenv: A library for managing environment variables securely.


---

## Deployment
The application is deployed on Render. You can access it {[https://task-manager-app-6k9c.onrender.com]}.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>

2. npm install for dependencies
   
4. Create a .env file in the root directory and add the following:
MONGO_URI=<your-mongodb-uri>
PORT=3000

6.  npm start
