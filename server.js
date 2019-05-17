// require the Express module
const express = require("express");

const cartItems = require("./cartItems");


// creates an instance of an Express server
const app = express();

// this express.json function has to be before the app.use("/", cart-items) in order for it to pull from postman
app.use(express.json());

//  
app.use("/", cartItems);

// define the port
const port = 5000;

// run the server
app.listen(port, () => console.log(`listening on port: http://localhost:${port}`));