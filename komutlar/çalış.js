module.exports = {
  name: "çalış",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]
$description[1;
**💸・\`$userTag[$authorID]\` Çalıştın Ve $random[500;3000] Para Kazandın.**
]
$cooldown[1m;]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[500;3000]];$authorID]
$footer[1;Bu Komutu,$username Tarafından Kullanıldı;$userAvatar[$authorID]] 


`,
};
