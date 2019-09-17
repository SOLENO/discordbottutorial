const Discord = require("discord.js"); 
const client = new Discord.Client();

client.on("ready", () => {
  
  const text = `Logged in as: ${client.user.tag}\nID: ${client.user.id}`
  console.log(text);
  
});

client.on("message", async (message) => {
  
  if (!message.guild || message.author.bot) return;
  let prefix = "?";
  
  // define args
  const args = message.content.slice(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();
  
  if (!message.content.startsWith(prefix)) return;
  
  // command handler
  try {
    
    let command = require(`./commands/${cmd}.js`);
    command.run(client, message, args);
    
  } catch (e) {
    
    console.log(e);
    
  }
  
})

client.login(process.env.TOKEN)
