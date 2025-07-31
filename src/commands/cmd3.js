
export default {
  name: 'start_g',
  description: 'Starts a game with people in your voice channel.',
  async execute(message) {
    const game = message.client.game;

    if (!message.member.voice.channel) {
      return message.reply('You need to be in a voice channel to start the game!');
    }
    if (game.isActive) {
      return message.reply('A game is already in progress! Use `>reveal` or `>end_g` to stop it.');
    }

    const voiceChannel = message.member.voice.channel;
    const players = Array.from(voiceChannel.members.values()).filter(member => !member.user.bot);
    const { success, message: statusMessage } = game.startGame(players);

    if (!success) {
      return message.reply(statusMessage);
    }

    for (const player of game.players) {
      try {
        if (player.id === game.spy.id) {
          await player.send("You are the **Spy**! Try to figure out the location without being caught.");
        }
        else {
          await player.send(`The location is: **${game.location}**. Don't let the spy figure it out!`);
        }
      }
      catch (error) {
        console.error(`Could not send DM to ${player.user.tag}.`);
        message.channel.send(`Warning: Could not send a DM to ${player.user.username}. Please enable DMs from server members.`);
      }
    }

    await message.reply(`A game of sus-game has started with ${game.players.length} players! Check your DMs for your role.`);
  }
};