module.exports = {
name:"meslek-seç",
$if:"v4",
code:`
$if[$message[1]==]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_71] <@$authorID> Komutu Kullanmak İçin \`?meslek-seç Polis/Doktor/Aşcı/Gazeteci\` Yazmalısın**]
$if[$toLowercase[$message]==Polis]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Polis Oldun**]
$setGlobalUserVar[meslek;Polis;$authorID]
$setGlobalUserVar[maaş;20000;$authorID]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];200000];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>200000;**<@$authorID>, cüzdanında yeterli miktarda para yok.**]

`
  }