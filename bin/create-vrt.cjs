#! /usr/bin/env node

'use strict';

const path = require('path');
const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.log(stderr);
  } catch (error) {
    console.log('\x1b[31m', error, '\x1b[0m');
  }
}

if (process.argv.length < 3) {
  console.log('Please include the name of your app');
  console.log('For example:');
  console.log('    npx create-vrt awesome-app');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), process.argv[2]);
const repo = 'https://github.com/heavysudo/create-vrt.git';

async function createFolder() {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(
        `The file ${process.argv[2]} already exist in the current directory, please give it another name.`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log('\x1b[33m', 'Project is spinning up...', '\x1b[0m');
    console.log('Getting everything ready!');
    console.log();

    await exec(`git clone --depth=1 ${repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log('Almost done...');
    await runCmd('npm install');
    console.log();
    console.log('Cleaning things up!');

    await runCmd('npx rimraf ./.git');

    fs.rm(path.join(projectPath, 'bin'), { recursive: true }, (error) => {
      if (error) {
        ("Sorry but I couldn't take out the trash!! Something isn't working right!");
      }
    });

    console.log('All Set! Now build something awesome!');
  } catch (error) {
    console.log(error);
  }
}
createFolder();
main();
