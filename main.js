const Discord = require('discord.js');
const client = new Discord.Client();
// folder for varialbes
// npm install dotenv --save
require('dotenv').config();

const prefix = '-';

client.once('ready', () => {
    console.log('TikTak is online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    }
    else if(command === 'youtube') {
        message.channel.send('https://www.youtube.com');
    }
})

// this line needs to be last to complete login process
client.login(process.env.TOKEN);
