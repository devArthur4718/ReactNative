
exports.up = function(knex) {
    return knex.schema.createTable('sinistros', function (table){
        table.increments(); 
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //Foreign Key status
        table.string('ongs_id').notNullable();
        table.foreign('ongs_id').references('id').inTable('ongs'); 
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('sinistros');
};
