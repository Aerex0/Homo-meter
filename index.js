#!/usr/bin/env node

import data from './assets/questions.json' assert { type: 'json' };

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation'
import { createSpinner } from "nanospinner";


let userName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const gayTitle = chalkAnimation.rainbow(
        'I know you are a gay!! \n'
    );

    await sleep();

    gayTitle.stop();

    console.log(`
        ${chalk.bgRedBright(`Hey asshole`)}
        Get your tiny little ass out of here,
        Your mf asshole!!!
    `);
}

await welcome()


