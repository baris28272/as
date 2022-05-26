module.exports = {
  name: "haftalık",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<@$authorID>,Haftalık ödülün $random[100;500] 💵**]
$setGlobalUserVar[para;$sum[$random[100;500];$getGlobalUserVar[para;$authorID]];$authorID] 
$footer[1;Bu Komut $userTag[$authorID] Tarafından Kullanıldı;$userAvatar[$authorID]
$cooldown[7d;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`7 Gün\` Beklemelisin.**] 
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 

`,
};
