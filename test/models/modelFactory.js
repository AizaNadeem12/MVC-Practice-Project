require('../../config');
const modelFactory = new (require('../../core/models/modelFactory'))();

QUnit.module('modelFactory');

QUnit.test('Check Model Factory with model creation', assert => {

    let model = new (require('../../app/models/student'))();
    assert.deepEqual(modelFactory.createModel('student'), model);
});

QUnit.test('Check Model Factory with different models creation', assert => {

    let model = new (require('../../app/models/teacher'))();
    assert.notDeepEqual(modelFactory.createModel('course'), model);
});

QUnit.test('Check Model Factory with exception error of invalid model creation', assert => {

    assert.throws(function () { modelFactory.createModel('teach') });
});