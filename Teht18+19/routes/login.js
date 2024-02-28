const express = require('express');
const router = express.Router();
const login = require('../models/login_model');

router.post('/', function(request, response) {
    if (request.body.username && request.body.password) {
        const username = request.body.username;
        const password = request.body.password;
        console.log("Input Username:", username);

        login.checkPassword(username, function(dbError, dbResult) {
            if (dbError) {
                response.status(500).json({ error: 'Database error' });
                return;
            }

            if (dbResult.length > 0) {
                const storedPassword = dbResult[0].password;
                console.log("Stored password:", storedPassword);
                console.log("Provided password:", password);

                if (password === storedPassword) {
                    console.log("Login successful");
                    response.send(true);
                } else {
                    console.log("Incorrect password");
                    response.send(false);
                }
            } else {
                console.log("User not found");
                response.send(false);
            }
        });
    } else {
        console.log("Username or password missing");
        response.status(400).json({ error: 'Username or password missing' });
    }
});

module.exports = router;