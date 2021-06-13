const Discord = require('discord.js');
const client = new Discord.Client();
// folder for varialbes
// npm install dotenv --save
require('dotenv').config();

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const prefix = '=';

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
        client.commands.get('ping').execute(message, args);
    }
})

// this line needs to be last to complete login process
client.login(process.env.TOKEN);
