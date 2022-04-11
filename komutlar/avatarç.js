module.exports = {
  name: "avatar",
  code: `
$description[1;[Avatar Linki]($userAvatar[$mentioned[1;yes]])]
$image[1;$userAvatar[$mentioned[1;yes]]]
$footer[1;$userTag tarafından istendi.]
$color[1;BLACK]
$suppressErrors
`,
};
