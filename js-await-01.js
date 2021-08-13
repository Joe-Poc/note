async function poc_await(){
	
	setTimeOutFun_0().then( res => console.log("THEN-->", res));
	console.log("after setTimeOutFun_0 ===>");
	
	const res = await setTimeOutFun_0();
	console.log(res);
	console.log("after setTimeOutFun_0");

}

async function setTimeOutFun_0(){
	setTimeout(()=>{
		console.log("set-time-out-0");
		return 0;
	}, 2*1000);
}

poc_await().catch(err => console.log(err))