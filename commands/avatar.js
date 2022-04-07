const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("get a user's or your own avatar")
    .addUserOption((option) =>
      option.setName("user").setDescription("user whose avatar you want to see")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user") || interaction.user.tag;
    const embed = new MessageEmbed()
      .setImage(`${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
      .setTimestamp()
      .setColor(`${user.hexAccentColor}`)
      .setTitle(`${user.username}'s avatar`)
      .setURL(`${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
      .setFooter(`${interaction.user.tag}`);
    return interaction.reply({ embeds: [embed] });
  },
};
