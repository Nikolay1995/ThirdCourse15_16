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
        if ($scope.Xside === "Xleftside") {
            for (var i = 0; i < $scope.nValue; i++) {
                $scope.X[i] = $scope.nValue - i - 1;    
            }   
        } else {
            for (var i = 0; i < $scope.nValue; i++) {
                $scope.X[i] = i;    
            } 
        }  
    };
    
    $scope.setY = function () {
        $scope.Y = [];
        if ($scope.Yside === "Yleftside") {
            for (var i = 0; i < $scope.kValue; i++) {
                $scope.Y[i] = $scope.kValue - i - 1;    
            }   
        } else {
            for (var i = 0; i < $scope.kValue; i++) {
                $scope.Y[i] = i;    
            } 
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
        if ($scope.Zside === "Zleftside") {
            $scope.TempArray = $scope.Z;
            $scope.Z = [];
            $scope.Z = $scope.TempArray.reverse();

        }
    };
    
    $scope.Delete = function () {
        $scope.Z = [];
    };
    
    
});

    
