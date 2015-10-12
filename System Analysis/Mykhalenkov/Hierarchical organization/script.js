var matrix = [  [0,1,1,0,0],
                [0,0,0,1,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,0]];



angular.module('DataStructureGraph', [])
.controller('DefaultCtrl', function ($scope) {
    $scope.matrix = matrix;
    
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
    };
    
    $scope.AddEdge = function () {
        var from = prompt("Add edge from: ");
        from--;
        var to = prompt("to: ");
        to--;
        $scope.matrix[from][to] = 1;
        $scope.Redraw();
    };
    
    $scope.DeleteEdge = function () {
        var from = prompt("Delete edge from: ");
        from--;
        var to = prompt("to: ");
        to--;
        $scope.matrix[from][to] = 0;
        $scope.Redraw();            
    };
    
    $scope.DeleteNode = function () {
        var nodeIndex = prompt("Delete Node: ");
        nodeIndex--;      
        $scope.matrix.splice(nodeIndex, 1);
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i].splice(nodeIndex, 1);
        }
        $scope.Redraw();
    };
    
    $scope.DeleteNodeButSaveConnections = function () {
        var nodeIndex = prompt("Delete Node: ");
        nodeIndex--; 
        var from = [];
        for(var i = 0; i < $scope.matrix.length; i++) {
            if ($scope.matrix[i][nodeIndex] === 1) {
                from.push(i);    
            }
        }
        var to = [];
        for(var i = 0; i < $scope.matrix.length; i++) {
            if ($scope.matrix[nodeIndex][i] === 1) {
                to.push(i);    
            }
        }
        console.log(from, to);
        for (var i = 0; i < from.length; i++) {
            for (var j = 0; j < from.length; j++) {
                $scope.matrix[from[i]][to[j]] = 1;
            }
        }
        
        $scope.matrix.splice(nodeIndex, 1);
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i].splice(nodeIndex, 1);
        }
        $scope.Redraw();
    }
    
    $scope.Redraw = function () {
        // create an array with nodes
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

        // create a network
        var container = document.getElementById('myMatrix');
        var data = {
            nodes: nodes,
            edges: edges
        };

        var options = {};
        var network = new vis.Network(container, data, options);        
    }
    
    
    
    
    $scope.Redraw();
});
