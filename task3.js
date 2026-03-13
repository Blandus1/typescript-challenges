"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product1 = {
    name: "Laptop",
    price: 999.99,
    quantity: 2
};
const Product2 = {
    name: "Mouse",
    price: 25.5,
    quantity: 5
};
function getProductInfo(products) {
    let productCalc = products.price * products.quantity;
    let total = productCalc.toFixed(2);
    return `Product: ${products.name}, Total cost: ${total}`;
}
console.log(getProductInfo(Product1));
console.log(getProductInfo(Product2));
//# sourceMappingURL=task3.js.map