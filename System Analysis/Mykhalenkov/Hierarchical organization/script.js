angular.module('DataStructureGraph', [])
.controller('DefaultCtrl', function ($scope) {

    $scope.Draw = function () {
        var container = document.getElementById('myMatrix');
        var nodeCount = $("#nodesCount").val();
        var options = {
            layout: {
                hierarchical: {
                    enabled: true,
                    direction: "UD",
                    
                }
            }
        };
        var data = getScaleFreeNetwork(nodeCount);
        var network = new vis.Network(container, data, options);        
    }
});
