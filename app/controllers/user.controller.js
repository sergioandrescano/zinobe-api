const User = require('../models/user.model');

function get(req, res) {
    User.find({})
        .then(users => {
            if (users.length > 0) return res.status(200).send({ users });
            return res.status(204).send({ message: 'No content' });
        }).catch(error => res.status(500).send({ error }));
}

function getById(req, res) {

}

function authentication(req, res){
    User.findOne({username: req.body.username, password: req.body.password})
    .then(user => {
        if (user) return res.status(200).send({ user });
        return res.status(204).send({ message: 'No content' });
    }).catch(error => res.status(500).send({ error }));
}

function post(req, res) {
    new User(req.body).save().then(user => res.status(201).send({ user })).catch(error => res.status(500).send({ error }));
}

function put(req, res) {

}

function find(req, res, next){
    let query = {};
    query[req.params.id] = 
    User.find({ id: req.params.id}).then()
}

module.exports = {
    get,
    getById,
    post,
    authentication,
    put,
    find
}