const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate')
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router(); 


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name : Joi.string().required(), 
        email : Joi.string().required().email(), 
        whatsapp : Joi.number().required().min(10).max(11), 
        city : Joi.string().required(), 
        uf: Joi.string().required().length(2), 

    })
}),OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object().keys({
        authorization : Joi.string().required(),
    })
}),ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index );
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;