module.exports = {
  name: "id-sorgu",
  code: ` 
$color[1;RANDOM]  
$author[1;ID Sorgu;$userAvatar[$authorID]] 
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;**<@$authorID>, ID rakamlardan oluşurmalıdır!**] 
$description[1;
$addField[1;**🔎 | Sorgulayan Kullanıcı:**;\`$userTag[$authorID]\` | <@$authorID>]
$addField[1;:calendar_spiral: | Hesap kuruluş tarihi : ;\`$replaceText[$replaceText[$creationDate[$noMentionMessage[1];date];AM; ;1];PM; ;1]\`]
$addField[1;:bust_in_silhouette: | Bulunan kullanıcı : ; 
\`$userTag[$noMentionMessage[1]]\`]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
