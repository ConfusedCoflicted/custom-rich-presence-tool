const client = require('discord-rich-presence')('574094643894157313');
const ascii = require('ascii-art');
const readline = require('readline');
const package = require('./package.json')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask() {
ascii.font('Custom-RPC', 'Doom', function(rendered) {
console.log(rendered)
rl.question('Version :'+ package.version +'\nPresence\'s Details? EX. Playing A Game, Learning something\nMade By Conflicted.\n> ', (answer) => {
if(!answer) { console.log('Please And Please! Specify Something!'); ask()}
if(answer.length < 2) { console.log('Please specify something that are 2 charector long!'); ask()}
if(answer.toLowerCase() === 'quit' || answer.toLowerCase() === 'left' || answer.toLowerCase() === 'exit') { console.clear; console.log('Exited The Process, The RPC will take sometime to update.'); rl.close(); return; process.exit;}
client.updatePresence({
  state: answer,
  details: "Made By Conflicted",
  startTimestamp: Date.now(),
  largeImageKey: "profile",
  largeImageText: "Made By Conflicted",
  instance: true,
});
console.clear()
ask()
});
});
}

ask()
