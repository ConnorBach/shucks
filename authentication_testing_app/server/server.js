const express = require('express');
const process = require('process');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
//var RedisStore = require('connect-redis')(session);
const cors = require('cors');

const app = express();

// Prevents CORS issue??
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

// Decides Port
const port = process.env.PORT || 5000;

// MongoDB
const User = require('./api/models/UserModel');
const db_name = "testdb";
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI+"/"+db_name);

// Not sure what this does
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'alskdfjlsakfj389dj288jd',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
  //store: new RedisStore()
}));
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// Add User API Routes
var userRoutes = require('./api/routes/UserRoutes');
userRoutes(app);

// Add Auth Routes
var authRoutes = require('./api/routes/AuthRoutes');
authRoutes(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
