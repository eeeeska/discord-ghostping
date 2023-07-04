const { CommandInteraction, Client, ActivityType } = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "messageDelete",
  /**
   *
   * @param {Client} msg
   */
  async execute(msg) {
    if (msg.mentions.users.size === 0) return;
    if (msg.author.bot) return;

    msg.channel.send({
      content:
        "**GHOST PING:** <@" +
        msg.author +
        "> spingował i usunął: " +
        Array.from(msg.mentions.users)[0][1].tag,
    });
  },
};
