console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('------Note Created-------')
        console.log(`Title: ${note.title} Body: ${note.body}`);
        console.log('-------------------------')
    }
    else{
        console.log('Note title already exists');
    }

} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else{
    console.log('Command not recognized');
}
