#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import { rawlist } from '@inquirer/prompts';
import gradient from "gradient-string";
import figlet from "figlet";
import chalkAnimation from 'chalk-animation'
import { createSpinner } from "nanospinner";

import data from './assets/questions.json' with { type: 'json' };
import calculateGayScore from './assets/gayformula.js';


let userName;
let score = 0;
let gayPercentage;
let gayLabel;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();

    figlet(`Homo Meter`, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });

    await sleep(1000);

    const gayTitle = chalkAnimation.rainbow(`
        Let's find out what's hiding inside the warmth of your underwear
        Straightness is a myth. Your score is not.
    `);

    await sleep();

    // gayTitle.stop();

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

async function askQuestion() {
    for (const item of data.questions) {
        let options = []
        for (const option of item.options) {
            options.push({
                name: option.text,
                value: option.points,
            })
        }

        const answer = await rawlist({
            message: item.question,
            choices: options,
        })
        const points = answer;
        const isLastQuestion = (item.id === 10);
        await handleEachQuestions(isLastQuestion, points);
    }
}

await askQuestion()

async function handleEachQuestions(isLastQuestion, points) {
    const spinner = createSpinner('Adding your gayness...').start();
    await sleep();

    score += points;
    if (isLastQuestion) {
        spinner.success({ text: 'Alright!! Let\'s see how gay you are' });
        Annoucement();
    } else {
        spinner.success({ text: 'Gayness added, answer the next question' });
    }
}

function Annoucement() {
    ({ gayPercentage, gayLabel } = calculateGayScore(score));

    const msg =
        `Congrats ${userName}! You are ${gayPercentage}% gay\n
                        You are a ${gayLabel}`

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}