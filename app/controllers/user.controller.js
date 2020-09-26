const User = require('../models/user.model');

function get(req, res) {
    user.find({})
        .then(users => {
            if (users.length > 0) return res.status(200).send({ users });
            return res.status(204).send({ message: 'No content' });
        }).catch(error => res.status(500).send({ error }));
}

function getById(req, res) {

}

function post(req, res) {
    new User(req.body).save().then(user => res.status(201).send({ user })).catch(error => res.status(500).send({ error }));
}

function put(req, res) {

}

function find(req, res, next){
    User.find({})
}

module.exports = {
    get,
    getById,
    post,
    put,
    find
}