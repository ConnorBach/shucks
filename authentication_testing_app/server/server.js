const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const session = require('express-session');
//const passport = require('passport');
//require('./config/passport');
var cors = require('cors')

const app = express();
// Not sure what last 2 params do (Code for express-session / passport)
/*app.use(session({
  secret: 'alskdfjlsakfjl9283479283djj2389dj288jd',
  resave: false,
  saveUninitialized: true,
  //cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session());*/

// Prevents CORS issue
app.use(cors())

// Decideds Port
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
