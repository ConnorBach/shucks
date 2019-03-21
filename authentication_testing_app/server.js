const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

// MongoDB
const User = require('./api/models/UserModel');
const db_name = "testdb";
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI+"/"+db_name);

// Not sure what this does
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add User API Routes
var userRoutes = require('./api/routes/UserRoutes');
userRoutes(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
