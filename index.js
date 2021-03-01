//We are going to require discord.js
const Discord = require('discord.js');
//now we need to require/make a client
const client = new Discord.Client();
//now lets make it so the bot tells to the console when he is ready!
client.once('ready', () => {
//ok now we need to let him send it to the console!
    console.log('Ready!')
});
//almost done!
//now lets make him login!
client.login('token here')
//P.S quick reminder DONT give anyone the token its your bot his password
