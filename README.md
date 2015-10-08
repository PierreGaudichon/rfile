Small wrapper for `fs.readFile`
===============================

	rfile = require "rfile"

	rfile "package.json"
		.then JSON.parse

