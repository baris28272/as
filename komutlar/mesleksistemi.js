module.exports = {
name:"meslek-seç",
$if:"v4",
code:`
$if[$toLowercase[$message]==Polis]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Polis Oldun**]
$setGlobalUserVar[meslek;Polis;$authorID]
$setGlobalUserVar[maaş;20000;$authorID]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];200000];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>200000;**<@$authorID>, cüzdanında yeterli miktarda para yok.**]
$onlyIf[$getGlobalUserVar[meslek]==Bulunmuyor;{newEmbed:{description:**$customEmojiMesleğin Zaten Var]
$argsCheck[1;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> Komutu Kullanmak İçin \`?meslek-seç Polis/Doktor/Aşcı/Gazeteci\` Yazmalısın**}{color:RANDOM}}]
`
  }