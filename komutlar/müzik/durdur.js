module.exports =  {
    name: "durdur",
    code: `
$stop
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Şarkı Durdurdum.**]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**Şarkı çalmazken kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$suppressErrors
  `,
  }