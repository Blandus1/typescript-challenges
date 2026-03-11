//third challenge
interface Product {
    name: string;
    price: number;
    quantity:number;
}
const Product1: Product={
    name: "Laptop",
    price: 999.99,
    quantity: 2
}

const Product2: Product={
   name: "Mouse",
    price: 25.5,
    quantity: 5
}


function getProductInfo(products: Product): string{

let productCalc: number = products.price * products.quantity
let total : string= productCalc.toFixed(2)
return `Product: ${products.name}, Total cost: ${total}`
}

console.log(getProductInfo(Product1))
console.log(getProductInfo(Product2))
