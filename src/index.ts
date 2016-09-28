'use strict';

let DBMigrate = require('db-migrate');
import * as chai from 'chai';

let expect = chai.expect;

// let dbMigrateCallback = (migrator, originalErr) => {
//     migrator.driver.close((err) => {
//         expect(originalErr).to.be.undefined;
//         expect(err).to.be.undefined;
//         console.log('Done');
//     })
// };

//let dbMigrate = DBMigrate.getInstance(true, dbMigrateCallback);
let dbMigrate = DBMigrate.getInstance(true);
dbMigrate.up();