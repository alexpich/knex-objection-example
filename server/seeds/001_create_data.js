exports.seed = function (knex) {
  // Deletes ALL existing entries of todos
  return knex("todos")
    .del()
    .then(() => {
      // Delete all data of users
      return knex("users").del();
    })
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Alex",
          age: 27,
        },
        {
          name: "Frodo",
          age: 42,
        },
        {
          name: "Gandalf",
          age: 85,
        },
      ]);
    })
    .then((users) => {
      return knex("todos").insert([
        {
          user_id: 1, // Alex
          todo: "Sell camera",
        },
        {
          user_id: 1, // Alex
          todo: "Buy Cheetos",
        },
        {
          user_id: 3, // Gandalf
          todo: "Pay rent",
        },
      ]);
    });
};
