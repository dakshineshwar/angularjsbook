var app = angular.module("myApp");
app.controller("BookListContoller", function ($scope, $http, bookService) {


  $scope.getList=[];
  $scope.onsuccess = function (response) {
     $scope.getList = response.data;
  }
  $scope.onerror = function (error) {
    console.log("error");
  }
  $scope.listBooks = function (onsuccess,onerror) {

    /*var result = bookService.getBookWithoutId().success(function (data) {
      $scope.getList = data;
    });*/
    var result = bookService.getBookWithoutId(onsuccess,onerror);
   // onsuccess(data);
    console.log(result);
  }
  $scope.listBooks($scope.onsuccess,$scope.onerror);

  $scope.deleteBook = function (id,onsuccess,onerror) {
    var result = bookService.deleteBook(id,onsuccess,onerror);
    $scope.listBooks($scope.onsuccess,$scope.onerror);
  }

});

app.directive("myDirective", function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      list: '=',
      delBook :'&'
    },
    
    templateUrl : 'customdirective/custom-directive.html'
  };
});