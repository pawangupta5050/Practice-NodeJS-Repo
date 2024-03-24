const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content: 'Genereating short URL for '+ url,
        })
    }
    message.reply({
        content: "Hello, I'm a Bot how can I help you?"
    }); 
})

client.on('interactionCreate', interaction => {
    interaction.reply('pong')
})

client.login(process.env.login_token)
