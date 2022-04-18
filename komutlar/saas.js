module.exports = {
  name: "sa-as",
  code: `
$author[1;$userTag;$userAvatar[$authorID]]
$description[1;**<@$authorID> Sa-As Sistemi Aktif Duruma Getirilsinmi**]
$color[1;ffffff]
$addbutton[1;Kapat;danger;DarkLonSaAsKapat;$replaceText[$getServerVar[saas];kapalı;no];<:emoji_71:917309220687314966>]
$addbutton[1;Aç;success;DarkLonSaAsAç;$replaceText[$getServerVar[saas];açık;no];<:emoji_70:917309183341236244>]
$onlyIf[$hasPerms[$guildID;$authorID;managemessages]!=false;{newEmbed:{description::exclamation: <@$authorID> Bu Komutu Sadece **Mesajları Yönet** İznine Sahip Kişiler Kullanabilir!}{color:ff0000}}]
`
  }