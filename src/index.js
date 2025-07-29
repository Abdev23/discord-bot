
/*
===========
DISCORD BOT
===========
*/


import 'dotenv/config';
import { Client, Collection, GatewayIntentBits } from 'discord.js';

import cmd1 from './commands/cmd1.js';
import cmd2 from './commands/cmd2.js';
import readyEvent from './events/ready.js';
import messageEvent from './events/message.js';
import voiceEvent from './events/voice.js';


// --- GLOBAL ERROR HANDLING ---
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
process.on('uncaughtException', error => {
	console.error('Uncaught exception:', error);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

function registerHandlers(client) {
  // BOT EVENT
  client.once(readyEvent.name, (...args) => readyEvent.execute(...args, client));
  
  // USER EVENT: !commands
  client.commands = new Collection();
  client.commands.set(cmd1.name, cmd1);
  client.commands.set(cmd2.name, cmd2);
  
  // USER EVENT: voice
  client.on(messageEvent.name, (...args) => messageEvent.execute(...args, client));
  client.on(voiceEvent.name, (...args) => voiceEvent.execute(...args, client));
}

function startBot() {
  registerHandlers(client);
  // keepAlive();
  client.login(process.env.DISCORD_BOT_TOKEN);
}


startBot();