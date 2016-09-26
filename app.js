(function(){
  'use strict';
  angular.module("ShoppingListCheckOff", [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ToBuy = this;

    ToBuy.to_buy = ShoppingListCheckOffService.getToBuy();
  
    ToBuy.removeItem = function (index) {
      ShoppingListCheckOffService.removeItem(index);
    }

  }
  
  
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var Bought = this;
  
    Bought.bought = ShoppingListCheckOffService.getBought();

  }
  
  
  function ShoppingListCheckOffService() {
    var service = this;
  
    // List of shopping items
    var to_buy = [];
    // List of already bought items
    var bought = [];

    to_buy = [{name: 'chips', quantity: '3 bags'}, {name: 'chips', quantity: '3 bags'}, 
      {name: 'chips', quantity: '3 bags'}, {name: 'chips', quantity: '3 bags'}, 
      {name: 'chips', quantity: '3 bags'}, {name: 'chips', quantity: '3 bags'}, 
      {name: 'chips', quantity: '3 bags'}];
 
    // service.addItem = function (itemName, quantity) {
    //   var item = {
    //     name: itemName,
    //     quantity: quantity
    //   };

    //   bought.push(item);
    // };
  
    service.removeItem = function (index) {
      var item = {
        name: to_buy[index].name,
        quantity: to_buy[index].quantity
      };
      bought.push(item);
      to_buy.splice(index, 1);
    };
  
    
  
    service.getToBuy = function () {
      return to_buy;
    };

    service.getBought = function () {
      return bought;
    };
  }
  })();  