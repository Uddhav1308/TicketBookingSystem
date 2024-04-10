# TicketBookingSystem
This is a ticket booking system.

## Backend

API Documentation
Register
Endpoint: POST /api/register

Description:
Registers a new user.

Request Body:

{
    "name":"Uddhav Maske",
    "email":"uddhav@gmail.com",
    "password":"Pass@1234"
}

Login
Endpoint: POST /api/login

Description:
Logs a user in.

Request Body:

{
    "email":"uddhav@gmail.com",
    "password":"Pass@1234"
}

Create New Ticket
Endpoint: POST /api/tickets/new

Description:
Creates a new ticket.

Request Body:

{
    "title":"kSRTC",
    "to":"mumbai",
    "from":"Nagpur",
    "description":"travel",
    "price":"1700"
}

Get All Tickets
Endpoint: GET /api/tickets/all

Description:
Retrieves all tickets.

Success Response:

[
  {
    "_id": "66168bdda309b5c5ca7f22aa",
    "title": "MSRTC",
    "to": "Pune",
    "from": "Nagpur",
    "description": "travel",
    "price": 1700,
    "booked": false,
    "__v": 0
}
]

Get Specific Ticket
Endpoint: GET /api/tickets/:ticketId

Description:
Retrieves a specific ticket by ID.

URL Parameters:

ticketId: ID of the ticket to retrieve
Success Response:

{
    "_id": "66168bdda309b5c5ca7f22aa",
    "title": "MSRTC",
    "to": "Pune",
    "from": "Nagpur",
    "description": "travel",
    "price": 1700,
    "booked": false,
    "__v": 0
}

Delete Ticket
Endpoint: DELETE /api/tickets/delete/:ticketId

Description:
Deletes a specific ticket by ID.

URL Parameters:

ticketId: ID of the ticket to delete
Success Response:

{
    "message": "Ticket deleted"
}

Update Ticket
Endpoint: PUT /api/tickets/update/:ticketId

Description:
Updates a specific ticket by ID.

URL Parameters:

ticketId: ID of the ticket to update
Request Body:

{
    "userId":"66168bdda309b5c5ca7f22aa"
}

Success Response:

{
    "_id": "661691afba57521dccf2a520",
    "title": "kSRTC",
    "to": "mumbai",
    "from": "Nagpur",
    "description": "travel",
    "price": 1700,
    "userId": "66168bdda309b5c5ca7f22aa",
    "booked": true,
    "__v": 0
}

## Frontend
