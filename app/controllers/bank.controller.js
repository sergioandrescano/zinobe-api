const Bank = require('../models/bank.model');

function getById(req, res) {
    Bank.findOne({id: req.params.id})
    .then(bank => {
        if (bank) return res.status(200).send({ bank });
        return res.status(204).send({ message: 'No content' });
    }).catch(error => res.status(500).send({ error }));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.bank) return res.status(404).send({message: 'NOT FOUND'});
    let bank = req.body.bank[0];
    bank = Object.assign(bank,req.body);
    bank.save().then(bank => res.status(200).send({bank})).catch(error => res.status(500).send({error}));
}

function find(req,res,next){
    let query = {};
    query['id'] = req.params.id;
    Bank.find(query).then(bank => {
        if(!bank.length) return next();
        req.body.bank = bank;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    getById,
    update,
    find
}