require('../../config');
const sinon = require('sinon');
const restController = new (require('../../core/controllers/restController'))();

QUnit.module('restController');

sinon.stub(restController, 'getModel').returns({
    create: () => { return true; },
    read: () => { return true; },
    update: () => { return true; },
    delete: () => { return true; }
});
sinon.stub(restController, 'getRequestParams').returns({});
var stub = sinon.stub(restController, 'getView').returns(true);

QUnit.test('Rest Controller Default View Function', assert => {
    assert.true(restController.defaultView('',''));
});

QUnit.test('Rest Controller Create Function', assert => {
    assert.true(restController.create('',''));
});

QUnit.test('Rest Controller Read Function', assert => {
    assert.true(restController.read('',''));
});

QUnit.test('Rest Controller Update Function', assert => {
    assert.true(restController.update('',''));
});

QUnit.test('Rest Controller Delete Function', assert => {
    assert.true(restController.delete('',''));
});

QUnit.test('Rest Controller Default View Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {restController.defaultView('','')});
});

QUnit.test('Rest Controller Create Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {restController.create('','')});
});

QUnit.test('Rest Controller Read Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {restController.read('','')});
});

QUnit.test('Rest Controller Update Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {restController.update('','')});
});

QUnit.test('Rest Controller Delete Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {restController.delete('','')});
});