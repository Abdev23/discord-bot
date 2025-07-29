
import playAudioFile from '../utils/playAudio.js';


export default {
  name: 'ghewet',
  description: 'Plays a sound in the user\'s voice channel.',
  execute(message) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply('You need to be in a voice channel to use this command!');
    }

    playAudioFile(voiceChannel, './assets/waaa3.mp4');
  },
};