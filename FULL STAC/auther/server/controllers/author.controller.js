const { Author } = require('../models/author.model');


module.exports.create = (request, response) => {
    const { name} = request.body;
Author.create({name})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}
module.exports.getOne = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(update => response.json(update))
        .catch(err => response.status(400).json(err))
}

module.exports.destroy = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
