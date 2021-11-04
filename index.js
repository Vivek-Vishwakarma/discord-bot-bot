require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "v";

const slaps = [
  "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif",
  "https://c.tenor.com/FaXcxpmU3PMAAAAC/anime-slap.gif",
  "https://i.imgur.com/fm49srQ.gif",
  "https://i.imgur.com/lYxSTLA.gif",
];
const bonks = [
  "https://c.tenor.com/CrmEU2LKix8AAAAC/anime-bonk.gif",
  "https://i.gifer.com/origin/d7/d77de33d229370f023a24ca6e4cf6079.gif",
  "https://i.imgur.com/t1a9akh.gif",
  "https://i.redd.it/wigx0n2dkve11.gif",
];
const gms = [
  "https://c.tenor.com/Jf9m50qfQZ4AAAAM/anime-tired.gif",
  "https://thumbs.gfycat.com/UnknownDevotedCommongonolek-size_restricted.gif",
  "https://c.tenor.com/BIsCQ21cOK4AAAAC/konosuba-good-morning.gif",
  "https://i.pinimg.com/originals/ac/65/71/ac657196b350449b1b3fd2ee608889d5.gif",
];
const gns = [
  "https://acegif.com/wp-content/gif/anime-sleep-52.gif",
  "https://c.tenor.com/z9aWLYIdx_IAAAAM/anime-animu.gif",
  "https://i.kym-cdn.com/photos/images/newsfeed/000/785/973/16c.gif",
  "https://c.tenor.com/juNCyZd5Ut4AAAAC/goodnight-goodnight-anime.gif",
];
const diwalis = [
  "https://www.eventstodayz.com/wp-content/uploads/2020/10/diwali-gif-animation.gif",
  "https://1.bp.blogspot.com/-yv8BW2m1rBM/XbQr1BFXASI/AAAAAAAAAzY/m6lggYCPnno0K5jp-rGQu6BJW_xwSQK-QCLcBGAsYHQ/s1600/diwali.gif"
];
client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

client.on("messageCreate", (msg) => {
  let args = msg.content.substring(prefix.length).split(" ");
  if (msg.content == "kyubi") {
    msg.channel.send("Kyubi is sussy baka/gay everyone knows");
  }
  if (msg.content == "gay") {
    msg.channel.send("no u");
  }
  if (msg.content == "loli") {
    const loli = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Calling FBI ...")
      .setDescription(`${msg.author.username} u are arrested`)
      .setImage("https://c.tenor.com/goq48dvYSFYAAAAC/fbi-calling.gif")
      .setFooter(`Caught in 4k!`)
      .setTimestamp();
    msg.channel.send({ embeds: [loli] });
  }
  switch (args[0]) {
    case "ping":
      msg.channel.send(
        `Your Ping is ${
          Date.now() - msg.createdTimestamp
        }ms, BotBot's Ping is ${Math.round(client.ws.ping)}ms.`
      );
      break;
    case "clear":
      if (!args[1])
        msg.reply("Enter number of message u wanna delete u jerk !!");
      msg.channel.bulkDelete(args[1]);
      msg.channel.send(`cleared ${args[1]} messages`);
      break;
    case "slap":
      const slap = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("You gave a slap !")
        .setDescription(`${msg.author.username} slaps ${args[1]}`)
        .setImage(slaps[Math.floor(Math.random() * 4)])
        .setFooter(`Well Enjoy !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [slap] });
      break;
    case "gm":
      const gm = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Good morning baka !")
        .setDescription(`${msg.author.username} says gm to ${args[1]}`)
        .setImage(gms[Math.floor(Math.random() * 4)])
        .setFooter(`Have a nice day !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [gm] });
      break;
    case "gn":
      const gn = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Good night kids !")
        .setDescription(`${msg.author.username} says gn to ${args[1]}`)
        .setImage(gns[Math.floor(Math.random() * 4)])
        .setFooter(`Sweet dreams brat !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [gn] });
      break;
    case "bonk":
      const bonk = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("You bonked a horny mf !")
        .setDescription(`${msg.author.username} bonked ${args[1]}`)
        .setImage(bonks[Math.floor(Math.random() * 4)])
        .setFooter(`Go to horny jail !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [bonk] });
      break;
    case "calc":
      msg.channel.send(`${eval(args[1])}`);
      break;
    case "copium":
      const copium = new MessageEmbed()
        .setColor("#0099ff")
        .setDescription(
          `lol ${args[1]} is breathing copium, May gacha god bless u`
        )
        .setImage(
          "https://c.tenor.com/1O7jju384zgAAAAC/copium-attack-on-titan.gif"
        )
        .setFooter(`Better luck next time!`)
        .setTimestamp();
      msg.channel.send({ embeds: [copium] });
      break;
    case "diwali":
      const diwali = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`Happy Diwali !!`)
        .setImage(diwalis[Math.floor(Math.random() * 2)])
        .setTimestamp();
      msg.channel.send({ embeds: [diwali] });
      break;
    case "pfp":
      const pfp = new MessageEmbed()
        .setColor("#ff3333")
        .setImage(msg.author.displayAvatarURL())
        .setTimestamp();
      msg.channel.send({ embeds: [pfp] });
      break;
  }
});

client.login(process.env.TOKEN);
