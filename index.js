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
  client.user.setActivity("Playing with Loli", { type: "PLAYING" });
});

client.on("messageCreate", async (msg) => {
  let args = msg.content.substring(prefix.length).split(" ");
  if (msg.content == "aman") {
    msg.channel.send("Aman/Loli is sussy baka/gay everyone knows");
  }
  if (msg.content == "gay") {
    msg.channel.send("no u");
  }
  // if (msg.content == "xiangling") {
  //   msg.channel.send(912359253514264646);
  // }
  912359253514264646;
  if (msg.content == "vibing") {
    msg.channel.send("https://c.tenor.com/YE0J1dQlSjcAAAAC/dance-anime.gif");
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
      if (!args[1]) {
        msg.reply("Enter number of message u wanna delete u jerk !!");
      } else if (args[1] >= 100) {
        msg.reply("Fuck you don't delete more than 99 messages !!");
      } else {
        msg.channel.bulkDelete(args[1]);
        msg.channel.send(`cleared ${args[1]} messages`);
      }
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
            .setTitle(element.title)
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
      if (msg.channel.nsfw) {
        const h = await api.random(true);
        msg.channel.send(h.url);
      } else {
        msg.reply("Go to nsfw channel u perv !!");
      }
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
      const mentionedUser = msg.mentions.users.first() || msg.author;
      const pfp = new MessageEmbed()
        .setColor("#ff3333")
        .setTitle(`${mentionedUser.username}'s profile image`)
        .setImage(mentionedUser.displayAvatarURL({ format: "png", size: 2048 }))
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
    case "ran":
      try {
        const response = await fetch(`https://api.waifu.pics/sfw/${args[1]}`);
        const data = await response.json();
        const random = new MessageEmbed()
          .setColor("#0099ff")
          .setDescription(
            `${msg.author.username} = ${args[1]}  ${args[2] ? args[2] : " "}`
          )
          .setImage(data.url)
          .setTimestamp();
        msg.channel.send({ embeds: [random] });
      } catch (error) {
        msg.channel.send("Oops, there was an error fetching the API");
      }
      break;
    case "genshin":
      if (!args[2]) {
        msg.channel.send(
          `https://genshin.honeyhunterworld.com/db/${args[1]}/?lang=EN`
        );
      } else {
        msg.channel.send(
          `https://genshin.honeyhunterworld.com/db/${args[1]}/${args[2]}/?lang=EN`
        );
      }
      break;
    case "km":
      msg.channel.send(`https://keqingmains.com/${args[1]}/`);
      break;
    case "say":
      //745942944552583210 = chill area
      if (msg.author.bot) return;
      msg.delete();
      const SayMessage = msg.content.slice(5).trim();
      msg.channel.send(`${msg.author.username} says, ${SayMessage}`);
      break;
    case "define":
      try {
        const meaning = await fetch(
          `http://api.urbandictionary.com/v0/define?term=${args[1]}`
        );
        const data = await meaning.json();
        const mean = new MessageEmbed()
          .setColor("#0099ff")
          .setTitle(`Definition of ${args[1]}`)
          .setDescription(data.list[args[2] ? args[2] : 0].definition)
          .setFooter(`Author : ${data.list[args[2] ? args[2] : 0].author}`)
          .setTimestamp();
        msg.channel.send({ embeds: [mean] });
      } catch (error) {
        msg.channel.send("idk just google it xd");
      }
      break;
    case "quote":
      try {
        const quotes = await fetch(`https://animechan.vercel.app/api/random`);
        const data = await quotes.json();
        const quote = new MessageEmbed()
          .setColor("#0099ff")
          .setTitle(`Anime : ${data.anime}`)
          .setDescription(data.quote)
          .setFooter(`Character : ${data.character}`)
          .setTimestamp();
        msg.channel.send({ embeds: [quote] });
      } catch (error) {
        msg.channel.send("No quote available right now !!");
      }
      break;
    case "waifu":
      try {
        const response = await fetch(
          `https://api.waifu.pics/sfw/${args[1] ? args[1] : "waifu"}`
        );
        const data = await response.json();
        if (data.message == "Not Found") {
          msg.channel.send("Not found");
        } else {
          const random = new MessageEmbed()
            .setColor("#0099ff")
            .setImage(data.url)
            .setTimestamp();
          msg.channel.send({ embeds: [random] });
        }
      } catch (error) {
        msg.channel.send("Sorry no waifu for pervert like you !!");
      }

      break;
    case "nsfw":
      if (msg.channel.nsfw) {
        try {
          const response = await fetch(
            `https://api.waifu.pics/nsfw/${args[1] ? args[1] : "waifu"}`
          );
          const data = await response.json();
          if (data.message == "Not Found") {
            msg.channel.send("Not found");
          } else {
            const random = new MessageEmbed()
              .setColor("#0099ff")
              .setImage(data.url)
              .setTimestamp();
            msg.channel.send({ embeds: [random] });
          }
        } catch (error) {
          msg.channel.send("Sorry no waifu for pervert like you !!");
        }
      } else {
        msg.reply("Go to nsfw channel u perv !!");
      }
      break;
    //https://api.waifu.pics/sfw/waifu
    case "random":
      try {
        const response = await fetch(`https://nekos.best/api/v1/${args[1]}`);
        const data = await response.json();
        const random = new MessageEmbed()
          .setColor("#0099ff")
          .setImage(data.url)
          .setFooter(data.anime_name)
          .setTimestamp();
        msg.channel.send({ embeds: [random] });
      } catch (error) {
        msg.channel.send("Sorry no waifu for pervert like you !!");
      }
      break;
    //https://nekos.best/api/v1/smile
    case "profile":
      const profileUser = msg.mentions.users.first() || msg.author;
      // const profileUser =  msg.guild.members(msg.mentions.users.first() || msg.guild.members.get(args[0]))
      const profile = new MessageEmbed()
        .setColor("#ff3333")
        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
        .setTitle(`${profileUser.username}'s profile`)
        .setThumbnail(profileUser.displayAvatarURL())
        .addFields(
          {
            name: "Joined Discord on",
            value: profileUser.createdAt.toDateString(),
          },
          {
            name: "Username",
            value : profileUser.username,
          }
        )
        .setTimestamp();
      msg.channel.send({ embeds: [profile] });
      break;
      //https://covid-api.mmediagroup.fr/v1/cases?country=India
      case "covid":
      try {
        const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${args[1]} ${args[2] ? args[2] : " "} ${args[3] ? args[3] : " "}` );
        const data = await response.json();
        const covid = new MessageEmbed()
          .setColor("#0099ff")
          .setTitle(`Covid cases in ${args[1]}`)
          
          .setDescription(`Total conformed cases : ${data.All.confirmed} | Total Deaths : ${data.All.deaths}`)
          .setTimestamp();
        msg.channel.send({ embeds: [covid] });
      } catch (error) {
        msg.channel.send(error);
      }
      break;
  }
});

client.login(process.env.TOKEN);
