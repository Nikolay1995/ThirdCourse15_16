$(document).ready(function () {
			var matrix = [];
            
            var twoFirstNodes = function() {
                var firstNodes = 0;
                for (var i=0; i<matrix.length; i++) {
                    var kol = 0;
                    for (var j=0; j<matrix.length; j++) {
                        kol += parseInt(matrix[j][i]);
                    }
                    if (kol === 0) {
                        firstNodes++;
                    }
                }
                if (firstNodes === 0) {
                    return 0;
                }
                else if (firstNodes > 1) {
                    return 1;
                }
            };
            
            var isolNode = function() {
                var isolNodes = 0;
                for (var i=0; i<matrix.length; i++) {
                    var iKol = 0;
                    var jKol = 0;
                    for (var j=0; j<matrix.length; j++) {
                        iKol += parseInt(matrix[i][j]);
                        jKol += parseInt(matrix[j][i]);
                    }
                    if (iKol + jKol === 0) {
                        isolNodes++;
                    }
                }
                if (isolNodes > 0) {
                    return 1;
                }
            };
            
            var twoLastNodes = function() {
                var lastNodes = 0;
                for (var i=0; i<matrix.length; i++) {
                    var kol = 0;
                    for (var j=0; j<matrix.length; j++) {
                        kol += parseInt(matrix[i][j]);
                    }
                    if (kol === 0) {
                        lastNodes++;
                    }
                }
                if (lastNodes > 1) {
                    return 1;
                }
                else if (lastNodes === 0) {
                    return 0;
                }
            };
            
            var dividedGraph = function() {
                var firstNodes = 0;
                var lastNodes = 0;
                for (var i=0; i<matrix.length; i++) {
                    var colFirst = 0;
                    var colLast = 0;
                    for (var j=0; j<matrix.length; j++) {
                        colFirst += parseInt(matrix[j][i]);
                        colLast += parseInt(matrix[i][j]);
                    }
                    if (colFirst === 0) {
                        firstNodes++;
                    }
                    if (colLast === 0) {
                        lastNodes++;
                    }
                }
                if (lastNodes > 1 && firstNodes > 1) {
                    return 1;
                }
            };
            
			var drawMatrix = function() {
				$("#matrix").remove();
				$("body").append("<div id='matrix'></div>");
				var col = parseInt($('#col').val());
				$("#matrix").append("<input class='marks' value='i/j'></input>");
				for (var i=0; i<col; i++) {
					$("#matrix").append("<input class='marks' value="+(i+1).toString()+"></input>");
				}
				$("#matrix").append("<br>");
				for (var i=0; i<col; i++) {
					$("#matrix").append("<input class='marks' value="+(i+1).toString()+"></input>");
					for (var j=0; j<col; j++) {
						var element = document.createElement('input');
						element.value = matrix[i][j];
						element.id = 'inputs';
						element.className = 'element'+i.toString();
						$('#matrix').append(element);
					}
					$("#matrix").append("<br>");
				}
				$("#matrix").append("<button id='build'>Build graph</button>");
			};

			var readMatrix = function() {
				var col = parseInt($('#col').val());
				matrix = []; //clear matrix
				for (var i=0; i<col; i++) {
					var inputs = document.getElementsByClassName( "element"+i.toString() ),
					elements  = [].map.call(inputs, function( input ) {
					return input.value;
					}).join( ',' );
					var dopMatrix = elements.split(",");
					matrix.push(dopMatrix);
				}
			}
			
			var drawGraph = function() {
				$("#parent").remove();
				$("body").append("<div id='parent'></div>");
				var col = parseInt($('#col').val());
				var nodes = new vis.DataSet();
				for (var i = 0; i < col; i++) {
					nodes.add({id: i, label: (i+1).toString()});
				};
			
				var edges = new vis.DataSet();
				for (var i=0; i<col; i++) {
					for (var j=0; j<col; j++) {
						if (matrix[i][j] === "1") {
							edges.add({from: i, to: j, arrows:'to'});
						}
					}
				}
				// create a network
				var container = document.getElementById('parent');
				var data = {
				nodes: nodes,
				edges: edges
				};
				var options = {};
				options.nodes = {
					color: '#ff0'
				}
				var network = new vis.Network(container, data, options);
			};
		
			$('#apply').click(function() {
				var col = parseInt($('#col').val());
				for (var i=0; i<col; i++) {
					var dopMatrix = [];
					for (var j=0; j<col; j++) {
						dopMatrix.push(0);
					}
					matrix.push(dopMatrix);
				}
				drawMatrix();
				$('#apply').remove();
			});
			
			$(document).on("click", "#build", function(){
				readMatrix();
                if (isolNode() === 1) {
                    alert("Graph has insulated node!");
                }
                else if (dividedGraph() === 1) {
                    alert("Divided graph!");
                }
                else if (twoFirstNodes() === 1) {
                    alert("Graph has two or more first nodes!");
                }
                else if (twoFirstNodes() === 0) {
                    alert("Graph doesn't have first node!");
                }
                else if (twoLastNodes() === 0) {
                    alert("Graph doesn't have last node!");
                }
                else if (twoLastNodes() === 1) {
                    alert("Graph has two or more last nodes!");
                }
                else {
                    $("body").append("<div id='parent'></div>");
				    drawGraph();
				    $("#task").append("<br/>");
				    $("#task").append("<button id='addNode'>Add node</button>");
				    $("#task").append("<button id='addEdge'>Add edge</button>");
				    $("#task").append("<button id='deleteNode'>Delete node</button>");
				    $("#task").append("<button id='deleteEdge'>Delete edge</button>");
				    $("#task").append("<button id='deleteNodeSave'>Delete node with saving</button>");
				    $("#build").remove();   
                }
			});
			
			$(document).on("click", "#addNode", function(){
				var col = parseInt($('#col').val());
				var dopMatrix = [];
				for (var i=0; i<col; i++) {
					dopMatrix.push('0');
					matrix[i].push('0');
				}
				dopMatrix.push('0');
				matrix.push(dopMatrix);
				col++;
                var i = prompt("Enter a number of node from which you want to draw edge to new node(Enter '-' if you dont need to draw edge to new node)");
                var j = prompt("Enter a number of node to which you want to draw edge from new node(Enter '-' if you dont need to draw edge from new node)");
                i--;
                j--;
                if (i != '-') {
                    matrix[i][col-1] = '1';
                }
                if (j != '-') {
                    matrix[col-1][j] = '1';
                }
                if (isolNode() === 1) {
                    alert("Graph has insulated node!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                else if (dividedGraph() === 1) {
                    alert("Divided graph!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                else if (twoFirstNodes() === 1) {
                    alert("Graph has two or more first nodes!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                else if (twoFirstNodes() === 0) {
                    alert("Graph doesn't have first node!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                else if (twoLastNodes() === 0) {
                    alert("Graph doesn't have last node!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                else if (twoLastNodes() === 1) {
                    alert("Graph has two or more last nodes!");
                    matrix.splice(col-1, 1);
                    col--;
                    for (var k=0; k<col; k++) {
                        matrix[k].splice(col-1, 1);
                    }
                }
                $('#col').val(col);
				drawMatrix();
				drawGraph();
				$("#build").remove();
			});
			
			$(document).on("click", "#addEdge", function(){
				var i = prompt("Enter a number of node from wich you want to add edge");
				var j = prompt("Enter a number of node to wich you want to add edge");
				i--;
				j--;
				if (matrix[i][j] != '1') {
                    matrix[i][j] = '1';
                    if (isolNode() === 1) {
                        alert("Graph has insulated node!");
                        matrix[i][j] = '0';
                    }
                    else if (dividedGraph() === 1) {
                        alert("Divided graph!");
                        matrix[i][j] = '0';
                    }
                    else if (twoFirstNodes() === 1) {
                        alert("Graph has two or more first nodes!");
                        matrix[i][j] = '0';
                    }
                    else if (twoFirstNodes() === 0) {
                        alert("Graph doesn't have first node!");
                        matrix[i][j] = '0';
                    }
                    else if (twoLastNodes() === 0) {
                        alert("Graph doesn't have last node!");
                        matrix[i][j] = '0';
                    }
                    else if (twoLastNodes() === 1) {
                        alert("Graph has two or more last nodes!");
                        matrix[i][j] = '0';
                    }
                }
				else {
					alert("This edge is already exist!");
				}
                drawMatrix();
                drawGraph();
				$("#build").remove();
			});
		
			$(document).on("click", "#deleteNode", function(){
				var col = parseInt($('#col').val());
				var i = prompt("Enter a number of node which you want to delete");
				i--;
				var dopMatrix = [];
				for (var m = 0; m<col-1; m++) {
					dopMatrix[m] = matrix[i][m];
				}
				var lastElements = [];
				for (var k = 0; k<col; k++) {
					lastElements[k] = matrix[k][col-1];
				}
				for (var n=0; n<col; n++) {
					matrix[n].splice(col-1, 1);
				}
				matrix.splice(i, 1);
				col--;
                if (dividedGraph() === 1) {
                    alert("Divided graph!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
				else if (isolNode() === 1) {
                    alert("Graph has insulated node!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
                else if (twoFirstNodes() === 1) {
                    alert("Graph has two or more first nodes!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
                else if (twoFirstNodes() === 0) {
                    alert("Graph doesn't have first node!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
                else if (twoLastNodes() === 0) {
                    alert("Graph doesn't have last node!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
                else if (twoLastNodes() === 1) {
                    alert("Graph has two or more last nodes!");
					matrix.splice(i, 0, dopMatrix);
					col++;
					for (var a=0; a<col; a++) {
						matrix[a].splice(col-1, 0, lastElements[a]);
					}
                }
				$('#col').val(col);
				drawMatrix();
				drawGraph();
				$("#build").remove();
			});
		
			$(document).on("click", "#deleteEdge", function(){
				var i = prompt("Enter a number of node from wich you want to delete edge");
				var j = prompt("Enter a number of node to wich you want to delete edge");
				i--;
				j--;
				if (matrix[i][j] != '0') {
					matrix[i][j] = '0';
                    if (isolNode() === 1) {
                        alert("Graph has insulated node!");
						matrix[i][j] = '1';
                    }
                    else if (dividedGraph() === 1) {
                        alert("Divided graph!");
						matrix[i][j] = '1';
                    }
                    else if (twoFirstNodes() === 1) {
                        alert("Graph has two or more first nodes!");
						matrix[i][j] = '1';
                    }
                    else if (twoFirstNodes() === 0) {
                        alert("Graph doesn't have first node!");
						matrix[i][j] = '1';
                    }
                    else if (twoLastNodes() === 0) {
                        alert("Graph doesn't have last node!");
						matrix[i][j] = '1';
                    }
                    else if (twoLastNodes() === 1) {
                        alert("Graph has two or more last nodes!");
						matrix[i][j] = '1';
                    }
				}
				else {
					alert("This edge is don't exist!");
				}
                drawMatrix();
				drawGraph();
				$("#build").remove();
			});
			
			$(document).on("click", "#deleteNodeSave", function(){
				var col = parseInt($('#col').val());
				var i = prompt("Enter a number of node which you want to delete");
				i--;
				for (var j=0; j<col; j++) {
					if (matrix[i][j] === '1') {
						for (var t=0; t<col; t++) {
							if (matrix[t][i] === '1') {
								matrix[t][j] = '1';
							}
						}
					}
				}
				for (var j=0; j<col; j++) {
					matrix[j].splice(i,1);
				}
				matrix.splice(i,1);
				col--;
				$('#col').val(col);
				drawMatrix();
				drawGraph();
				$("#build").remove();
				console.log(matrix);
			});
		});