/*
* This file creates a plain old JSON-formatted file with some example data.
*
* Just run `node index.js` and you're done.
*/ 
const fs = require('fs');

const hackers = [
    {
        id: 1000,
        firstname: 'Mischa',
        pseudonym: 'lolsec'
    },
    {
        id: 1001,
        firstname: 'Oleg',
        pseudonym: 'glitterbot'
    },
    {
        id: 1002,
        firstname: 'Julia',
        pseudonym: 'bittany'
    },
    {
        id: 1003,
        firstname: 'Ivan',
        pseudonym: 'bitlock'
    },
    {
        id: 1004,
        firstname: 'Sascha',
        pseudonym: 'byterider'
    }
]

fs.writeFileSync('hackers.json', JSON.stringify(hackers));