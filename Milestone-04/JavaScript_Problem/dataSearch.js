const products = [
    {id: 1, name: 'Samsung A15 Phone', price: 25000},
    {id: 2, name: 'Asus ROG3 Laptop', price: 150000},
    {id: 3, name: 'Asus 125 Laptop', price: 80000},
    {id: 4, name: 'Itel Smart Phone', price: 22000},
    {id: 5, name: 'Sony Experia Phone', price: 74000},
    {id: 6, name: 'X1 Carbon Laptop', price: 89000},
    {id: 7, name: 'Iphone 15 Max pro', price: 250000},
]

const matchProduct = (products, search) => {
    const mached = [];
    // for (let i = 0; i < products.length; i++) {
    //     if (products[i].name.toLowerCase().includes(search.toLowerCase())) {
    //         mached.push(products[i]);
    //     }
    // }

    for (const product of products) {
        const condition = product.name.toLowerCase().includes(search.toLowerCase());
        if (condition) {
            mached.push(product);
        }
    }
    return mached;
}

const mached = matchProduct(products, 'phone');
console.log(mached);