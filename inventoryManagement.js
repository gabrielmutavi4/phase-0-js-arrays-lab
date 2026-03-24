// Write your code here
let products =["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct (products) {
  console.log(products);
}

function addproduct (newProduct) {
  newProduct =(arqument);
}

function updateProductName (products, newName) {
  products.newName = (arguments);
}

function removeLastProduct (products) {
  console.log(products)
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
