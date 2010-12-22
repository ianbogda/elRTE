/**
 * @class elRTE command.
 * Insert ordered list.
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
elRTE.prototype.commands.ol = function() {
	this.title     = 'Ordered list';
	this.author   = 'Dmitry (dio) Levashov, dio@std42.ru';
	this._exec     = $.proxy(this.rte.mixins.list.exec, this);
	this._state = $.proxy(this.rte.mixins.list.state, this);
}
