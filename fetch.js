// 1. JSON
const student = {
    name: 'Sakib Hasan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const products = [
    { name: 'Laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
];

// const specificName = products.filter(product => product.price.includes('3'));
// console.log(specificName);


const newProduct = { name: 'webcam', price: 12000, brand: 'orelyo' };

const newProducts = [...products, newProduct];

console.log(newProducts);

