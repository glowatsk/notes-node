const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const commandOptions = {
    title: {
        describe: 'Title of Note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'Body of Note',
        demand: true,
        alias: 'b'
    }
};

const argv = yargs
    .command('add', 'Add a new note', {
    title: commandOptions.title,
    body: commandOptions.body

})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {title: commandOptions.title})
    .command('remove', 'Remove a note', {title: commandOptions.title})
    .help()
    .argv;

var command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note title already exists');
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length}`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved
        ? 'Note was removed.'
        : 'Note was not found.';
    console.log(message);
} else {
    console.log('Command not recognized');
}
