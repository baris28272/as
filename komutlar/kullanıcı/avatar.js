module.exports = {
name: "avatar",
code: `
$color[1;RANDOM]
$author[1;$username#$discriminator[$mentioned[1;yes]];$authorAvatar]
$image[1;$userAvatar[$mentioned[1;yes]]]
`
}      
