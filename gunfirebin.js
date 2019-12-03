console.log('DEBUG gunfirebin 000');
var {now,o2s} = web;
var gun = Gun({
	peers:[ 'http://47.91.217.163/gun', 'http://47.91.217.163:8765/gun', ]
});

//console.log(this);

let gunfiresea = gun.get('gunfiresea');

//gunfiresea.time((data, key, time)=>{//listen setup
//	//console.log({data,key,time});
//	gun.get(data['#']).once((d,id)=>console.log(o2s(d)));
//	//gun.get(data['#']).once((d,id)=>{
//	//	console.log(d.message);
//	//});
//},99);

console.log('DEBUG gunfirebin 010');

gunfiresea.time({type:1,time:now()});

setInterval(()=>{
	//var latest = '' + new Date();
	//gunfiresea.put({time:now(),type:99});
	gunfiresea.time({type:99,time:now()});
},1000+100*Math.random());


