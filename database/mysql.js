const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'develop',
  password : '123456',
  database : 'DemoDB'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

const query = (queryString) => {
    connection.query(queryString, function (error, results) {
        if (error) throw error;
        console.log(results)
        // connected!
    });
}

module.exports = {
    query
}