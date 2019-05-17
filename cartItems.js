// this is the routes file

// Import express module
const express = require('express');

const cartData = require('./cartData');

// Add router for cartItems
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const cartItems = express.Router();


// accept GET request at URI: /cartItems
cartItems.get('/cartItems', (req, res) => {
    console.log('test');
    console.log(req.body);
res.send(cartData);
});
    // accept POST request at URI: /cartItems
    cartItems.post('/cartItems', (req, res) => {
        console.log(req.body); // <-- this is the data that has been extracted from the request
    res.send(cartData);
    });
        // accept PUT request at URI: /cartItems
        cartItems.put('/cartItems/_ID_', (req, res) => {
            console.log(req.body); // <-- this is the data that has been extracted from the request
        res.send('Updating cartItems..');
        });
            // accept DELETE request at URI: /cartItems
            cartItems.delete('/cartItems/_ID_', (req, res) => {
                console.log(req.body); // <-- this is the data that has been extracted from the request
            res.send('Deleting cartItems..');
            });


module.exports = cartItems;

