require('../../../config');
const databaseFactory = new (require('../../../core/models/database/databaseFactory'))();

QUnit.module('databaseFactory');

QUnit.test('Check Database Factory with driver creation', assert => {

    let databaseDriver = new (require('../../../core/models/database/driver/mysqli/driver'))();
    assert.deepEqual(databaseFactory.getDriver(), databaseDriver);
});

QUnit.test('Check Database Factory  with query builder creation', assert => {

    let databaseQueryBuilder = new (require('../../../core/models/database/driver/mysqli/queryBuilder'))();
    assert.deepEqual(databaseFactory.getQueryBuilder(), databaseQueryBuilder);
});

QUnit.test('Check Database Factory with exception error of invalid driver creation', assert => {
    process.env.DB_NAME = 'mysql'
    assert.throws(function () { databaseFactory.getDriver() });

});

QUnit.test('Check Database Factory with exception error of invalid query builder creation', assert => {

    assert.throws(function () { databaseFactory.getQueryBuilder() });
});