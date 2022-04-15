#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import { Command } from "commander";


import figlet from 'figlet';

clear();
console.log(
  chalk.blue(
    figlet.textSync('CCrHub-cli', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.green(
    "Digital Delivery in under 2 minutes " +
      chalk.blue.underline.bold("Initiating firing sequence") +
      " Initiating!"
  )
);

const program = new Command();

program
  .version("1.0.0")
  .description("CCRHub CLI")
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "Add pineapple")
  .option("-b, --bbq", "Add bbq sauce")
  .option("-c, --cheese <type>", "Add the specified type of cheese [marble]")
  .option("-C, --no-cheese", "You do not want any cheese")
  .parse(process.argv);

const options = program.opts();

console.log('enter command:');
if (options.peppers) console.log('  - peppers');
if (options.pineapple) console.log('  - pineapple');
if (options.bbq) console.log('  - bbq');

const cheese: string = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';

console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
