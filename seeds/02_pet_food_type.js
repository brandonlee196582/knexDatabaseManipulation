/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'cat chow', description: 'now better than ever'},
    {id: 2, name: 'dog bits', description: 'your dogs will love, not actual dog bits'},
    {id: 3, name: 'fish food', description: 'float that food'}
  ]);
};
