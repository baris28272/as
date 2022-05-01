module.exports = {
name:"top",
code:`
$author[$userTag;$authorAvatar]
$color[1;RANDOM]
$description[1**➥ Kız Kayıt Sıralaması**
$userLeaderboard[$guildID;kadın;asc;{top} - {username} - {value}]
**➥ Erkek Kayıt Sıralaması**
$userLeaderboard[$guildID;erkekk;asc;{top} - {username} - {value}]]
$onlyForRoles[$getServerVar[kayıtyetkili];{newEmbed:{author:$userTag;$authorAvatar}{description:**$customEmoji[emoji_999] <@$authorID> Bu Komutu Sadece <@&$getServerVar[kayıtyetkili]>  Rolü Olan Kullanabilir}{color:RANDOM}}]
`}