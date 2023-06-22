'use strict';

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');

const database = require('./database.json');

let total = 0 // TODO

let arrTemp = [];
let array2 = [];
_.forEach(database, element => {
    _.forEach(element.hats, e => {
        arrTemp.push(e);
    })
});
let jsonResult = _.countBy(arrTemp, (unit) => unit.name);
for (var clave in jsonResult) {
    array2.push({
        name: clave,
        count: jsonResult[clave]
    });
}
array2.sort(function (a, b) { return b.count - a.count; });
console.log("The top-3 most selling hats");
console.log("-------------------------------------------------------");
_.forEach(array2, (element, index) => {
    let suma = _.sumBy(arrTemp.filter((e) => e.name === element.name), function (o) { return Math.round(o.price); });
    let row = index + 1;
    console.log(`${row}. Name: ${element.name}, Price: ${suma}, Count: ${element.count}`);
    total = total + element.count;
    if (index === 2) return false;
});
console.log("-------------------------------------------------------");

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`)

console.log('Success!');

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: TODO
       Resp: Notación Big-Oh (O)
 *   - space complexity: TODO
       Resp: Gran notación Omega (Ω)
 */
