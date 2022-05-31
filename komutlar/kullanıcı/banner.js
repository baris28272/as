module.exports = {
name: "banner",
code: `
$color[1;RANDOM]
$author[1;$username#$discriminator[$mentioned[1;yes]];$authorAvatar]
$image[1;$getUserBanner[$mentioned[1;yes]]]
`
}      
