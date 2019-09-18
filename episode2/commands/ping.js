module.exports.run = async (client, message, args) => {
  
  
  let ping = `My ping is ${client.ping}ms.`
  
  message.channel.send(ping);
  
  
}
