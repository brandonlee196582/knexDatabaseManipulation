/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_TYPE CASCADE')
  await knex('pet_type').del()
  await knex('pet_type').insert([
    {id: 1, name: 'cat'},
    {id: 2, name: 'dog'},
    {id: 3, name: 'bird'},
    {id: 4, name: 'fish'}
  ]);
};
