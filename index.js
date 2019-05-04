const client = require('discord-rich-presence')('574094643894157313');

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask() {

rl.question('Presence\'s Details? EX. Playing A Game, Learning something\nMade By Conflicted.\n> ', (answer) => {
if(!answer) return console.log('Please And Please! Specify Something!')
client.updatePresence({
  details: answer,
  state: "Custom RPC",
  largeImageKey: "profile",
  largeImageText: "Made By Conflicted",
  smallImageKey: 'smallimage',
  smallImageText: "Small Image Hover Text",
  instance: true,
});
console.clear()
ask()
});
}

ask()