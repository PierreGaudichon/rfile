rfile = require "./.."

rfile "./tests/small.txt"
	.then console.log
	.catch (err) -> throw err

