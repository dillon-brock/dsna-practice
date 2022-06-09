import { makePet } from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('working pet factory function', (expect) => {
    
    expect.deepEqual(makePet('fido', 'cat', 6, 'tuna', ['feather chaser', 'laser pointer', 'ball of yarn']), { 
        name: 'fido',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    });

});