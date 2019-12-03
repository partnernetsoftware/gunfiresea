var Gun = require('gun');
require('gun/lib/time');//applly time plugin
var gun = Gun({
	peers:[
		'https://103.113.156.153/gun',
		'https://103.113.156.189/gun',
		'https://hkpns.uchat.im/gun',
		'http://47.91.217.163/gun',
		'http://47.91.217.163:8765/gun',
	]
});

let gunfiresea = gun.get('gunfiresea');

gunfiresea.time((data, key, time)=>{//listen setup
	gun.get(data['#']).once((d,id)=>console.log(d));
},1);
