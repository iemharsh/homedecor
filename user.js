var _ = require('lodash');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


function UserDAO(database) {
    "use strict";

    this.db = database;



    this.addUser = function(user) {
        this.db.collection('user').insert(user);
    }

    this.auth = function(user, callback) {

        this.db.collection('user').findOne( { $and : [{email: user.email}, {password: user.password}] }, function(err, data) {

            callback(data);    
        });
        
    }

}


module.exports.UserDAO = UserDAO;