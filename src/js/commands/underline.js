/**
 * @class Set/unset underlined text
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
elRTE.prototype.commands.underline = function() {
	this.title    = 'Underline';
	this.author   = 'Dmitry (dio) Levashov, dio@std42.ru';
	this.regExp   = /^(U|INS)$/;
	this.cssProp  = 'text-decoration';
	this.cssVal   = 'underline';
	this.shortcut = 'ctrl+u';
	this.test     = $.proxy(this.rte.mixins.textElement.test,   this);
	this.unwrap   = $.proxy(this.rte.mixins.textElement.unwrap, this);
	this.wrap     = $.proxy(this.rte.mixins.textElement.wrap,   this);
	this._init    = $.proxy(this.rte.mixins.textElement.init,   this);
	this._exec    = $.proxy(this.rte.mixins.textElement.exec,   this);
	this._state   = $.proxy(this.rte.mixins.textElement.state,  this);
}
