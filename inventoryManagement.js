// Write your code here
const products =["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct (Laptop) {
  console.log(Laptop);
}

function addproduct(newProduct) {
  newProduct =(arqument);
}

function updateProductName (products, newName) {
  products.newName = arguments;
}

function removeLastProduct (removeLastProduct) {
  removeLastProduct("monitor")
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
