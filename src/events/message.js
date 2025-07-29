
import { Events } from 'discord.js';


const prefix = '!';

export default {
  name: Events.MessageCreate,
  once: false,
  execute(message, client) {
    console.log(`${message.author.tag} in #${message.channel.name} said: ${message.content}`);

    if (message.author.bot || !message.content.startsWith(prefix)) {
      return
    };

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!command) {
      return
    };

    try {
      command.execute(message, args);
    }
    catch (error) {
      console.error(`Error executing command ${commandName}:`, error);
      message.reply('There was an error trying to execute that command!');
    }
  },
};