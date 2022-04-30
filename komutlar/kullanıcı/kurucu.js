module.exports = {
  name: "kurucu",
  code: `
$color[1;FF0000]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**\`$serverName\` adlı sunucunun sahibi  \`$userTag[$ownerID]\` adlı kullanıcıdır**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`
  
};

