module.exports = {
  name: "25-miles",
  aliases: "25-miles",
  code: `
$suppressErrors[1;Bir şeler yaz en fazla 10 kelime yazabilirsin unutma.]
$color[1;ffdbfe]
$deletecommand
$image[1;https://vacefron.nl/api/water?text=$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[6]+$message[7]+$message[8]+$message[9]+$message[10]]
$footer[1;$username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
