module.exports = {
  name: "karaliste",
  $if:"v4",
  code: ` 
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[emoji_70]・\`$userTag[$authorID]\` 
$onlyForIDs[$botOwnerID;728155399655784488;Bu komut için yeterli yetkin yok] 

`

};

