(function(){
	'use strict';
	var app = {
		rgbColorObject: {},
		init: function(){
			this.listeners();
		},
		listeners: function(){
			$('form').on('input', 'input', this.updateRgbValue.bind(this));
		},
		updateRgbValue : function(){
			this.rgbColorObject = {
				red : $('#redInput').val(),
				green: $('#greenInput').val(),
				blue: $('#blueInput').val(),
				alpha: $('#alphaInput').val() / 100
			}
			this.displayRgbValue();
			this.changeBackgroundColor();
		},
		changeBackgroundColor: function(){
			var rgbColor = 'rgba(' + this.rgbColorObject.red + ', ' + this.rgbColorObject.green + ', ' + this.rgbColorObject.blue + ', ' + this.rgbColorObject.alpha + ')' ;
			$('body').css('backgroundColor', rgbColor);
		},
		displayRgbValue: function(){
			$('#redRgb').html(this.rgbColorObject.red);
			$('#greenRgb').html(this.rgbColorObject.green);
			$('#blueRgb').html(this.rgbColorObject.blue);
			$('#alpha').html(this.rgbColorObject.alpha);

		}
	}

	$(document).ready(function(){
		app.init();
	});
})();