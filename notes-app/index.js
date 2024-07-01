import chalk from "chalk";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {addNote, removeNote} from "./notes.js";

yargs(hideBin(process.argv))
    // node index.js add --title="My title" --body="My body"
    .command('add', 'Add a new note', (yargs) => {
        console.log(chalk.blue.bold("Adding a new note"))

        yargs.option('title', {
            alias: 't',
            type: 'string',
            description: 'Note title',
            demandOption: true // required
        })
        yargs.option('body', {
            alias: 'b',
            type: 'string',
            description: 'Body of note',
            demandOption: true
        })

        return yargs
    }, (argv) => {
        addNote(argv.title, argv.body)
    })
    // node index.js remove --id=1
    .command('remove', 'Remove a note by id', (yargs) => {
        console.log(chalk.blue.bold("Removing a new note"))

        return yargs.option('id', {
            type: 'number',
            description: 'Note id',
            demandOption: true
        })
    }, (argv) => {
        removeNote(argv.id)
    })
    .parse()
