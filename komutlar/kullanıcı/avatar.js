module.exports = {
name: "avatar",
code: `
$color[1;RANDOM]
$author[1;$username#$discriminator[$authorID];$authorAvatar]
$image[1;$userAvatar[$authorID]]
`
}      
