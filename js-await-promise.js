async function poc_await(){
	
	setTimeOutFun_0(0).then( res => console.log("THEN-->", res));
	console.log("after setTimeOutFun_0 --> then");
	
	const res = await setTimeOutFun_0(1);
	console.log(res);
	console.log("after setTimeOutFun_0 --> await");
	
	const res2 = await setTimeOutFun_1(0.1);
	console.log(res2);
	console.log("after setTimeOutFun_1 --> promise await");
	
}

async function setTimeOutFun_0(i){
	setTimeout(()=>{
		console.log("set-time-out-",i);
	}, 2*1000)
	return i;
}

async function setTimeOutFun_1(i){
	
	return new Promise(resove =>{
		setTimeout(()=>{
			console.log("set-time-out-",i);
			resove(i) 
		}, i*1000)
	})
}

poc_await().catch(err => console.log(err))