#!/usr/bin/env node

// import data from './assets/questions.json' assert { type: 'json' };

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
        Get your tiny little asshole out of here,
        Your mf asshole!!!
    `);
}

await welcome()

async function askName() {
    const answers = await inquirer.prompt({
        name: 'username',
        type: 'input',
        message: 'What is your name? ',
        default() {
            return 'Anonymous'
        },
    });

    userName = answers.username;
}

await askName()

async function askQuestions() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'What is your birthday? ',
        choices: [
            'a',
            'b',
            'c',
            'd',
        ],
    });
    return handleQuestions(answers.question_1 === 'c');
}

await askQuestions()

async function handleQuestions(iscorrect) {
    const spinner = createSpinner('checking answer...').start();
    await sleep();

    if (iscorrect) {
        spinner.success({ text: 'Correct answer' });
    } else {
        spinner.error({ text: 'Incorrect answer' });
        process.exit(1);
    }
}

function winner() {
    console.clear()

    const msg = `Congrats ${userName}!\n You are gay`
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}

await winner()