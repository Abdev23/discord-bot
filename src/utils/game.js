
// possible locations
const LOCATIONS = [
    "Airplane", "Bank", "Beach", "Casino", "Church", "Hospital",
    "Hotel", "Military Base", "Movie Studio", "Ocean Liner", "Restaurant",
    "School", "Space Station", "Supermarket", "Theater", "University"
];

// game class
export class Game {
  constructor() {
    this.isActive = false;
    this.players = [];
    this.spy = null;
    this.location = '';
  }

  startGame(players) {
    if (players.length < 3) {
      return {
        success: false,
        message: 'You need at least 3 players to start a game.'
      };
    }

    this.isActive = true;
    this.players = players;
    this.location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    this.spy = this.players[Math.floor(Math.random() * this.players.length)];
    
    return {
      success: true,
      message: 'Game started!'
    };
  }

  reset() {
    this.isActive = false;
    this.players = [];
    this.spy = null;
    this.location = '';
  }
}