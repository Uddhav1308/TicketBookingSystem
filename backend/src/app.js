const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

// port
const port = process.env.PORT || 3000;

// database connect
require('./db/database');

// cors 
app.use(cors());

// // important connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router 
const register = require('./routers/register');
const login = require('./routers/login');
const allTickets = require('./routers/allTickets');
const deleteTicket = require('./routers/deleteTicket');
const updateTicket = require('./routers/updateTicket');
const ticket = require('./routers/ticket');
const newTicket = require('./routers/newTicket');

app.use('/api/register',register);

app.use('/api/login', login);

app.use('/api/tickets/new', newTicket);

app.use('/api/tickets',allTickets);

app.use('/api/tickets/',ticket);

app.use('/api/tickets/delete/',deleteTicket);

app.use('/api/tickets/update/',updateTicket);


app.listen(port, () => {
    console.log(`server stared on port ${port}`)
})