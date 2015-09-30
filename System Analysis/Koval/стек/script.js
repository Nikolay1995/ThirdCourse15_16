var x = [];
var y = [];
var z = [];
$(document).ready(function() {
	$("#apply").click(function() {
		$("#apply").remove();
		$("#wrapper").append("<div id='inputX'></div>");
		$("#wrapper").append("<div id='inputY'></div>");
		
		var element = document.createElement('div');
		element.id = "X";
		inputX.appendChild(element);
		
		var element = document.createElement('div');
		element.id = "Y";
		inputY.appendChild(element);
		
		var element = document.createElement('span');
		element.innerHTML = "X";
		X.appendChild(element);
		
		var element = document.createElement('span');
		element.innerHTML = "Y";
		Y.appendChild(element);
		
		for (var i=0;i<($("#n").val());i++) {
			var element = document.createElement('input');
			element.classList.add("xelements");
			X.appendChild(element);
			
			var element = document.createElement('br');
			X.appendChild(element);
		}
		for (var i=0;i<($("#k").val());i++) {
			var element = document.createElement('input');
			element.classList.add("yelements");
			Y.appendChild(element);
			
			var element = document.createElement('br');
			Y.appendChild(element);
		}
	var element = document.createElement('button');
	element.id = "plus";
	element.innerHTML = "+";
	wrapper.appendChild(element);
	
	var element = document.createElement('button');
	element.id = "minus";
	element.innerHTML = "-";
	wrapper.appendChild(element);
	});
});

var show = function(array) {
	var element = document.createElement('div');
	element.id = "inputZ";
	wrapper.appendChild(element);
	var element = document.createElement('div');
	element.id = "Z";
	inputZ.appendChild(element);
	var element = document.createElement('span');
	element.innerHTML = "Z";
	Z.appendChild(element);
	for (var i=0; i<array.length; i++) {
		var element = document.createElement('input');
		element.value = array[i];
		Z.appendChild(element);
		var element = document.createElement('br');
		Z.appendChild(element);
	}
	var element = document.createElement('img');
	element.id = "inputZ";
	wrapper.appendChild(element);
}
/////////////////////////////////////////////////////////////////////
$(document).on("click", "#plus", function(){
	var l = parseInt($("#l").val());
	var n = parseInt($("#n").val());
	var k = parseInt($("#k").val());
	
	$("#plus").remove();
	$("#minus").remove();
	
	var inputs_x = document.getElementsByClassName( 'xelements' ),
	xelements  = [].map.call(inputs_x, function( input ) {
	return input.value;
	}).join( ',' );
	x = xelements.split(",");
	
	var inputs_y = document.getElementsByClassName( 'yelements' ),
	yelements  = [].map.call(inputs_y, function( input ) {
	return input.value;
	}).join( ',' );
	y = yelements.split(",");
		
	if ($("#rex").prop("checked")) {
		if ($("#rey").prop("checked")) {
			if ($("#rs").prop("checked")) {
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				show(z);
				//okay
			}
			else if ($("#ls").prop("checked")) {
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				z.reverse();
				show(z);
				//okay
			}
		}
		else if ($("#ley").prop("checked")) {
			if ($("#rs").prop("checked")) {
				y.reverse();
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				show(z);
				//okay
			}
			else if ($("#ls").prop("checked")) {
				y.reverse();
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				z.reverse();
				show(z);
				//okay
			}
		}
	}
	else if ($("#lex").prop("checked")) {
		if ($("#rey").prop("checked")) {
			if ($("#rs").prop("checked")) {
				y.reverse();
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				z.reverse();
				show(z);
				//okay
			}
			else if ($("#ls").prop("checked")) {
				y.reverse();
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				show(z);
				//okay
			}
		}
		else if ($("#ley").prop("checked")) {
			if ($("#rs").prop("checked")) {
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				z.reverse();
				show(z);
				//okay
			}
			else if ($("#ls").prop("checked")) {
				for (var i=0; i<l; i++) {
					z[i] = x[i];
				}
				for (var i=0; i<k; i++) {
					z[i+l] = y[i];
				}
				for (var i=0; i<n-l; i++) {
					z[l+k+i] = x[l+i];
				}
				show(z);
				//okay
			}
		}
	}
});
///////////////////////////////////////////////////////////////////////
$(document).on("click", "#minus", function(){
	var l = parseInt($("#l").val());
	var n = parseInt($("#n").val());
	var k = parseInt($("#k").val());
	
	$("#plus").remove();
	$("#minus").remove();
	
	var inputs_x = document.getElementsByClassName( 'xelements' ),
	xelements  = [].map.call(inputs_x, function( input ) {
	return input.value;
	}).join( ',' );
	x = xelements.split(",");
	
	$("#inputY").remove();
	
	if (($("#rex").prop("checked"))) {
		if ($("#rs").prop("checked")) {
			for (var i=0; i<k; i++) {
				z[i] = x[i];
			}
			for (var i=l+k; i<n; i++) {
				z[i-k] = x[i];
			}
			show(z);
			//okay
		}
		else if ($("#ls").prop("checked")) {
			for (var i=0; i<k; i++) {
				z[i] = x[i];
			}
			for (var i=l+k; i<n; i++) {
				z[i-k] = x[i];
			}
			z.reverse();
			show(z);
			//okay
		}
	}
	else if ($("#lex").prop("checked")) {
		if ($("#rs").prop("checked")) {
			for (var i=0; i<k; i++) {
				z[i] = x[i];
			}
			for (var i=l+k; i<n; i++) {
				z[i-k] = x[i];
			}
			z.reverse();
			show(z);
			//okay
		}
		else if ($("#ls").prop("checked")) {
			for (var i=0; i<k; i++) {
				z[i] = x[i];
			}
			for (var i=l+k; i<n; i++) {
				z[i-k] = x[i];
			}
			show(z);
			//okay
		}
	}
});