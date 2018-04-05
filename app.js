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
        notes.logNote(note);
    }
    else{
        console.log('Note title already exists');
    }

} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if (note){
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note was not found.';
    console.log(message);
} else{
    console.log('Command not recognized');
}
