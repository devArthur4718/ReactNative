 //Método responsável pela criação da tablea
exports.up = function(knex) {
    knex.schema.createTable('tabOngs', function (table){
        table.string('id').primary(); 
        table.string('name').notNullable(); 
        table.string('email').notNullable(); 
        table.string('whatsapp').notNullable();  
        table.string('city').notNullable(); 
        table.string('uf', 2).notNullable(); 
    });
};

//Downgrade da table em caso de erro
exports.down = function(knex) {
    return knex.schema.dropTable('tabOngs');
  
};
