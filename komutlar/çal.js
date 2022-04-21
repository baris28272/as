module.exports = {
  name: "çal",
  code: `
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Şuan \`$message\` İsimli Şarkı Çalınıyor.**]
$playTrack[Youtube;$message]
$suppressErrors

`,
}