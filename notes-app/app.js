const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const note = require('./notes.js')

//customise yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe:'Add a note',
    builder: { //to provide options for the command use builder
        title:{
            decribe: 'Title of note',
            demandOption: true,
            type: 'string'
        },
        body:{
            decribe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
     //the title is available because we lited it in the object for builder
        note.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder: { 
        title:{
            decribe: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

//creat list notes command
yargs.command({
    command: 'list',
    describe:'list all notes',
    handler() {
        notes.listNotes()
    }
})

//creat read note command
yargs.command({
    command: 'read',
    describe:'read a notes',
    builder:{
        title:{
            describe:"title to be read out",
            demandOption:true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
