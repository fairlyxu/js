function CaluModel(){
	this.optnum1 = 0 ;
	this.optnum2 = 0 ;
	this.resultnum = 0;
	this.operator = null ;
	this.express = '' ;
}

CaluModel.prototype.add = function(){
	return this.optnum1 + this.optnum2 ;
}

CaluModel.prototype.minus = function(){
	return this.optnum1 - this.optnum2 ;
}

CaluModel.prototype.mult = function(){
	return this.optnum1 * this.optnum2 ;
}

CaluModel.prototype.divi = function(){
	return this.optnum1 / this.optnum2;
}

CaluModel.prototype.mod = function(){
	return this.optnum1 % this.optnum2 ;
}
CaluModel.prototype.pow = function(){
	return Math.pow(this.optnum1, this.optnum2) ;
}

CaluModel.prototype.calucation = function(){
		var result;
		switch(this.operator){
			case "+" :
			    result = this.add();
				break;
			case "-" :
			    result = this.minus();
			break;
			case "*" :
			    result = this.mult();
			break;
			case "/" :
				result = this.divi();
			break;
			case "%" :
				result = this.mod();
			break;
			case "pow" :
				result = this.pow();
			break;
			default :
			break ;
		}
		result.toFixed(4);

		if(isNaN(result) ){
			result = "input error" ;
		}
		// alert(result);
		this.resultnum = result;
		return this.resultnum;
}
