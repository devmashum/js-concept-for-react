const products = [
    { name: 'Laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
]

// const brands = products.map(product => product.brand);
// console.log(brands);

// products.forEach(product => console.log(product.color));
// products.forEach(product => console.log(product.price));
// products.forEach(product => console.log(product.brand));

const cheap = products.filter(product => product.price <= 3000);
console.log(cheap);

const color = products.filter(product => product.color === 'black');
console.log(color);
