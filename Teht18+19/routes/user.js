const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

router.get('/:id?', function(request, response) {
    if (request.params.id) {
        user.getById(request.params.id, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    } else {
        user.getAll(function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    }
});

router.post('/', function(request, response) {
    const { username, password } = request.body;

    // Call the user model to add the new user with the provided password (not hashed)
    user.add({ username, password }, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.delete('/:id', function(request, response) {
    user.delete(request.params.id, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.put('/:id', function(request, response) {
    user.update(request.params.id, request.body, function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;