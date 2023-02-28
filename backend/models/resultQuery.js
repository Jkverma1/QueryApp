const mysql = require('mysql')
const querySchema = new mysql.Schema({
  question: String,
  answer: String,
});

module.exports = mysql.model("query", querySchema);
