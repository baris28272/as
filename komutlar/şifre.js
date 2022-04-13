module.exports = {
name:"şifre",
code:`
$dm[$authorID]
**$randomString[6] İşte Zor Şifreniz**
$channelSendMessage[$channelID;**$customEmoji[emoji_70] Şifreniz Dm inize gönderildi**]
$color[1;F1372]
$onlyIf[$isUserDMEnabled[$authorID]!=false;**Dm gönderme başarısız, Lütfen DM'lerini aç**]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`
  }