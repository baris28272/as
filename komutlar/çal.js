module.exports = {
name:"çal",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Şuan \`$message\` İsimli Şarkı Çalınıyor**]
$playTrack[Youtube;$message]

`
  },
{
name:"geç",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Diğer Şarkıya Geçildi**]
$skip
`
  },
  {
  name:"join",
  code:`
  $author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID>
  `
  }