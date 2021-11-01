require("dotenv").config()
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "v";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

client.on("messageCreate", (msg) => {
  let args = msg.content.substring(prefix.length).split(" ");
  if (msg.content == "kyubi") {
    msg.channel.send("Amam is sussy baka everyone knows")
  }
  if (msg.content == "gay") {
    msg.channel.send("no u")
  }
  if (msg.content == "loli") {
    const loli = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Calling FBI ...")
      .setDescription(`${msg.author.username} u are arrested`)
      .setImage('https://c.tenor.com/goq48dvYSFYAAAAC/fbi-calling.gif')
      .setFooter(`Caught in 4k!`)
      .setTimestamp()
    msg.channel.send({ embeds: [loli] });
  }
  switch (args[0]) {
    case "ping":
      msg.channel.send(
        `Your Ping is ${(Date.now() - msg.createdTimestamp)}ms, BotBot's Ping is ${Math.round(client.ws.ping)}ms.`
      );
      break
    case "clear":
      if (!args[1]) msg.reply("Enter number of message u wanna delete u jerk !!");
      msg.channel.bulkDelete(args[1]);
      msg.channel.send(`cleared ${args[1]} messages`)
      break
    case "slap":
      const slap = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("You gave a slap !")
        .setDescription(`${msg.author.username} slaps ${args[1]}`)
        .setImage('https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif')
        .setFooter(`Well Enjoy !!`)
        .setTimestamp()
      msg.channel.send({ embeds: [slap] });
      break
    case "gm":
      const gm = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Good morning baka !")
        .setDescription(`${msg.author.username} says gm to ${args[1]}`)
        .setImage('https://thumbs.gfycat.com/UnknownDevotedCommongonolek-size_restricted.gif')
        .setFooter(`Have a nice day !!`)
        .setTimestamp()
      msg.channel.send({ embeds: [gm] });
      break
    case "gn":
      const gn = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Good night kids !")
        .setDescription(`${msg.author.username} says gn to ${args[1]}`)
        .setImage('https://c.tenor.com/VuDFvHzmtPEAAAAd/kanna-sleep.gif')
        .setFooter(`Sweet dreams brat !!`)
        .setTimestamp()
      msg.channel.send({ embeds: [gn] });
      break
    case "calc":
      msg.channel.send(`${eval(args[1])}`)
      break
    case "copium":
      const copium = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`lol ${args[1]} is breathing copium`)
        .setImage('https://c.tenor.com/1O7jju384zgAAAAC/copium-attack-on-titan.gif')
        .setFooter(`Better luck next time!`)
        .setTimestamp()
      msg.channel.send({ embeds: [copium] });
      break
  }
});

client.login(process.env.TOKEN);
