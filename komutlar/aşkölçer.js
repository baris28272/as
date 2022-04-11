module.exports = {
  name: "aşk-ölçer",
  aliases: "aşk-ölçer",
  code: `
$onlyIf[$mentioned[1]!=;**❎ • Birini Etiketle.**]
$title[1;♥️ • Aşkınız \`%$random[1;100]\` Çıktı.]
$image[1;https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1]];webp;png;-1];jpg;png;-1];gif;png;-1]]
$color[1;RANDOM]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`

};

