
export default {
  name: 'end_g',
  description: 'Force-ends the current game.',
  execute(message) {
    const game = message.client.game;

    if (!game.isActive) {
      return message.reply('No game is currently active.');
    }

    game.reset();
    message.reply('The game has been manually ended.');
  }
};