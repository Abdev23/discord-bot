
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus
} from '@discordjs/voice';


function playAudioFile(voiceChannel, audioFilePath) {
  try {
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false
    });

    const player = createAudioPlayer();
    const resource = createAudioResource(audioFilePath);

    player.play(resource);
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => {
      connection.destroy()
    });

    player.on('error', error => {
      console.error(`Error playing ${audioFilePath}: ${error.message}`);
      connection.destroy();
    });
  }
  catch (error) {
    console.error(`An error occurred in playAudioFile: ${error}`);
  }
}


export default playAudioFile;