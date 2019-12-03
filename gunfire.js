/*e.g.
sh play_gunfire.sh /gh_token= /gh_url=https://api.github.com/repos/partnernetsoftware/auto_alpine_glibc/contents/gunfirebin.js
*/
const argv2o = a => (a || require('process').argv || []).reduce((r, e) => ((m = e.match(/^(\/|--?)([\w-]*)="?(.*)"?$/)) && (r[m[2]] = m[3]), r), {}), p4web = require('p4web'), wrapeval = require('wrapeval'), Gun = require('gun')
	,argo = argv2o()
	,{gh_token,gh_url} = argo
;

//console.log({gh_token,gh_url});

var web = p4web({cookie_pack:'play_gunfire'});
var {web1_p,s2o} = web;

var gh = ({url,post_o,method,gh_token}={}) => web1_p({
	headers:{ 'Content-Type': 'application/json',
		Authorization: gh_token ? `token ${gh_token}` : null,
		Accept:'application/vnd.github.v3.raw'}, url, method,
	'Accept-Encoding':'deflate'
}, post_o).then((r=>s2o(r.body)||r.body||r))

gh({url:gh_url,gh_token}).then(o=>wrapeval(o,{
	console, web, Gun
},false))
