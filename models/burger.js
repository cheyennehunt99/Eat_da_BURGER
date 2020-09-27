// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm");

// burger model
const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    insertOne: (name, devoured, cb) => {
        orm.insertOne(name, devoured, (res) => {
            cb(res);
        });
    },

    updateOne: (devoured, nameToUpdate, cb) => {
        orm.updateOne(devoured, nameToUpdate, (res) => {
            cb(res);
        });
    },

    delete: (condition, cb) => {
        orm.delete(condition, (res) => {
            cb(res);
        });
    }

  };

// export burger model
module.exports = burger;