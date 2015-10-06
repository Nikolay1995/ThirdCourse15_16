//---Module---
angular.module('DataStructureQueue', [])
.controller('DefaultCtrl', function ($scope) {    
    $scope.X = [];
    $scope.Y = [];
    $scope.Z = [];
    
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
            if ((parseInt($scope.lValue, 10) + $scope.Y.length) < $scope.X.length) {
                for (var i = parseInt($scope.lValue, 10) + $scope.Y.length; i < $scope.X.length; i++) {
                    $scope.Z.push($scope.X[i]);    
                    console.log(i);
                }       
            }
        } else {
            console.log("l > X");  
            $scope.Z = ["ERROR: nothing to delete."];
        }
    }
});
    
