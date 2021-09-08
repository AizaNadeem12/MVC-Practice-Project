require('../../config');
const sinon = require('sinon')
const crudModel = new (require('../../core/models/crudModel'))();

QUnit.module('crudModel');

const params = {
    id: 1,
    first_name: 'Aiza',
    last_name: 'Nadeem'
};

const emptyParams = {};

sinon.stub(crudModel, 'getMetaData').returns({
    setParams: () => { return true; }
});

sinon.stub(crudModel, 'getDriver').returns({
    executeQuery: () => { return true; }
});

var stub = sinon.stub(crudModel, 'getQueryBuilder').returns({
    create: () => { return true; },
    read: () => { return true; },
    update: () => { return true; },
    delete: () => { return true; }
});

QUnit.test('Crud Model Create Function with params', assert => {
    assert.true(crudModel.create(params));
});

QUnit.test('Crud Model Create Function with empty params', assert => {
    assert.notOk(crudModel.create(emptyParams));
});

QUnit.test('Crud Model Read Function', assert => {
    assert.true(crudModel.read());
});

QUnit.test('Crud Model Update Function', assert => {
    assert.true(crudModel.update(params));
});

QUnit.test('Crud Model Update Function with empty params', assert => {
    assert.notOk(crudModel.update(emptyParams));
});

QUnit.test('Crud Model Delete Function', assert => {
    assert.true(crudModel.delete(params));
});

QUnit.test('Crud Model Delete Function with empty params', assert => {
    assert.notOk(crudModel.delete(emptyParams));
});

QUnit.test('Crud Model Create Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {crudModel.create(params)});
});

QUnit.test('Crud Model Read Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {crudModel.read(params)});
});

QUnit.test('Crud Model Update Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {crudModel.update(params)});
});

QUnit.test('Crud Model Delete Function Exception', assert => {
    stub.throws(Error);
    assert.throws(function () {crudModel.delete(params)});
});
