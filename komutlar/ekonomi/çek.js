module.exports = {
  name: "çek",
  code: `
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$message];$authorID]
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$message];$authorID]
$onlyIf[$message>0;**<:emoji_71:917309220687314966> | $username Girdiğin Miktar 1 ve üstü olmalıdır.**]
$onlyIf[$isNumber[$message]!=false;**<:emoji_71:917309220687314966> | $username Lütfen herhangi bir sayı Gir.**]
$suppressErrors[1;**$customEmoji[emoji_71] | Çekeceğin Miktarı Yazmalısın!**]
$onlyIf[$message<=$getGlobalUserVar[banka;$authorID];**<:emoji_71:917309220687314966> | $username Bankanda Yeterli Miktarda Para Yok !**]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;**<:emoji_70:917309183341236244> | <@$authorID> Başarıyla Bankanızdan $message 💵 Para Kadar Çektiniz.**]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
$cooldown[5s;**$customEmoji[emoji_71] Bu Komutu Kullanmak İçin \`5 Saniye\` Beklemelisin.**] 

`,
};
