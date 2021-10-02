const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES"] });

client.login('<MY_TOKEN>')

client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;

    if (member.id === '449764465454350337') {
        if (oldPresence.status !== newPresence.status) {
            if (newPresence.status === "online" | newPresence.status === "dnd") {
                document.querySelector("status-update")[0].textContent = "Currently Online"
            } else if (newPresence.status === "offline" || newPresence.status === "idle") {
                document.querySelector("status-update")[0].textContent = "Currently Offline"
            }


        }
    }
});

