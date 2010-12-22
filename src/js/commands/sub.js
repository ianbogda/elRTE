/**
 * @class Set/unset Subscript text
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
elRTE.prototype.commands.sub = function() {
	this.title    = 'Subscript';
	this.author   = 'Dmitry (dio) Levashov, dio@std42.ru';
	this.node     = 'sub';
	this.regExp   = /^SUB$/;
	this.cssProp  = 'vertical-align';
	this.cssVal   = 'sub';
	this.test     = $.proxy(this.rte.mixins.textElement.test,   this);
	this.unwrap   = $.proxy(this.rte.mixins.textElement.unwrap, this);
	this.wrap     = $.proxy(this.rte.mixins.textElement.wrap,   this);
	this._init    = $.proxy(this.rte.mixins.textElement.init,   this);
	this._exec    = $.proxy(this.rte.mixins.textElement.exec,   this);
	this._state   = $.proxy(this.rte.mixins.textElement.state,  this);
}
