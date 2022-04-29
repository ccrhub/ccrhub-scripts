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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var fs_1 = __importDefault(require("fs"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var terminal_link_1 = __importDefault(require("terminal-link"));
(0, clear_1.default)();
console.log(chalk_1.default.blue(figlet_1.default.textSync('CCrHub-cli', { horizontalLayout: 'full' })));
console.warn(chalk_1.default.green("Digital Delivery in under 2 minutes "));
var program = new commander_1.Command();
program
    .version("1.0.0")
    .description("CCRHub CLI");
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
    .requiredOption("--toEmailAddressKey <toEmailAddressKey>", "The email address key (required)")
    .option("--text <text>", "The text body of the email")
    .option("--html <html>", "The HTML body of the email")
    .option("--templateTextId <templateTextlId>", "The TEXT template ID")
    .option("--templateHtmlId <templateHtmlId>", "The HTML template ID")
    .option("--replyToEmailAddress <replyToEmailAddress>", 'The reply email address (defaults to: "No Reply" noreply@<instance>.ccrhub.net is used')
    .action(function (options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // inject functionId
        options.functionId = "email-background";
        console.log(options);
        (0, node_fetch_1.default)("".concat(options.host, "/.netlify/functions/job-starter"), {
            method: "POST",
            headers: {
                "X-API-KEY": options.apikey,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(options),
        })
            .then(function (res) { return res.text(); })
            .then(function (text) { return console.log(text); });
        return [2 /*return*/];
    });
}); });
program
    .command("file-store-upload")
    .requiredOption("-h, --host <host>", "Host (required)")
    .requiredOption("-k, --apikey <apiKey>", "API Key (required)")
    .requiredOption("-r, --relationId <relationID>", "Relation ID (required)")
    .requiredOption("-f, --fileName <fileName>", "The file (required)")
    .action(function (options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // inject functionId
        console.log(options);
        (0, node_fetch_1.default)("".concat(options.host, "/.netlify/functions/filestore/").concat(options.relationId), {
            method: "POST",
            headers: {
                "X-API-KEY": options.apikey,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(options),
        })
            .then(function (res) { return res.text(); })
            .then(function (text) {
            var readBuffer = fs_1.default.readFileSync("./".concat(options.fileName));
            var responseBody = JSON.parse(text);
            var presignedUploadUrl = responseBody.signedUrl;
            var fileId = responseBody.file.id;
            console.log(presignedUploadUrl);
            console.log("fileId: ".concat(fileId));
            (0, node_fetch_1.default)(presignedUploadUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/octet-stream" },
                body: readBuffer,
            })
                .then(function (res) { return res.text(); })
                .then(function (text) { return console.log(text); })
                .catch(function (err) { return console.log(err); });
        });
        return [2 /*return*/];
    });
}); });
var options = program.opts();
if (options.debug)
    console.log(options);
program.parse(process.argv);
var intiateMessage = chalkAnimation.neon("Initiating Firing Sequence", 3);
intiateMessage.start();
var link = (0, terminal_link_1.default)("ccrhub.com", "https://www.ccrhub.com");
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
