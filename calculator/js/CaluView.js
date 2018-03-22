function CaluView() {
	var _html = "<table><tr> <td colspan = '4'>input: <input type = 'text'  class = 'input' ></td></tr>"
		      + "<tr><td colspan = '4'>express：<input type = 'text'  class = 'output' readonly></td>"
		      + "<tr><td colspan = '4'>result: <input type = 'text'  class = 'result' readonly></td></tr>"
	          + "<tr><td class = 'number'>7</td><td class ='number'>8</td><td class = 'number'>9</td><td class = 'opt'>+</td></tr>"
	          + "<tr><td class = 'number'>4</td><td class ='number'>5</td><td class = 'number'>6</td><td class = 'opt'>-</td></tr>"
	          + "<tr><td class = 'number'>1</td><td class ='number'>2</td><td class = 'number'>3</td><td class = 'opt'>*</td></tr>"
	          + "<tr><td class = 'number'>0</td><td class ='number'>.</td><td class = 'opt'>%</td><td class = 'opt'>/</td></tr>"
	          + "<tr><td class = 'ac'>AC</td><td class ='back'>back</td><td class = 'opt'>pow</td><td class = 'equ'>=</td></tr></table>"
	var _self = this;
    this.$dom = $(_html);

    this.$number = this.$dom.find('.number');
    this.$opt = this.$dom.find('.opt');
    this.$equ = this.$dom.find('.equ');
	this.$inputBox  = this.$dom.find('.input');
	this.$outputBox = this.$dom.find('.output');
	this.$resultBox = this.$dom.find('.result');
	this.$back = this.$dom.find('.back');
	this.$ac = this.$dom.find('.ac');

	this.$number.on('click',function  () {
		var newInput = _self.$inputBox.val() + this.innerHTML ;
		_self.$inputBox.val(newInput);
	});
	this.$opt.on('click',function () {
		var operator = this.innerHTML;
		var optnum1 = parseFloat(_self.$inputBox.val(),10);
		if (typeof _self.onInputOpt === 'function') {
			_self.onInputOpt(optnum1,operator);
		};
	});

	this.$equ.on('click',function  () {
		var optnum2 = parseFloat(_self.$inputBox.val(),10);
		if (typeof _self.onInputEqu === 'function') {
			_self.onInputEqu(optnum2);
		};
	});
	this.$back.on('click',function () {
		var temp = _self.$inputBox.val()
		if(temp && temp.length > 1){
			temp = temp.substring(0, temp.length - 1);
		}else{
			temp = "";
		}
		_self.$inputBox.val(temp);
	});

	this.$ac.on('click',function () {
		 _self.clear();
	});
}


CaluView.prototype.onInputNumber = null;
CaluView.prototype.onInputOpt = null;
CaluView.prototype.onInputEqu = null;


CaluView.prototype.clear = function  () {
	this.$inputBox.val("");
	this.$outputBox.val("");
	this.$resultBox.val("");
};

CaluView.prototype.renderExpress = function  (express) {
	this.$outputBox.val(express);
    this.$inputBox.val("");
};


CaluView.prototype.renderResult = function  (result) {
	this.$outputBox.val(this.$outputBox.val() + this.$inputBox.val());
    this.$inputBox.val("");
    this.$resultBox.val(result);
};



CaluView.prototype.resetText = function(status, model){
		switch(status){
			case 1 :
			    this.clear(); 
				break;
			case 2 : 
			    this.outputBox.val(model.express);
			    this.inputBox.val("");
				break;
			case 3:
				this.outputBox.val(this.outputBox.val() + this.inputBox.val());
			    this.inputBox.val("");
			    this.resultBox.val(model.resultnum);
			    break;
			default :
				break ;
		}
	}

	





 
