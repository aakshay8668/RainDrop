require("cypress-xpath")
require('cypress-downloadfile/lib/downloadFileCommand')

const customCommands = require('./commands.js')

module.exports = {
  commands: customCommands
}