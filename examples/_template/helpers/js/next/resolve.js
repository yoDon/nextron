module.exports = function resolve(pathname) {
  if (process.env.NODE_ENV === 'production') {
    const { remote } = require('electron')
    const jetpack = require('fs-jetpack')
    return jetpack.path(remote.app.getAppPath(), pathname)
  }
  return '/' + pathname
}
