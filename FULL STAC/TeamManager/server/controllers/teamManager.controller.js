const {Team}  = require('../models/teamManager.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.create = (request, response) => {
    const { name,position,status } = request.body;
Team.create({
    name,position,status
    })
        .then(Team => response.json(Team))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Team.find({})
        .then(Teams => response.json(Teams))
        .catch(err => response.json(err))
}
module.exports.getOne = (request, response) => {
    Team.findOne({_id:request.params.id})
        .then(Team => response.json(Team))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
        })
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err));
}
module.exports.delete = (request, response) => {
    Team.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateStatusTeam = (request, response) => {
    Team.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
        })
        .then(updatedTeam => response.json(updatedTeam))
        .catch(err => response.status(400).json(err));
}
