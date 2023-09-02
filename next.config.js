const withPWA = require('next-pwa')({
  dest: 'public',
  reloadOnOnline: false,
})

module.exports = withPWA()
