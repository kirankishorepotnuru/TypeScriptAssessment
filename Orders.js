"use strict";
exports.__esModule = true;
var Orders = /** @class */ (function () {
    function Orders(orderId, orderDate, itemId, cost, status) {
        this.orderdb = [];
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.itemId = itemId;
        this.cost = cost;
        this.status = status;
    }
    Orders.prototype.addOrder = function (ordername) {
        if (this.status == "Delivered") {
            console.log("orderId " + this.orderId + " cannot be added to database because the order status is " + this.status);
        }
        else {
            this.orderdb.push(this.orderId);
            this.orderdb.push(this.status);
            console.log("order " + this.orderId + " is saved in database");
        }
    };
    Orders.prototype.showDetails = function () {
        if (this.status != "Delivered") {
            console.log("------------------------");
            console.log("orderId :" + this.orderId);
            console.log("orderDate :" + this.orderDate);
            console.log("itemId :" + this.itemId);
            console.log("cost :" + this.cost);
            console.log("status :" + this.status);
            console.log("the details stored in db is");
            this.orderdb.forEach(function (o) {
                console.log(o);
            });
            console.log("------------------------");
            console.log("");
        }
        else {
            console.log("order Details is not available in database");
        }
    };
    return Orders;
}());
var ord1 = new Orders(201, new Date(), 401, 400, 'Dispatched');
ord1.addOrder("add order -1");
ord1.showDetails();
var ord2 = new Orders(202, new Date(), 401, 400, 'shipped');
ord2.addOrder("add order -2");
ord2.showDetails();
var ord3 = new Orders(203, new Date(), 402, 500, 'Delivered');
ord3.addOrder("add order -3");
ord3.showDetails();
var Item = /** @class */ (function () {
    function Item(itemId, itemName, category, cost) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.cost = cost;
    }
    Item.prototype.showDetailsItem = function () {
        if (this.cost >= 100) {
            console.log("----------------------");
            console.log("itemid :" + this.itemId);
            console.log("item Name :" + this.itemName);
            console.log("item category :" + this.category);
            console.log("cost :" + this.cost);
        }
        else {
            console.log("unable to display items because cost is less than 100 the current cost is " + this.cost);
        }
    };
    return Item;
}());
var obj1 = new Item(401, 'pizza', 'non-veg', 400);
var obj2 = new Item(402, 'burger', 'veg', 60);
obj1.showDetailsItem();
obj2.showDetailsItem();
