const cathy = require('cathyjs'),
      Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  
  let input = args.join(" ");
  if (!input) return message.reply("You must supply input.");
  
  message.channel.startTyping();
  var output = await cathy.startChatting(input);
  
  return message.reply(output);
  message.channel.stopTyping();
  
}
