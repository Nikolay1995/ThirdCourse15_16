//---Module---
angular.module('DataStructureStack', [])
.controller('DefaultCtrl', function ($scope) {    
    $scope.X = [];
    $scope.Y = [];
    $scope.Z = [];
    $scope.Xside = "Xleftside";
    $scope.Yside = "Yleftside";
    $scope.Zside = "Zleftside";
    
    $scope.showSides = function () {
        console.log($scope.Xside + "\n" + $scope.Yside + "\n" + $scope.Zside);        
    };
    $scope.showArrays = function () {
        console.log($scope.X + "\n" + $scope.Y + "\n" + $scope.Z);    
    };
    
    $scope.setX = function () {
        $scope.X = [];
        for (var i = 0; i < $scope.nValue; i++) {
            $scope.X[i] = i;    
        }
    };
    
    $scope.setY = function () {
        $scope.Y = [];
        for (var i = 0; i < $scope.kValue; i++) {
            $scope.Y[i] = i;    
        }
    };
    
    $scope.Add = function () {
        $scope.Z = [];
        for (var i = 0; i < $scope.lValue; i++) {
            $scope.Z.push($scope.X[i]);   
            console.log(i);
        }
        for (var i = 0; i < $scope.Y.length; i++) {
            $scope.Z.push($scope.Y[i]);
            console.log(i);
        }
        for (var i = $scope.lValue; i < $scope.X.length; i++) {
            $scope.Z.push($scope.X[i]);    
            console.log(i);
        }
    };
    
    $scope.Delete = function () {
        $scope.Z = [];
        if ($scope.lValue < $scope.X.length) {
            for (var i = 0; i < $scope.lValue; i++) {
                $scope.Z.push($scope.X[i]);   
                console.log(i);
            }
            if (($scope.lValue + $scope.Y.length) < $scope.X.length) {
                for (var i = $scope.lValue + $scope.Y.length; i < $scope.X.length; i++) {
                    $scope.Z.push($scope.X[i]);    
                    console.log(i);
                }       
            }
        } else {
            console.log("l > X");  
            $scope.Z = ["ERROR: nothing to delete."];
        }
    }
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
    
