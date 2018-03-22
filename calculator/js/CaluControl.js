function CaluControl(){
	this._model = new CaluModel;
	this._view = new CaluView;
	this._status = 1;
	var _self = this;

	this._view.onInputOpt = function (optnum1,operator) {
		_self._model.optnum1 = optnum1;
		_self._model.operator = operator;
		_self._model.express = optnum1 + operator ;
		_self._view.renderExpress(_self._model.express);
	};

	this._view.onInputEqu = function  (optnum2) {
		_self._model.optnum2 = optnum2;
		_self._model.express = _self._model.optnum1 + _self._model.operator + _self._model.optnum2;
		var result = _self._model.calucation();
		_self._view.renderResult(result);
	};
}
CaluControl.prototype.render = function() {
	return this._view.$dom;
};





