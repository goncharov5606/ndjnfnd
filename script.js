var mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth')
var bot = mineflayer.createBot({
  host: 'mc.prostocraft.ru',
  port: 25565,
  username: '_NeGonchar',
  version: false,
  plugins: [AutoAuth],
  AutoAuth: '893893'
});

bot.on('serverAuth', function() {
  
});
