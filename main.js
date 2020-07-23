var fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

var data = fs.readFileSync('discordToken.txt', 'utf8');
var bitcoinPriceUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
var dogPicUrl = 'https://random.dog/woof.json'

client.on('message', message => {
	if (message.content === '!dog') {
        request(dogPicUrl, function (error, response, body) {
            var dogPic = body;
            const dogObj = JSON.parse(dogPic);
            message.channel.send(dogObj.url);
        });
    }
});
client.login(data);
