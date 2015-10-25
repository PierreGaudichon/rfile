Small wrapper for `fs.readFile`
===============================

```coffee
rfile = require "rfile"

rfile "package.json"
	.then JSON.parse

```
