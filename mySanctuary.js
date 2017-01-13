module.exports = {
	a: function(){
			console.log("Welcome to my house please turn around.");
			return function(){
				console.log(doNotDisturb());
				//doNotDisturb();
			}
	}
};

function doNotDisturb(){
	return "I said \" Do not disturb !\" ";
}
