const orderPrices = [50, 30, 25, 40, 15];

const totalOrderValue = orderPrices.reduce((total, price) => {
    return total + price;
}, 0);

console.log('The total value of the order is:', totalOrderValue);


// const products = [
//     { name: 'Mouse Sem Fio', price: 30 },
//     { name: 'Pen Drive', price: 25 },
//     { name: 'Cartucho de Tinta', price: 50}
// ];

// function filterProductsByPriceRange(products, minPrice, maxPrice) {
//     return products.filter((product) => {
//         return product.price >= minPrice && product.price <= maxPrice;
//     });
// }

// const minPrice = 10; 
// const maxPrice = 500;

// const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);

// filteredProducts.forEach((product) => {
//     console.log(`The price of ${product.name} is $${product.price}`);
// });
    


// const products = [
//     { name: 'Mouse Sem Fio', price: 30 },
//     { name: 'Pen Drive', price: 25 },
//     { name: 'Cartucho de Tinta', price: 50}
// ];

// products.map((product) => {
//     console.log('The price of ${product.name} is $${product.price}');
// });

// function sendWelcomeEmail(email) {
//     console.log(`Sending welcome email to ${email}`);
// }
// const users = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' },
//     { name: 'Charlie', email: 'charlie@example.com' },
// ];
// users.forEach((user => {
//     sendWelcomeEmail(user.email);
// }));
