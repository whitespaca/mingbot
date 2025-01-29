import { Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.TOKEN

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.once('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', async (message) => {
    // 봇의 메시지일 경우 무시
    if (message.author.bot) return;

    if(message.content === '!밍') {
        await message.channel.send('밍밍밍밍밍');
    }
});

client.login(token);