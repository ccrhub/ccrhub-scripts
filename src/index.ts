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


if (!process.argv.slice(2).length) {
  program.outputHelp();
}


program
  .command("email-background")
  .option("-d, --debug", "output extra debugging")
  .option("-f, --functionId <functionId>", "Relation ID")
  .option("-h, --host <host>", "Host")
  .option("-k, --apikey <apiKey>", "API Key")
  .option("-r, --relationId <relationID>", "Relation ID")
  .option("--text <text>", "The text body of the email")
  .option("--html <html>", "The HTML body of the email")
  .option("--templateTextId <templateTextlId>", "The TEXT template ID")
  .option("--templateHtmlId <templateHtmlId>", "The HTML template ID")

  .requiredOption("--subject <subject>", "The email subject")
  .requiredOption(
    "--toEmailAddressKey <toEmailAddressKey>",
    "The email address key"
  )
  .action(async (options) => {
    // inject functionId
    options.functionId = "email-background";
    console.log(options);
    fetch(`${options.host}/.netlify/functions/job-starter`, {
      method: "POST",
      headers: {
        "X-API-KEY": options.apikey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then((res) => res.text())
      .then((text) => console.log(text));
  });

program
  .command("email-background2")




const options = program.opts();
if (options.debug) console.log(options);

program.parse(process.argv);


const intiateMessage = chalkAnimation.neon("Initiating Firing Sequence", 3);
intiateMessage.start();
const link = TerminalLink("ccrhub.com", "https://www.ccrhub.com");
console.log(link);

// fetch(`${options.host}/.netlify/functions/job-starter`, {
//   method: "POST",
//   headers: {
//     "X-API-KEY": options.apikey,
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(options),
// })
//   .then((res) => res.text())
//   .then((text) => console.log(text));

