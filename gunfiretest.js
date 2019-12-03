/* e.g.
sh docker_node.sh gunfiretest /jsfile=gunfirebin.js
 */
const argv2o = a => (a || require('process').argv || []).reduce((r, e) => ((m = e.match(/^(\/|--?)([\w-]*)="?(.*)"?$/)) && (r[m[2]] = m[3]), r), {}), p4web = require('p4web'), wrapeval = require('wrapeval'), Gun = require('gun')
	,argo = argv2o()
	,{jsfile='gunfirebin.js'} = argo
;

//using time plugin
require('gun/lib/time');

//var {s2o,o2o,o2s,load_raw} = p4web({cookie_pack:'play_gunfire'});
var web = p4web({cookie_pack:'play_gunfire'});
var {web1_p,s2o,load_raw} = web;

//wrapeval(load_raw(jsfile),global)
wrapeval(load_raw(jsfile),{
	console, web, Gun
}, false)
