/*
*  Here we're using protobuf to create a binary file from the example data.
*
* Just run `node index2.js` and you're done.
*/
const Schema = require('./hackers_pb');
const fs = require('fs');

const mischa = new Schema.Hacker();
mischa.setId(1000);
mischa.setFirstname('Mischa');
mischa.setPseudonym('lolsec');

const oleg = new Schema.Hacker();
oleg.setId(1001);
oleg.setFirstname('Oleg');
oleg.setPseudonym('glitterbot');

const julia = new Schema.Hacker();
julia.setId(1002);
julia.setFirstname('Julia');
julia.setPseudonym('bittany');

const ivan = new Schema.Hacker();
ivan.setId(1003);
ivan.setFirstname('Ivan');
ivan.setPseudonym('bitlock');

const sascha = new Schema.Hacker();
sascha.setId(1004);
sascha.setFirstname('Sascha');
sascha.setPseudonym('byterider');

const hackers = new Schema.Hackers();
hackers.addHackers(mischa);
hackers.addHackers(oleg);
hackers.addHackers(julia);
hackers.addHackers(ivan);
hackers.addHackers(sascha);

const bytes = hackers.serializeBinary();
fs.writeFileSync('hackers.bin', bytes);
const devJSON = Schema.Hackers.deserializeBinary(bytes);
console.log('Example data in bytes:\n', bytes);
console.log('Example data in JSON format\n', devJSON.toString());