module.exports = {
  name: "hatırlatıcı-oluştur",
  code: `$sendDM[{newEmbed:{description:**$customEmoji[tatlimisir] | <@$authorID>, $replaceText[$replaceText[$replaceText[$message[1];s; saniye];m; dakika];h; saat] önce ayarladığınız hatırlatma mesajınız - "$messageSlice[1]"**}{color:BLUE}};$authorID;no]
$wait[$message[1]]
$sendMessage[{newEmbed:{description:**$customEmoji[emoji_70] | <@$authorID>, hatırlatma mesajınız başarıyla ayarlandı mesajınızı $replaceText[$replaceText[$replaceText[$message[1];s; saniye];m; dakika];h; saat] sonra size dm'den ulaştıracağım**}{color:BLUE}};no]
$suppressErrors
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 


`,
};
