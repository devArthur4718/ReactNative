const connection = require('../database/connection'); 

module.exports = {

    async index(request, response){
        const { page = 1} = request.query; 

        const incidents = await connection('sinistros')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');


        return response.json(incidents);

    },

    async create(request, response){
        const {title, description, value } = request.body;
        const ongs_id = request.headers.authorization; 

       const [id] = await connection('sinistros').insert({
            title,
            description, 
            value, 
            ongs_id
        }); 

        return response.json({ id })
    }, 
    async delete(request, response){
        const { id } = request.params;
        const ongs_id = request.headers.authorization;

        const incident = await connection('sinistros')
            .where('id', id)
            .select('ongs_id')
            .first(); 

        if(incident.ongs_id != ongs_id){
            return response.status(401).json({error : "Operation not permitted."}); 
        }

        await connection('sinistros').where('id', id).delete(); 

        return response.status(204).send();

    }
};