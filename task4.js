"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const order1 = {
    id: 101,
    customer: {
        name: "Alice",
        loyaltyMember: true
    },
    items: [
        { name: "Book", price: 15.99, quantity: 2 },
        { name: "Pen", price: 2.50, quantity: 5 }
    ]
};
const order2 = {
    id: 102,
    customer: {
        name: "Bob",
        loyaltyMember: false
    },
    items: [
        { name: "Notebook", price: 7.25, quantity: 3 }
    ]
};
function calculateTotalRevenue(ordersObj) {
    let total = 0;
    for (const order of ordersObj) {
        for (const items of order.items) {
            total += items.price * items.quantity;
        }
    }
    return total;
}
let total = calculateTotalRevenue([order1, order2]);
console.log("Total Revenue: $" + total.toFixed(2));
//# sourceMappingURL=task4.js.map