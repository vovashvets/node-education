import chalk from "chalk";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";

// node index.js add-test
if (process.argv[2] === "add-test") {
  console.log(chalk.blue.bold("Add note"));
}

// node index.js add --title="My title"
yargs(hideBin(process.argv))
    .command('add', 'Add a new note', () => {
      console.log("Adding a new note")
    }, (argv) => {
      console.info(`Note title is:${argv.title}`)
    })
    .option('title', {
      alias: 't',
      type: 'string',
      description: 'Note title',
      demandOption: true // required
    })
    .parse()