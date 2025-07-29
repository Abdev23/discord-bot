
import { Events } from 'discord.js';
import playAudioFile from '../utils/playAudio.js';


export default {
  name: Events.VoiceStateUpdate,
  once: false,
  execute(oldState, newState) {
    if (newState.member.user.bot) {
      return
    };

    if (!oldState.channel && newState.channel) {
      console.log(`${newState.member.user.tag} joined voice channel ${newState.channel.name}.`);
    }

    try {
      playAudioFile(newState.channel, './assets/haha.mp4');
    }
    catch (error) {
      console.error('An error occurred during the voiceStateUpdate event:', error);
    }  
  },
};