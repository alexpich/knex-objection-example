// include model
const { Model } = require("objection");

// test.js Step 4
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "number" },
      },
    };
  }
}
// Export User class
module.exports = User;
