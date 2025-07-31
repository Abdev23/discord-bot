
export default {
  name: 'reveal',
  description: 'Ends the game and reveals who the spy and location were.',
  execute(message) {
    const game = message.client.game;

    if (!game.isActive) {
      return message.reply('No game is currently active.');
    }

    message.reply(`The game has ended! The spy was **<@${game.spy.id}>** and the location was **${game.location}**.`);
    
    game.reset();
  }
};