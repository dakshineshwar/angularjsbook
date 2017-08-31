var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/ListBook", {
        templateUrl : "partials/book-list.html",
        controller : "BookListContoller"
    })
    .when("/AddBook", {
        templateUrl : "partials/book-add.html",
        controller : "BookAddController"
    })
    .when("/EditBook/:id", {
        templateUrl : "partials/book-edit.html",
        controller : "BookEditController"
    })
    .otherwise({
        templateUrl : "partials/home.html"
    })
});
