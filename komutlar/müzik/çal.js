module.exports = {
  name: "çal",
  code: `
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Şuan \`$message\` İsimli Şarkı Çalınıyor.**]
$playTrack[youtube;$message]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**Benim olduğum ses kanalında yoksan kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$suppressErrors

`,
}