$(document).ready(function(){
var x = [];
var y = [];
var z = [];
	$('#apply').click(function() {
		var n = parseInt($('#n').val());
		var k = parseInt($('#k').val());
		var l = parseInt($('#l').val());
		if (n === "") {
			prompt("Enter n!");
		}
		else if (k === "") {
			prompt("Enter k!");
		}
		else if (l === "") {
			prompt("Enter l!");
		}
		else {
			document.body.appendChild(document.createElement('span')).innerHTML = "x = ";
			for (var i = 0; i<n; i++) {
				var element = document.createElement('input');
				element.className = "xelements";
				document.body.appendChild(element);
			}
			document.body.appendChild(document.createElement('br'));
			document.body.appendChild(document.createElement('br'));
			document.body.appendChild(document.createElement('span')).innerHTML = "y = ";
			for (var i = 0; i<k; i++) {
				var element = document.createElement('input');
				element.className = "yelements";
				document.body.appendChild(element);
			}
			document.body.appendChild(document.createElement('br'));
			document.body.appendChild(document.createElement('br'));
			$('#apply').remove();
		}
		var element = document.createElement('button');
		element.innerHTML = '+', element.id = "add";
		document.body.appendChild(element);
		var element = document.createElement('button');
		element.innerHTML = '-', element.id = "remove";
		document.body.appendChild(element);
	});
	$(document).on("click", "#add", function(){
		var n = parseInt($('#n').val());
		var k = parseInt($('#k').val());
		var l = parseInt($('#l').val());
		var inputs_x = document.getElementsByClassName( 'xelements' ),
		xelements  = [].map.call(inputs_x, function( input ) {
        return input.value;
		}).join( '|' );
		var inputs_y = document.getElementsByClassName( 'yelements' ),
		yelements  = [].map.call(inputs_y, function( input ) {
        return input.value;
		}).join( '|' );
		x = xelements.split("|");
		y = yelements.split("|");
		//
		for (var i = 0; i<l; i++) {
			z[i] = x[i];
		}
		for (var i = 0; i<k; i++) {
			z[l+i] = y[i];
		}
		for (var i=0; i<n-l; i++) {
			var index = k+l+i;
			z[index] = x[l+i];
		}
		//
		var element = document.createElement('br');
		document.body.appendChild(element);
		$('#add').remove();
		$('#remove').remove();
		document.body.appendChild(document.createElement('h2')).innerHTML = "Результат:";
		document.body.appendChild(document.createElement('span')).innerHTML = " z = ";
		var element = document.createElement('input');
		element.id = "result";
		document.body.appendChild(element);
		var result = z.join('|');
		$('#result').val('|'+result+'|');
	});
	$(document).on("click", "#remove", function(){
		var n = parseInt($('#n').val());
		var k = parseInt($('#k').val());
		var l = parseInt($('#l').val());
		var inputs_x = document.getElementsByClassName( 'xelements' ),
		xelements  = [].map.call(inputs_x, function( input ) {
        return input.value;
		}).join( '|' );
		x = xelements.split("|");
		//
		for (var i = 0; i<l; i++) {
			z[i] = x[i];
		}
		for (var i = l+k; i<n; i++) {
			z[i-k] = x[i];
		}
		//
		var element = document.createElement('br');
		document.body.appendChild(element);
		$('#add').remove();
		$('#remove').remove();
		document.body.appendChild(document.createElement('h2')).innerHTML = "Результат:";
		document.body.appendChild(document.createElement('span')).innerHTML = " z = ";
		var element = document.createElement('input');
		element.id = "result";
		document.body.appendChild(element);
		var result = z.join('|');
		$('#result').val('|'+result+'|');
	});
});