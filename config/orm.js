const connection = require('./connection');

const orm = {
    //mySQL select all query
    selectAll: function(table, cb) {
      let queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },

    //mySQL insert query to add a new burger
    insertOne: function(name, devoured, cb) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
        console.log(queryString);
        console.log(name);
        name.toString();
        connection.query(queryString, [name, devoured], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    //mySQL query to change devoured status
    updateOne: function(devoured, condition, cb) {
        let queryString = "UPDATE burgers SET devoured = "
        queryString += devoured;
        queryString += ' WHERE '
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
     //mySQL delete query to remove a burger
    delete: function(condition, cb) {
        let queryString = "DELETE FROM burgers WHERE "
        queryString += condition;
        console.log(queryString);
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }

};

module.exports = orm;