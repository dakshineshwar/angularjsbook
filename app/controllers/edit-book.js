angular.module("myApp").controller("BookEditController",function($scope,$http,$routeParams,$location,bookService){
        $scope.id;
      
        var getBookRecord;
        $scope.getId = function(){
            $scope.id = $routeParams.id;
            
        }
        $scope.isActive = function(route) {
        return route === $location.path();
        };
        $scope.onsuccess = function (response) {
                $scope.getBookRecord = response.data;
                $scope.title = $scope.getBookRecord.title;
                $scope.year = $scope.getBookRecord.year;
                $scope.favorite =$scope.getBookRecord.favorite;
                $scope.id = $scope.getBookRecord.id;
        }
        $scope.onupdatesuccess = function (response) { 
             $location.path('/ListBook');
        }  
        $scope.onerror = function (error) {
            console.log("error");
        }
        $scope.getId();

        $scope.getBookDetails = function(id,onsuccess,onerror){
         /*   var result = bookService.getBookWithId($scope.id);
               
              */  
           var result = bookService.getBookWithId($scope.id,onsuccess,onerror);
        }
        $scope.getBookDetails($scope.id, $scope.onsuccess, $scope.onerror);

        $scope.update = function(){
            var updateData = {
            favorite : $scope.favorite,
            title : $scope.title,
            year : $scope.year,
            id : $scope.id
            
        }


         var result = bookService.updateBook(updateData,$scope.onupdatesuccess,$scope.onerror);


        } 
});

