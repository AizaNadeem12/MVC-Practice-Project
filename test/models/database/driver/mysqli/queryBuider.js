require('../../../../../config');
const queryBuilder = new (require('../../../../../core/models/database/driver/mysqli/queryBuilder'))();

QUnit.module('queryBuilder');

const object = {
    table_name: 'Student',
    id: 1,
    first_name: 'Aiza',
    last_name: 'Nadeem'
};

QUnit.test('Check Query Builder Create Query', assert => {
    assert.deepEqual(queryBuilder.create(object), `INSERT INTO Student(first_name,last_name) VALUES ('Aiza','Nadeem')`);
});

QUnit.test('Check Query Builder Read Query', assert => {
    assert.deepEqual(queryBuilder.read(object), `SELECT * FROM Student`);
});

QUnit.test('Check Query Builder Update Query', assert => {
    assert.deepEqual(queryBuilder.update(object), `UPDATE Student SET first_name = 'Aiza',last_name = 'Nadeem' WHERE id = 1`);
});

QUnit.test('Check Query Builder Delete Query', assert => {
    assert.deepEqual(queryBuilder.delete(object), `DELETE FROM Student WHERE id = 1`);
});
