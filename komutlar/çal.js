module.exports = {
name:"çal",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Şuan \`$message[1]\` İsimli Şarkı Çalınıyor**]
$playTrack[soundcloup;$message[1]]
$joinVC[$voiceID[$authorID]] 

`
  }