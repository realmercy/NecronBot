module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    client.user.setPresence({
      activities: [
        { name: "", 
        type: "" }, //can be set to PLAYING, STREAMING, LISTENING, WATCHING or COMPETITING 
      ],
    });
    console.log(`${client.user.tag} is ready!`);
  },
};
