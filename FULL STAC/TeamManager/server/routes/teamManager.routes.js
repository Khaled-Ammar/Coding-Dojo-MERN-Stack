const TeamCont = require('../controllers/teamManager.controller');
module.exports = function(app){
    app.post('/api/Team', TeamCont.create);
    app.get('/api/Teams', TeamCont.getAll);
    app.get('/api/Team/:id', TeamCont.getOne);
    app.put('/api/Team/:id', TeamCont.update);
    app.get('/api/Team/show/:id', TeamCont.getOne);
    app.put('/api/Team/edit/:id', TeamCont.update);
    app.delete('/api/Team/:id', TeamCont.delete);
}