module.exports = {
name:"meslek-seç doktor",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70] <@$authorID> Başarıyla Doktor Oldun**]
$setGlobalUserVar[meslek;Doktor;$authorID]
$setGlobalUserVar[maaş;25000;$authorID]
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];150000];$authorID]
$onlyIf[$getGlobalUserVar[para;$authorID]>150000;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> cüzdanında yeterli miktarda para yok.**}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[meslek;$authorID]!=Bulunmuyor;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> Zaten Mesleğin Var İstifa Etmek İçin \`?istifa-et\` Yazmalısın**}{color:RANDOM}}]
$argsCheck[1;{newEmbed:{description:**$customEmoji[emoji_71] <@$authorID> Komutu Kullanmak İçin \`?meslek-seç polis/doktor/aşcı/gazeteci\` Yazmalısın**}{color:RANDOM}}]

`
  }