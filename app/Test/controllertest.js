//1.
/*describe('BookListContoller', function () {
    //2.
    beforeEach(module('myApp'));
    //3.
    var $scope, bookService, createController;
        //it('scopeTestSpec',
        //4.
       /* inject(function ($controller, $rootScope,_bookService_) {
            var $scope = $rootScope.$new();
            $controller('BookListContoller', {
                $scope: $scope
            });
            //5.
            expect($scope.Employee.EmpName).toEqual('MS');
            
        }));*/
       
  /*     var books = [
        {
            id: 1,
            title: "dhfngbkljB",
            year: 2011,
            favorite: true
        },
        {
            id: 2,
            title: 'The Hobit',
            year: 2010,
            favorite: false
        },
        {
            id: 3,
            title: 'The Da Vinci Code',
            year: 2002,
            favorite: true
        },
        {
            id: 4,
            title: 'The Lord of the ring',
            year: 2013,
            favorite: true
        },
        {
            id: 5,
            title: 'Jurassic Park',
            year: 2005,
            favorite: false
        }
    ];
        beforeEach(inject(function ($rootScope, $controller, _bookService_) {
        bookService = _bookService_;
        $scope = $rootScope.$new();

        createController = function() {
            return $controller('BookListContoller', {
                '$scope' : $scope,
                bookService : bookService
            });
        };
        }));
            //6.
        it('BookListTestFunction', function () {
            var controller = createController();
           
           // expect($scope.lower('MAHESH')).toEqual('mahesh');
            expect($scope).toBeDefined();
            expect($scope.getList).toEqual(books);
        });
});*/

describe('BookListContoller', function() {
  beforeEach(module('myApp'));

  var $controller;
  var books = [
        {
            id: 1,
            title: "dhfngbkljB",
            year: 2011,
            favorite: true
        },
        {
            id: 2,
            title: 'The Hobit',
            year: 2010,
            favorite: false
        },
        {
            id: 3,
            title: 'The Da Vinci Code',
            year: 2002,
            favorite: true
        },
        {
            id: 4,
            title: 'The Lord of the ring',
            year: 2013,
            favorite: true
        },
        {
            id: 5,
            title: 'Jurassic Park',
            year: 2005,
            favorite: false
        }
    ];
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.listBooks', function() {
    it('sets the title of getList array', function() {
      var $scope = {};
      var controller = $controller('BookListContoller', { $scope: $scope });
      $scope.getList.title = 'Jurassic Park';
      $scope.listBooks();
      expect($scope.getList.title).toEqual(books[4].title);
    });
  });
});

  describe('BookEditController', function() {
       beforeEach(module('myApp'));
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('BookEditController', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/ListBook');
        expect($location.path()).toBe('/ListBook');
        expect(scope.isActive('/ListBook')).toBe(true);
       // expect(scope.isActive('/contact')).toBe(false);
    });
});