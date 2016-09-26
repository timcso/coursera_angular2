(function(){
  'use strict';
  angular.module("ShoppingListCheckOff", [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ToBuy = this;

    ToBuy.itemName = "";
    ToBuy.itemQuantity = "";

    ToBuy.to_buy = ShoppingListService.getToBuy();
  
    ToBuy.removeItem = function (index) {
      ShoppingListService.removeItem(index);
    }

  }
  
  
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var Bought = this;
  
    Bought.bought = ShoppingListCheckOffService.getBought();

    Bought.addItem = function () {
      ShoppingListCheckOffService.addItem();
    }

    Bought.itemName = "";
    Bought.itemQuantity = "";

    itemAdder.addItem = function () {
      ShoppingListCheckOffService.addItem(Bought.itemName, Bought.itemQuantity);
    }
  }
  
  
  function ShoppingListCheckOffService() {
    var service = this;
  
    // List of shopping items
    var to_buy = [];
    // List of already bought items
    var bought = [];

    // service.addItem = function (itemName, quantity) {
    //   var item = {
    //     name: itemName,
    //     quantity: quantity
    //   };

    //   bought.push(item);
    // };
  
    service.removeItem = function (index) {
      var item = {
        name = to_buy[index].itemName,
        quantity = to_buy[index].itemQuantity
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