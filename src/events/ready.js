
import { Events, ActivityType } from 'discord.js';


export default {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Logged in as: ${client.user.tag}`);
    client.user.setPresence({
      activities: [{
        name: '!hder and !ghewet',
        type: ActivityType.Listening
      }],
      status: 'online'
    });
  },
};