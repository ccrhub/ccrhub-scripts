#!/usr/bin/env node

import chalk from 'chalk';
import * as chalkAnimation from 'chalk-animation';
import clear from 'clear';
import { Command } from "commander";
import figlet from 'figlet';
import fetch from "node-fetch";
import TerminalLink from "terminal-link";





clear();



console.log(
  chalk.blue(
    figlet.textSync('CCrHub-cli', { horizontalLayout: 'full' })
  )
);
console.warn(
  chalk.green(
    "Digital Delivery in under 2 minutes "
  )
);



const program = new Command();

program
  .version("1.0.0")
  .description("CCRHub CLI")
  .option("-d, --debug", "output extra debugging")
  .option("-h, --host <host>", "Host")
  .option("-k, --key", "API Key")
  .option("-r, --relationId <RelationID>", "Relation ID")
  .option("--subject <subject>", "The email subject")
  .option("--toEmailAddressKey <emailAddressKey>", "The email address key")
  .parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);


const cheese: string = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';

console.log('  - %s cheese', cheese);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

const intiateMessage = chalkAnimation.neon("Initiating Firing Sequence", 3);
intiateMessage.start();
const link = TerminalLink("ccrhub.com", "https://www.ccrhub.com");
console.log(link);

fetch(options.host)
  .then((res) => res.text())
  .then((text) => console.log(text));

