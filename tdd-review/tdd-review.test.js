import {
    findLength,
    findThirdItem,
    firstKeyLastValue,
    inventoryChecker
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('find length of an array', (expect) => {
    // Arrange:

    const array = [2, 4, 0, 9, 12];
    const expected = 5;

    //Act:
    const actual = findLength(array);

    //Assert:
    expect.equal(actual, expected);
});

test('find the third element of an array', (expect) => {
    // Arrange, Act, Assert
    const array = [7, 4, 1, 0, 3];
    const expected = 1;

    const actual = findThirdItem(array);

    expect.equal(actual, expected);
});

test('find the third element of an empty array', (expect) => {
    // Arrange, Act, Assert
    const array = [];
    const expected = 'empty';

    const actual = findThirdItem(array);

    expect.equal(actual, expected);
});

test('get first key and last value of an object', (expect) => {
    const cat = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6
    };
    const expected = {
        firstKey: 'name',
        lastValue: 6
    };
    const actual = firstKeyLastValue(cat);
    expect.deepEqual(actual, expected);
});

test('get inventory of an item with amount less than 5', (expect) => {
    let inventory = {
        eggs: 20,
        bananas: 10
    };
    let item = {
        itemName: 'grapes'
    };

    expect.equal(inventoryChecker(inventory, item), 'running low on grapes');
});