module.exports = {
  name: "force-ban",
  code: `
  $ban[$message[1];$guildID;1;$message[2]]
  $author[1;$userTag[$authorID];$userAvatar[$authorID]]
  $thumbnail[1;$userAvatar[$message[1]]]
  $description[1;**
  $customEmoji[emoji99] \`$userTag[$message[1]]\` **İsimli Kullanıcı \`$message[2]\` Sebebinden Başarıyla Banlandı ^^**]
  $footer[1;Kullanıcı ID'si : $message[1];$userAvatar[$message[1]]]
  $onlyPerms[ban;{newEmbed:{description:<:emoji_71:917309220687314966> | \`$userTag[$authorID]\` Bunu Kullanmak İçin \`Üyeleri Banla İznin\` Olmalı}{color:RANDOM}}]
   $suppressErrors[1;{newEmbed:{author:$userTag:$authorAvatar}{description:<:emoji_71:917309220687314966> | Bir Kullanıcı ID'si Girmelisin Dostum}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[bakımsistemi]!=Açık;{newEmbed:{author:$userTag:$userAvatar[$authorID]}{description:**$customEmoji[emoji_999] <@$authorID> Bot Şuan Bakımdadır Lütfen Geliştiricim Bakımdan Çıkarana kadar Bekleyiniz.**}{color:RANDOM}}] 
   `,
}