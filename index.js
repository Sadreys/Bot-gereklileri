const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
console.log("Bot artık aktif!")
  
  client.user.setActivity("Sâdreys.#5047")
});

client.login("token") //token yazan yere token girin. 
