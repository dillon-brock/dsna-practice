import { makePet, formatWork, expandWork } from './objects.js';

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

test('format book object', (expect) => {
    const originalBook = {
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds',
            genre: 'scifi',
            words: 312000
        }
    };

    expect.deepEqual(formatWork(originalBook), { work: 'war of the worlds', writer: 'h.g. wells' });
});

test('expand book object', (expect) => {
    
    expect.deepEqual(expandWork({ work: 'war of the worlds', writer: 'h.g. wells' }), {
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds'
        }
    });

});