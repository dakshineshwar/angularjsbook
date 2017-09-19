angular.module("myApp").controller("BookAddController",function($scope,$http,$location,bookService){

    $scope.favorite = false;
    $scope.onsuccess = function () {
                $scope.favorite.checked = false;
                $scope.title = "";
                $scope.year = "";
                $location.path('/ListBook');
    }
    $scope.onerror = function (error) {
        console.log("error");
    }
    $scope.add = function(onsuccess,onerror){
        var postData = {
            favorite : $scope.favorite,
            title : $scope.title,
            year : $scope.year    
        }
        var result = bookService.createBook(postData,$scope.onsuccess,$scope.onerror);
    }
});