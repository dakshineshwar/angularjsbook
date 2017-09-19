//1.
describe('bookService', function () {
    var myserv, httpBackend;
    //2.
    beforeEach(function () {
        //3. load the module.
        module('myApp');
 
        // 4. get your service, also get $httpBackend
        // $httpBackend will be a mock.
        inject(function ($httpBackend, _bookService_) {
            myserv = _bookService_;
            httpBackend = $httpBackend;
        });
    });
 
    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
 
    //6.
   it('ServiceTestSpecForGet', function (done) {
 
        var returnData = {data:[
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
    ]};
        
        // expectGET to make sure this is called once.
        httpBackend.expectGET("http://localhost:4000/api/books").respond(200, returnData);
 
        // make the call.
        var returnedPromise = myserv.getBookWithoutId();
        /*returnedPromise.then(function(){
            
        }).catch(function(){

        }).finally(done);*/

        myserv.getBookWithoutId(function(data){
            //some operation
           // expect(1).toBe(1);
           
            expect(data).toEqual(returnData);
       
            done();
        }, function(error){
            //some operation
          //  expect(1).toBe(1);
           expect(error).toBeUndefined();
            done();
        });
        // set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
      /* var result;
        returnedPromise.then(function (response) {
            result = response.data;
        }).catch(function(){

        }).finally(done);*/
 
        // flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();
 
        // check the result. 
         
       // expect(data).toEqual(returnData);
 
    });

    

    it('ServiceTestSpecForGetWithId', function () {
 
        var returnData = {id: 1, title: "dhfngbkljB", year: 2011, favorite: true};
        var id=1;
        // expectGET to make sure this is called once.
        httpBackend.expectGET('http://localhost:4000/api/book/'+parseInt(id)).respond(returnData);
 
        // make the call.
        var returnedPromise = myserv.getBookWithId(id);
 
        // set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
 
        // flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();
 
        // check the result. 
         
        expect(result).toEqual(returnData);
 
    });
    
   it('ServiceTestSpecForUpdate', function () {
 
        var returnData = {};
        // expectPUT to make sure this is called once.
        httpBackend.expectPUT('http://localhost:4000/api/books').respond('200');
 
        // make the call.
        var returnedPromise = myserv.updateBook();
 
        // set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
 
        // flush the backend to "execute" the request to do the expectedPUT assertion.
        httpBackend.flush();
 
        // check the result. 
         
        expect(returnedPromise).toEqual('hello');
 
    });

    it('ServiceTestSpecForCreate', function () {
 
        var returnData = {};
        // expectPOST to make sure this is called once.
        httpBackend.expectPOST('http://localhost:4000/api/books').respond(returnData);
 
        // make the call.
        var returnedPromise = myserv.createBook();
 
        // set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
 
        // flush the backend to "execute" the request to do the expectedPOST assertion.
        httpBackend.flush();
 
        // check the result. 
         
        expect(result).toEqual(returnData);
 
    });
 
});