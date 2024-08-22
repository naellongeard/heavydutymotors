const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot
const token = 'MTI2NzA1OTMwNjQwMzIwMTAyNQ.GTQGzY.w4PAHLiK1MvElLFQEp9Z8YoTzRcr_76isSMjb0';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(token);