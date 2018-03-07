#!/usr/bin/env node
const {
  exec
} = require('child_process');
var argv = require('minimist')(process.argv.slice(2))

let minutes = argv._[0] * 60 * 1000;
argv._.shift()
let text = argv._.join(' ');

speak()

function speak(){
  exec(`say "${text}"`)
  setTimeout(speak, minutes);
}