
telegramBot = require('node-telegram-bot-api');

var token = '';

var bot = new telegramBot(token, { polling: true });

bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  
  if(msg.text=='/start')
  {
    bot.sendMessage(chatId,"Welcome");
  }
  else if(/[a-zA-Z0-9]/g.test(msg.text))
  {
    bot.sendMessage(chatId,"Shut Up 😋😌");
  }
});
