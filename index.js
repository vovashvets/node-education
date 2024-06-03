import chalk from "chalk";

const args = process.argv[2];

if (args === "add") {
  console.log(chalk.blue.bold("Add note"));
} else if (args === "delete") {
  console.log(chalk.blue.bold("Delete note"));
}