const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const login = require('./routes/auth/login');
const registration = require('./routes/auth/registration');
const api = require('./routes/api/api');
const pizzaApi = require('./routes/api/pizza.api');
const saladApi = require('./routes/api/salad.api');
const burgerApi = require('./routes/api/burger.api');
const herbApi = require('./routes/api/aqp8/herb.api');
const rockApi = require('./routes/api/aqp8/rock.api');
const pillApi = require('./routes/api/aqp8/pill.api');
const userApi = require('./routes/api/user.api')

const app = express();

const PORT = 5000;

const mongodbUrl = 'mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars';

mongoose.connect(mongodbUrl, { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log('server.js: database connected');
})

mongoose.set('useFindAndModify', false)

app.use(express.urlencoded({ extended: false }))

// settings views folder
app.set('views', path.join(__dirname, 'views'))

// setting views engine
app.set('view engine', 'hbs')

// setting default layout of app
app.set('view options', { layout: 'layouts/main' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use('/', routes);
app.use('/', login);
app.use('/', registration);
app.use('/api', api);
app.use('/api', pizzaApi)
app.use('/api', saladApi)
app.use('/api', burgerApi)
app.use('/api', herbApi)
app.use('/api', rockApi)
app.use('/api', pillApi)
app.use('/api', userApi)

app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
})