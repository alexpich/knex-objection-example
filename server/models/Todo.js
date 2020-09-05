const { Model } = require("objection");
const User = require("./User");

class Todo extends Model {
  static get tableName() {
    return "todos";
  }

  // define the relations to other models
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "todos.user_id",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Todo;
