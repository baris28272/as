module.exports = {
  name: "snipe",
  code: ` $author[1;$serverName;$serverIcon]
  $addField[1;**<:url:945816835452968990>・Mesaj**;\`$getServerVar[snipe3]\`] 
  $addField[1;**<:kanal:955766345729998869>・Kanal**;<#$getServerVar[snipe2]> - \`($getServerVar[snipe2])\`] 
  $addField[1;**<:members:955766783191695360>・Kullanıcı**;<@$getServerVar[snipe1]> - \`($getServerVar[snipe1])\`] 
  $color[1;010307]
  $onlyIf[$getServerVar[snipe3]!=;**$customEmoji[emoji_71] | Snipe'lanıcak mesaj yok**]
  $thumbnail[1;$userAvatar[$authorID]]
  $footer[1;Bu Komut $userTag Tarafından Kullanıldı;$userAvatar[$authorID]] 
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 

`,
};
