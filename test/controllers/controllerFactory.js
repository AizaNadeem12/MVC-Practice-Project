require('../../config');
const controllerFactory = new (require('../../core/controllers/controllerFactory'))();

QUnit.module('controllerFactory');

QUnit.test('Check Controller Factory with controller creation', assert => {

    let controller = new (require('../../app/controllers/studentController'))();
    assert.deepEqual(controllerFactory.createController('student'), controller);
});

QUnit.test('Check Controller Factory with different controllers creation', assert => {

    let controller = new (require('../../app/controllers/teacherController'))();
    assert.notDeepEqual(controllerFactory.createController('course'), controller);
});

QUnit.test('Check Controller Factory with exception error of invalid controller creation', assert => {

    assert.throws(function () { controllerFactory.createController('stu') });

});