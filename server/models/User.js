// include model
const { Model } = require("objection");

// test.js Step 4
class User extends Model {
  static get tableName() {
    return "users";
  }
}
// Export User class
module.exports = User;