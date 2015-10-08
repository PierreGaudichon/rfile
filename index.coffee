fs = require "fs"
Promise = require "promise"



module.exports = (pth) -> new Promise (resolve, reject) ->
	fs.readFile pth, "utf8", (err, str) ->
		reject err if err
		resolve str
