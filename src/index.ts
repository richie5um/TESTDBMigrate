'use strict';

let DBMigrate = require('db-migrate');

let dbName = "richs";
let dbmigrateConfig = {
    "dev": {
        "driver": "mysql",
        "host": "localhost",
        "port": 3307,
        "multipleStatements": true,
        "password": process.env.DB_PASS,
        "user": "root"
    }
};

let dbMigrate = DBMigrate.getInstance(true, { config: dbmigrateConfig });
dbMigrate.createDatabase(dbName)
    .then(() => {
        dbMigrate.config.dev.database = dbName;
        return dbMigrate.up();
    })
    .catch((err) => {
        console.log("DBMigrate Error:", err);
    });
