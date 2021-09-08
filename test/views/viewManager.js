require('../../config');
const fs = require("fs");
const viewManager = new (require('../../core/views/viewManager'))();

QUnit.module('viewManager');

QUnit.test('Checking response body with same html file', assert => {
    const filedata = fs.readFileSync(`${process.env.ROOT}/app/views/student/create.html`, { encoding: 'utf8' });
    let response = viewManager.getView('student', 'create');
    assert.equal(response.getResponse(), filedata);
});

QUnit.test('Checking response body with different html file', assert => {
    const filedata = fs.readFileSync(`${process.env.ROOT}/app/views/student/create.html`, { encoding: 'utf8' });
    let response = viewManager.getView('student', 'update');
    assert.notEqual(response.getResponse(), filedata);
});