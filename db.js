var pg = require("pg");



var conString ='postgres://cylaoyxb:h3rEZPQv3PynnL65mvFItTkNEoQsI6nm@kandula.db.elephantsql.com:5432/cylaoyxb';
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log('connected to DB');
  
    client.end();
  });
});
