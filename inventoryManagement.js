// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(products) {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("products array is empty.");
  }
}

function addProduct(products, newProduct) {
  products.push(newProduct);
}

function updateProductName(products, index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid product index.");
  }
}

function removeLastProduct(products) {
  if (products.length > 0) {
    products.pop();
  } else {
    console.log("The products array is already empty.");
  }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
