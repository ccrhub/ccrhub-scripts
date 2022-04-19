#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var chalkAnimation = __importStar(require("chalk-animation"));
var clear_1 = __importDefault(require("clear"));
var commander_1 = require("commander");
var figlet_1 = __importDefault(require("figlet"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var terminal_link_1 = __importDefault(require("terminal-link"));
(0, clear_1.default)();
console.log(chalk_1.default.blue(figlet_1.default.textSync('CCrHub-cli', { horizontalLayout: 'full' })));
console.warn(chalk_1.default.green("Digital Delivery in under 2 minutes "));
var program = new commander_1.Command();
program
    .version("1.0.0")
    .description("CCRHub CLI")
    .option("-d, --debug", "output extra debugging")
    .option("-h, --host <host>", "Host")
    .option("-k, --key <apiKey>", "API Key")
    .option("-r, --relationId <relationID>", "Relation ID")
    .option("--subject <subject>", "The email subject")
    .option("--toEmailAddressKey <toEmailAddressKey>", "The email address key")
    .parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
var cheese = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';
console.log('  - %s cheese', cheese);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
var intiateMessage = chalkAnimation.neon("Initiating Firing Sequence", 3);
intiateMessage.start();
var link = (0, terminal_link_1.default)("ccrhub.com", "https://www.ccrhub.com");
console.log(link);
(0, node_fetch_1.default)("".concat(options.host, "/.netlify/functions/job-starter"), { method: "POST", body: JSON.stringify(options) })
    .then(function (res) { return res.text(); })
    .then(function (text) { return console.log(text); });
