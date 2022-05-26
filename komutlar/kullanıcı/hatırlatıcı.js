module.exports = {
  name: "hatırlatıcı-oluştur",
  code: `$sendDM[{newEmbed:{description:**$customEmoji[tatlimisir] | <@$authorID>, $replaceText[$replaceText[$replaceText[$message[1];s; saniye];m; dakika];h; saat] önce ayarladığınız hatırlatma mesajınız - "$messageSlice[1]"**}{color:BLUE}};$authorID;no]
$wait[$message[1]]
$sendMessage[{newEmbed:{description:**$customEmoji[emoji_70] | <@$authorID>, hatırlatma mesajınız başarıyla ayarlandı mesajınızı $replaceText[$replaceText[$replaceText[$message[1];s; saniye];m; dakika];h; saat] sonra size dm'den ulaştıracağım**}{color:BLUE}};no]
$suppressErrors
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 



`,
};
