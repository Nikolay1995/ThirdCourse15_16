var matrix = [  [0,1,1,0,0],
                [0,0,0,1,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,0]];



angular.module('DataStructureGraph', [])
.controller('DefaultCtrl', function ($scope) {
    $scope.matrix = matrix;
    $scope.characteristic = "";
    
    $scope.AddNode = function () {
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i].push(0);
        }
        var newRow = new Array($scope.matrix.length+1);
        for (var i = 0; i < newRow.length; i++) {
            newRow[i] = 0;    
        }
        $scope.matrix.push(newRow);
        $scope.Redraw();
        $scope.Characterize();
    };
    
    $scope.AddEdge = function () {
        var from = prompt("Add edge from: ");
        from--;
        var to = prompt("to: ");
        to--;
        $scope.matrix[from][to] = 1;
        $scope.Redraw();
        $scope.Characterize();
    };
    
    $scope.DeleteEdge = function () {
        var from = prompt("Delete edge from: ");
        from--;
        var to = prompt("to: ");
        to--;
        $scope.matrix[from][to] = 0;
        $scope.Redraw();   
        $scope.Characterize();
    };
    
    $scope.DeleteNode = function () {
        var nodeIndex = prompt("Delete Node: ");
        nodeIndex--;      
        $scope.matrix.splice(nodeIndex, 1);
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i].splice(nodeIndex, 1);
        }
        $scope.Redraw();
        $scope.Characterize();
    };
    
    $scope.DeleteNodeButSaveConnections = function () {
        var nodeIndex = prompt("Delete Node: ");
        nodeIndex--; 
        var from = [];
        for(var i = 0; i < $scope.matrix.length; i++) {
            if ($scope.matrix[i][nodeIndex] === 1) {
                if(i > nodeIndex) {
                    from.push(i - 1);    
                } else {
                    from.push(i);    
                }
            }
        }
        var to = [];
        for(var i = 0; i < $scope.matrix.length; i++) {
            if ($scope.matrix[nodeIndex][i] === 1) {
                if (i > nodeIndex) {
                    to.push(i - 1); 
                } else {
                    to.push(i);     
                }      
            }
        }
        console.log("From: " + from + "\nTo: " + to);
        for (var i = 0; i < from.length; i++) {
            for (var j = 0; j < to.length; j++) {
                $scope.matrix[from[i]][to[j]] = 1;
            }
        }
        
        $scope.matrix.splice(nodeIndex, 1);
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i].splice(nodeIndex, 1);
        }
        $scope.Redraw();
        $scope.Characterize();
    }
    
    $scope.Redraw = function () {
        var nodes = new vis.DataSet();
        for (var i = 0; i < $scope.matrix.length; i++) {
            nodes.add({id: i, label: (i+1).toString()});
        };
        var edgesCount = 0;
        for (var i = 0; i < $scope.matrix.length; i++) {
            for (var j = 0; j < $scope.matrix.length; j++) {
                if($scope.matrix[i][j] === 1) {
                    edgesCount++;    
                }
            };
        };
        var edges = new vis.DataSet();
        for (var i = 0; i < $scope.matrix.length; i++) {
            for (var j = 0; j < $scope.matrix.length; j++) {
                if($scope.matrix[i][j] === 1) {
                    edges.add({from: i, to: j, arrows:'to'});      
                }
            };
        };
        var container = document.getElementById('myMatrix');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
          "edges": {
            "smooth": {
              "forceDirection": "none"
            }
          },
          "physics": {
            "forceAtlas2Based": {
              "springLength": 100
            },
            "minVelocity": 0.75,
            "solver": "forceAtlas2Based"
          }
        }
        var network = new vis.Network(container, data, options);        
    }
    
    $scope.Characterize = function () {
        $scope.characteristic = "";
        for(var i = 0; i < $scope.matrix.length; i++) {
            if ($scope.matrix[i][i] === 1) {
                $scope.characteristic += "\nNode " + (i + 1).toString() + " have circle.";        
            }
        }
        
    }
    
    
    $scope.Redraw();
});
