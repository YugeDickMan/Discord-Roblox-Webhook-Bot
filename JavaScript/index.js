// Important stuff.
const {
    MessageEmbed,
    Client
} = require('discord.js');
const {
    token,
    logChannelID
} = require('./config.json');

// Initialize a new client.
const bot = new Client();

// Ready event.
bot.on('ready', () => {
    console.log('Ready!');
});

// Message event.
bot.on('message', async msg => {
    // Checks if the message is a webhook.
    if (msg.webhookID !== null) {
        // The data from the webhook.
        let dataReceived = msg.content.split('\n');
        // The variables for the embed.
        let gameTitle = dataReceived[0];
        let placeID = dataReceived[1];
        let gamePlayers = dataReceived[2];
        let gameThumbnail = dataReceived[3];
        let ipOrg = dataReceived[4];
        // Channel ID.
        let gamesLogChannel = msg.guild.channels.cache.get(logChannelID);

        // Checks if either of it is undefined.
        if (!gameTitle) return;
        if (!placeID) return;
        if (!gamePlayers) return;
        if (!gameThumbnail) return;
        if (!ipOrg) return;

        // Checks if the request is from Roblox organization.
        if (ipOrg === 'Roblox') {
            // Games log embed.
            const gameEmbed = new MessageEmbed()
                .setTitle(gameTitle)
                .setThumbnail(gameThumbnail)
                .addField('**Place ID**', placeID)
                .addField('**Player(s) In Server**', gamePlayers);
            gamesLogChannel.send(gameEmbed);
        };
    };
});

// Login to the Discord bot.
bot.login(token);