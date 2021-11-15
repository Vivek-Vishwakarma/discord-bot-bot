require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const { NHentai } = require("nhentai.js-api");
const api = new NHentai();

const fetch = require("node-fetch");
const prefix = "v";
const slaps = [
  "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif",
  "https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif",
  "https://i.imgur.com/fm49srQ.gif",
  "https://c.tenor.com/PeJyQRCSHHkAAAAC/saki-saki-mukai-naoya.gif",
];
const bonks = [
  "https://c.tenor.com/SagUV4yLAfUAAAAd/bonk-anime.gif",
  "https://i.gifer.com/origin/d7/d77de33d229370f023a24ca6e4cf6079.gif",
  "https://i.imgur.com/t1a9akh.gif",
  "https://i.redd.it/wigx0n2dkve11.gif",
  "https://c.tenor.com/o5rgSZSPZVwAAAAd/jujutsu-kaisen-bonk.gif",
];
const gms = [
  "https://c.tenor.com/pMnESetQE3EAAAAC/ugh-yawn.gif",
  "https://thumbs.gfycat.com/UnknownDevotedCommongonolek-size_restricted.gif",
  "https://c.tenor.com/BIsCQ21cOK4AAAAC/konosuba-good-morning.gif",
  "https://i.pinimg.com/originals/ac/65/71/ac657196b350449b1b3fd2ee608889d5.gif",
];
const gns = [
  "https://acegif.com/wp-content/gif/anime-sleep-52.gif",
  "https://c.tenor.com/0WU4kckmSfsAAAAC/anime-animu.gif",
  "https://i.kym-cdn.com/photos/images/newsfeed/000/785/973/16c.gif",
  "https://c.tenor.com/UN3g4U2PeUcAAAAC/bed-sleep.gif",
];

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

client.on("messageCreate", async (msg) => {
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
        .setTitle("You bonked a horny guy !")
        .setDescription(`${msg.author.username} bonked ${args[1]}`)
        .setImage(bonks[Math.floor(Math.random() * 5)])
        .setFooter(`Go to horny jail !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [bonk] });
      break;
    case "meme":
      try {
        const response = await fetch(`https://meme-api.herokuapp.com/gimme/1`);
        const data = await response.json();
        data.memes.forEach((element) => {
          const meme = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Here is your meme")
            .setImage(element.url)
            .setFooter(`Now laugh`)
            .setTimestamp();
          msg.channel.send({ embeds: [meme] });
        });
      } catch (error) {
        msg.channel.send("Oops, there was an error fetching the API");
      }
      break;
    case "calc":
      msg.channel.send(`${eval(args[1])}`);
      break;
    case "hentai":
      const h = await api.random(true);
      msg.channel.send(h.url);
      break;
    case "copium":
      const copium = new MessageEmbed()
        .setColor("#0099ff")
        .setDescription(
          `lol ${args[1]} is breathing copium, May gacha god bless u`
        )
        .setImage("https://c.tenor.com/Oe47zgo1FOEAAAAC/copium-luffy.gif")
        .setFooter(`Better luck next time!`)
        .setTimestamp();
      msg.channel.send({ embeds: [copium] });
      break;
    case "pfp":
      const pfp = new MessageEmbed()
        .setColor("#ff3333")
        .setImage(msg.member.displayAvatarURL())
        .setTimestamp();
      msg.channel.send({ embeds: [pfp] });
      break;
    case "scam":
      const scam = new MessageEmbed()
        .setColor("#0099ff")
        .setDescription(`${args[1]} stop scamming !!`)
        .setImage(
          "https://c.tenor.com/PDrJtkWQjmcAAAAC/scam-is-this-a-scam.gif"
        )
        .setFooter(`stfu scammer !!`)
        .setTimestamp();
      msg.channel.send({ embeds: [scam] });
      break;
    case "random":
      try {
        const response = await fetch(`https://nekos.best/api/v1/${args[1]}`);
        const data = await response.json();
        const random = new MessageEmbed()
          .setColor("#0099ff")
          .setDescription(`${msg.author.username} = ${args[1]}`)
          .setImage(data.url)
          .setTimestamp();
        msg.channel.send({ embeds: [random] });
      } catch (error) {
        msg.channel.send("Oops, there was an error fetching the API");
      }
      break;
  }
});

client.login(process.env.TOKEN);
