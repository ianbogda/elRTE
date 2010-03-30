(function($) {

	elRTE.prototype.command = new function() {
		
		this.init = function(rte) {
			this.rte = rte;
			this.dom = rte.dom;
			this.sel = rte.selection;
			this.createButton();
			this.bind();
		}
		
		/**
		 * Create button for toolbar and bind event
		 */
		this.createButton = function() {
			var self = this;
			
			this.button = $('<li unselectable="on" class="elrte-button inline-block disabled '+this.name+'" title="'+this.title+'" />')
				.bind('mousedown', function(e) {
					e.preventDefault();
					e.stopPropagation()
					self.rte.focus();
					
					if (!$(this).hasClass('disabled') && self.exec()) {
						 self.rte.trigger('change');
					}
				}).hover(function(e) { 
					 $(this).toggleClass('hover', e.type == 'mouseenter' && !$(this).hasClass('disabled'));
				}).bind('change', function(e, s) {
					if (s == 1) {
						$(this).removeClass('disabled').addClass('active');	
					} else if (s ==0) {
						$(this).removeClass('disabled active');	
					} else {
						$(this).removeClass('active').addClass('disabled');	
					}
				});
		}
		
		/**
		 * Bind to rte events
		 */
		this.bind = function() {
			var self = this;

			this.rte.bind('close source blur', function() {
				self.button.trigger('change', -1);
			}).bind('update change', function(e) {
				self.button.trigger('change', self.state())
			});
		}
		
		/**
		 * @return Number  -1 for disable button, 0 - normal state, 1 - active button 
		 */
		this.state = function() {
			return 0;
		}
		
		/**
		 * All magic making here :)
		 * If return true trigger change will rised
		 * @return Boolean
		 */
		this.exec = function() { 
			this.rte.log('command '+this.name+' exec')
			return false;
		}
		
	}




	
})(jQuery);