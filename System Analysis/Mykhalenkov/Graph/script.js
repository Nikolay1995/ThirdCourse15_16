var redraw, g, renderer;

var matrix = [  [0,1,1,0,0],
                [0,0,0,1,1],
                [1,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,0]];

/* only do all this when document has finished loading (needed for RaphaelJS) */
window.onload = function() {
    
    var width = $(document).width() - 20;
    var height = $(document).height() - 60;
    
    g = new Graph();
    
    for (var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix.length; j++) {
            g.addNode(i.toString());    
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 1) {
                g.addEdge(i.toString(), j.toString(), {directed: true}); 
                console.log(i+","+j+":1");
            }
        }
    }
    /* layout the graph using the Spring layout implementation */
    var layouter = new Graph.Layout.Spring(g);
    /* draw the graph using the RaphaelJS draw implementation */
    renderer = new Graph.Renderer.Raphael('canvas', g, width, height);
    
    redraw = function() {
        layouter.layout();
        renderer.draw();
    };
};

angular.module('DataStructureGraph', [])
.controller('DefaultCtrl', function ($scope) {
    $scope.matrix = matrix;
});
