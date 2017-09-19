angular.module("myApp").service("bookService",function($http){

    var responseData;

    this.getBookWithoutId = function(onsuccess,onerror){

        /*responseData = $http.get('http://localhost:4000/api/books').success(function(response,status) {  
                responseData = response.data;  
            }).error(function(){
                console.log("error");
            });  */
           responseData=$http.get("http://localhost:4000/api/books").then(onsuccess,onerror);
            return responseData;
    }

    this.getBookWithId = function(id,onsuccess,onerror){
              /*  responseData=$http.get("http://localhost:4000/api/book/"+id).then(function (response) {
                    responseData = response.data;
                });*/
                responseData=$http.get("http://localhost:4000/api/book/"+id).then(onsuccess,onerror);
                   
        /*responseData = $http.get('http://localhost:4000/api/book/'+id).success(function(response,status) {  
                responseData = response.data;  
            }).error(function(){
                console.log("error");
            });  
*/
            return responseData;
    }

    this.deleteBook = function(id,onsuccess,onerror){

       /* responseData = $http.delete('http://localhost:4000/api/book/'+id).success(function(response,status) {  
                responseData = response.data;  
            }).error(function(){
                console.log("error");
            });  */
            responseData = $http.delete('http://localhost:4000/api/book/'+id).then(onsuccess,onerror);
            return responseData;
    }

    this.updateBook = function(data,onsuccess,onerror){

       /* responseData = $http.put('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
                responseData = response.data;  
            }).error(function(){
                console.log("error");
            });  */
            responseData = $http.put('http://localhost:4000/api/books',JSON.stringify(data)).then(onsuccess,onerror);
            return responseData;
    }

    this.createBook = function(data,onsuccess,onerror){

      /*  responseData = $http.post('http://localhost:4000/api/books',JSON.stringify(data)).success(function(response,status) {  
                responseData = response.data;  
            }).error(function(){
                console.log("error");
            });  */
            responseData = $http.post('http://localhost:4000/api/books',JSON.stringify(data)).then(onsuccess,onerror);
            return responseData;
    }


});