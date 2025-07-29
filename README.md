# The Courage Bot

A fun, simple Discord bot built with Node.js and discord.js, designed for a small group of friends. It features basic text commands and interactive audio features for voice channels.

## ✨ Features

-   **Text Commands**: Simple call-and-response text commands.
-   **Soundboard Command**: Plays a specific audio file in the user's current voice channel.
-   **Automatic Welcome Sound**: Automatically joins and plays a welcome sound whenever a user joins a voice channel.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) installed on your machine (version 16.9.0 or higher is recommended).

### Installation

A step-by-step guide to get your bot running.

1.  **Clone the repository**
    ```sh
    git clone https://github.com/Abdev23/discord-bot
    cd discord-bot
    ```

2.  **Install NPM packages**
    ```sh
    npm install
    ```

3.  **Create your environment file**
    Create a file named `.env` in the root directory of the project and add your Discord bot token.

    ```env
    # .env
    DISCORD_BOT_TOKEN = YourSecretBotToken
    ```

4.  **Run the bot**
    ```sh
    node src/index.js
    ```

---

## 🤖 Bot Commands

The default prefix for all commands is `!`.

| Command  | Description                                              |
| :------- | :------------------------------------------------------- |
| `!hder`  | Replies with a witty message.                            |
| `!ghewet` | Joins your current voice channel and plays a sound clip. |

---