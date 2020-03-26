
exports.up = function(knex) {
    knex.schema.createTable('tabIncidents', function (table){
        table.increments();
        table.string('title').notNullable(); 
        table.string('description').notNullable(); 
        table.decimal('value').notNullable();  
        //Foreign Key
        table.string('ong_id').notNullable();
        table.foreing('ong_id').references('id').inTable('tabOngs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTAble('tabIncidents')
};
