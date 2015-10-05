var matrix = [  [0,1,1,0,0],
                [0,0,0,1,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,0]];

// create an array with nodes
var nodes = new vis.DataSet();
for (var i = 0; i < matrix.length; i++) {
    nodes.add({id: i, label: (i+1).toString()});
};

var edgesCount = 0;

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
        if(matrix[i][j] === 1) {
            edgesCount++;    
        }
    };
};

var edges = new vis.DataSet();

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
        if(matrix[i][j] === 1) {
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

angular.module('DataStructureGraph', [])
.controller('DefaultCtrl', function ($scope) {
    $scope.matrix = matrix;
});
