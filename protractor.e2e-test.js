describe('myApp', function() {

 // beforeEach(module('myApp'));

 /* describe('empcontroller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('empcontroller');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});*/
describe('User Registration Page Tests', function() {
    beforeEach(function() {
        browser.get('http://localhost:8888/');
    });

   it('user registration success', function(){
        element(by.linkText('AddBook')).click();
        browser.sleep(3000);
        element(by.model('title')).sendKeys('C');
        element(by.model('year')).sendKeys('2017');
        element(by.model('favorite')).click();
      
        browser.sleep(2000);
        element(by.id('add')).click();
        browser.sleep(3000);
        var todoList=element.all(by.repeater('book in list'));
        browser.sleep(2000);
        console.log("---------------------------------------------------------");
        expect(todoList.count()).toBe(6);
        expect(todoList.get(5).element(by.tagName('a')).getText()).toMatch("C");
        browser.sleep(2000);
    
    });
    it('user view success', function(){
        browser.sleep(3000);
        element(by.linkText('BookList')).click();
        browser.sleep(3000);
        var todoList=element.all(by.repeater('book in list'));
        expect(todoList.count()).toEqual(6);
      
    });
    it('user updation success', function(){
        browser.sleep(2000);
        element(by.linkText('BookList')).click();
        browser.sleep(2000);
        element.all(by.repeater('book in list')).get(5).element(by.tagName('a')).click();
        browser.sleep(2000);
        var bookName=element(by.model('title'));
        bookName.clear();
        bookName.sendKeys('Oracle');
        var bookYear=element(by.model('year'));
        bookYear.clear();
        bookYear.sendKeys('2040');
        element(by.model('favorite')).click();
        
        
        browser.sleep(3000);
        element(by.id('update')).click();
        browser.sleep(2000);
        element(by.linkText('BookList')).click();
        browser.sleep(3000);
     
      element.all(By.repeater('book in list')).map(function(elm) {
        return {
            text: elm.element(by.binding('book.title')).getText()
        };
        }).then(function(arr) {
            expect(arr[5].text).toEqual('Oracle');
        });

        var todos=element.all(by.repeater('book in list'));
         expect(todos.count()).toEqual(6);
         browser.sleep(3000);
       
    });
    
    it('user delete success', function(){
        browser.sleep(3000);
        element(by.linkText('BookList')).click();
        browser.sleep(2000);
        element.all(by.repeater('book in list')).get(5).element(by.id('delete')).click();
        browser.sleep(3000);
        element(by.linkText('BookList')).click();
        browser.sleep(2000);
        element.all(by.repeater('book in list')).each(function(list) {
        expect(list.id).not.toContain(6);
        });
        var todoList=element.all(by.repeater('book in list'));
        expect(todoList.count()).toEqual(5);
        browser.sleep(3000);
      
    });
    });
});