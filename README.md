# Minecraft AFK-Bot

A professional AFK-bot for Minecraft Java and Bedrock Edition. Features:
- Connects to Java or Bedrock servers
- Auto-reconnects if kicked/disconnected
- Easy configuration

## Requirements
- Node.js 18+

## Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Configure your bot in `config.json`.
3. Run the bot:
   ```
   node index.js
   ```

## Features
- Supports both Java and Bedrock
- Auto-reconnect

## Configuration
Edit `config.json` to set your server, account, and edition.

---

This project uses [mineflayer](https://github.com/PrismarineJS/mineflayer) for Java and [bedrock-protocol](https://github.com/PrismarineJS/bedrock-protocol) for Bedrock.
