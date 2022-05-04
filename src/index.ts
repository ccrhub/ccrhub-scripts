#!/usr/bin/env node

import chalk from 'chalk';
import * as chalkAnimation from 'chalk-animation';
import clear from 'clear';
import { Command } from "commander";
import figlet from 'figlet';
import fs from "fs";
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
  .requiredOption("-h, --host <host>", "Host (required)")
  .requiredOption("-k, --apikey <apiKey>", "API Key (required)")
  .requiredOption("-r, --relationId <relationID>", "Relation ID (required)")
  .requiredOption("--subject <subject>", "The email subject (required)")
  .requiredOption(
    "--toEmailAddressKey <toEmailAddressKey>",
    "The email address key (required)"
  )
  .option("--text <text>", "The text body of the email")
  .option("--html <html>", "The HTML body of the email")
  .option("--templateTextId <templateTextlId>", "The TEXT template ID")
  .option("--templateHtmlId <templateHtmlId>", "The HTML template ID")
  .option(
    "--replyToEmailAddress <replyToEmailAddress>",
    'The reply email address (defaults to: "No Reply" noreply@<instance>.ccrhub.net is used'
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
  .command("file-store-upload")
  .requiredOption("-h, --host <host>", "Host (required)")
  .requiredOption("-k, --apikey <apiKey>", "API Key (required)")
  .requiredOption("-r, --relationId <relationID>", "Relation ID (required)")
  .requiredOption("-f, --fileName <fileName>", "The file (required)")
  .option("--recordId <recordId>", "Relation ID (required)")
  .option("--public", "indicates if the file is public")
  .action(async (options) => {
    // inject functionId
    console.log(options);
    fetch(
      `${options.host}/.netlify/functions/filestore/${options.relationId}${
        options.recordId ? `/${options.recordId}` : ""
      }`,
      {
        method: "POST",
        headers: {
          "X-API-KEY": options.apikey,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      }
    )
      .then((res) => res.text())
      .then((text) => {
        const readBuffer = fs.readFileSync(`./${options.fileName}`);
        const responseBody = JSON.parse(text);
        const presignedUploadUrl = responseBody.signedUrl;
        const fileId = responseBody.file.id;
        console.log(presignedUploadUrl);
        console.log(`fileId: ${fileId}`);
        fetch(presignedUploadUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/octet-stream" },
          body: readBuffer,
        })
          .then((res) => res.text())
          .then((text) => console.log(text))
          .catch((err) => console.log(err));
      });
  });





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

