

/*
===========
DISCORD BOT
===========
*/

import 'dotenv/config';
import { Client, Events, GatewayIntentBits, ActivityType } from 'discord.js';

import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus
} from '@discordjs/voice';


const prefix = '!';
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ],
});

// BOT event
client.once(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as : ${readyClient.user?.tag}`);

  client.user.setPresence({
    activities: [{
      name: "!hder and !ghewet",
      type: ActivityType.Listening
    }],
    status: 'online'
  });
});

// USER event
client.on(Events.MessageCreate, async (message) => {
  console.log(`${message.author.tag} said : ${message.content}`);

  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // --- PING COMMAND ---
  if (command === 'hder') {
    message.reply('WAAAAAAAAAAAAAAA3');
  }

  // --- SOUND COMMAND ---
  if (command === 'ghewet') {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.reply('You need to be in a voice channel to use this command!');
    }

    try {
      const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        selfDeaf: false
      });

      const player = createAudioPlayer();
      const resource = createAudioResource('./assets/waaa3.mp4');

      player.play(resource);
      connection.subscribe(player);

      player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy();
      });

      player.on('error', error => {
        console.error(`Error: ${error.message} with resource`);
        connection.destroy();
      });

    }
    catch (error) {
      console.error(error);
      message.reply('There was an error trying to play the sound!');
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);