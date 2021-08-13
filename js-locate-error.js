function dataLoad(){
	arrObj = [{"U":"user_01", "T": 1},{"U":"user_02", "T": 11}, {"U":"user_03", "T": 3}, {"U":"user_04", "T": 5}]
}
dataLoad();
function scriptDataLoad(){
	function init() {
		var myButton = document.getElementById("myButton");
		var myTextfield = document.getElementById("myTextfield");
	}
	arrObj = [{"U":"user_01", "T": 1},{"U":"user_02", "T": 11}, {"U":"user_03", "T": 3}, {"U":"user_04", "T": 5}]
	document.addEventListener("click", function(){
		this.clearBoard();
	});
}
function clearBoard(){
	arrObj = [{"U":"user_01", "T": 1},{"U":"user_02", "T": 11}, {"U":"user_03", "T": 3}, {"U":"user_04", "T": 5}, {"U":"user_05", "T": 10}]
	alert("Cleared");
}
function addEventListener(){
	arrObj = [{"U":"user_01", "T": 1},{"U":"user_02", "T": 11}, {"U":"user_03", "T": 3}, {"U":"user_04", "T": 5}, {"U":"user_05", "T": 10}]
	function init(){
		document.addEventListener("click", "myButton", function(){
			self.clearBoard();
		});
	}
}
function perfateDataLoad(){
	const len = "clearBoard()".length - 8;
	function init(){
		document.addEventListener("readystatechange", function(){
			self.clearBoard();
		});
	}
	var self = this;
	arrObj[len].T
	function dataLoad(){
		document.addEventListener("click", "myButton", function(){
			self.clearBoard();
		});
	}
};
function addEventListener_Listern(){
	arrObj = [{"U":"user_01", "T": 1},{"U":"user_02", "T": 11}, {"U":"user_03", "T": 3}, {"U":"user_04", "T": 5}, {"U":"user_05", "T": 10}]
	function init(){
		document.addEventListener("click", function(){
			self.clearBoard();
		});
	}
}
perfateDataLoad();
console.log(" [ DEMO-LOCATE-ERROR ][ ok ] ");