module.exports = {
  name: "yaş-hesapla",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]] 
$title[1;Yaş Hesaplama İşlemi]
$description[1;<@$authorID>, sen $sub[$year;$message[1]] yaşındasın.]
$footer[1;$username[$authorID]]
$suppressErrors[1;{description:<@$authorID>, doğum yılını yaz.}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premiumx;$authorID]==Var;**$customEmoji[emoji_71] | Bu komutu kullanmak için premium avantajlarına sahip olman gerekiyor.**] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
`,
}