const appleStore = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

const jeepStore = {
  location: "London",
  products: [
    {
      name: "Roof Rack",
      type: "accessory",
      stock: {
        incomingDelivery: false,
        stock: 350
      },
      price: 3500
    },
    {
      name: "Spare Tyre",
      type: "accessory",
      stock: {
        incomingDelivery: true,
        stock: 100
      },
      price: 800
    },
    {
      name: "Jeep Wrangler Unlimited Polar",
      type: "car",
      stock: {
        incomingDelivery: true,
        stock: 40
      },
      price: 37500
    },
    {
      name: "Jeep Wrangler Unlimited Dragon",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 120
      },
      price: 69000
    },
    {
      name: "Jeep Grand Cherokee",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 250
      },
      price: 52000
    }
  ]
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products, targetPrice) {
  const expensiveProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price >= targetPrice) {
      expensiveProducts.push(product);
    }
  }

  return expensiveProducts;
}

// Example of what it should look like:
const expensiveProductsOver1000 = filterExpensiveProducts(
  appleStore.products,
  1000
);

// console.log("expensiveProductsOver1000: ", expensiveProductsOver1000);

const expensiveProductsOver2000 = filterExpensiveProducts(
  appleStore.products,
  2000
);

// console.log("expensiveProductsOver2000: ", expensiveProductsOver2000);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

function filterCheaperProducts(products, targetPrice) {
  const cheaperProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = products.price;

    if (price <= targetPrice) {
      cheaperProducts.push(product);
    }
  }
  return cheaperProducts;
}

const cheaperProductsUnder1000 = filterCheaperProducts(appleStore.products, 1000);
console.log("cheaperProductsUnder1000", cheaperProductsUnder1000);

// ----- Section ----- **

// Write a function here..
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery

// const productsThatNeedToBeReceived = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock
function filterOutOfStock(products) {
  const outOfStockProduct = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const stock = product.stock.quantity;

    if (stock === 0) {
      outOfStockProduct.push(product);
    }
  }
  return outOfStockProduct;
}

const outOfStockProducts = filterOutOfStock(appleStore.products);
console.log("outOfStockProducts: ", outOfStockProducts);


// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

// function findQuantity(products) {
//   let foundItem = null;

//   for (let i = 0; i < products.quantity; i++) {
//     const products = products[i];
//     const quantity = products.quantity;

//     if (quantity < 100) {
//       foundItem = quantity;
//     }
//   }
//   return foundItem;
// }

// const productsThatNeedToBeOrdered = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"
function findTablet(products) {
  let foundItem = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const type = product.type;

    if (type === "tablet") {
      foundItem = product;
    }
  }

  return foundItem;
}

const tablet = findTablet(appleStore.products);

console.log("Tablet: ", tablet);
// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// const computers = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"
function findIMac(products) {
  let foundItem = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;

    if (name === "iMac") {
      foundItem = product;
    }
  }

  return foundItem;
}

const iMac = findIMac(appleStore.products);

console.log("iMac: ", iMac);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

function findIPhone12(products) {
  let foundItem = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.name;

    if (name === "iPhone 12") {
      foundItem = product;
    }
  }

  return foundItem;
}

const iPhone12 = findIPhone12(appleStore.products);

console.log("iPhone12: ", iPhone12);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

function findIpadMini(appleProducts) {
  console.log("Inside findIpadMini: ", appleProducts);

  let ipadMini = null;

  for (let i = 0; i < appleStore.products.length; i++) {
    const product = appleProducts[i];
    const name = product.name;

    if (name === "iPad mini") {
      ipadMini = product;
    }
  }

  return ipadMini;
}

const iPadMini = findIpadMini(appleStore.products);

console.log("iPadMini: ", iPadMini);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// const productTypes = function();

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart
function totalPriceOfCart(cart) {

 let total = 0;

 for (let i = 0; i < cart.length; i++) {
   const item = cart[i];
   const quantity = item.quantity;
   const price = item.product.price;

   total = total + price * quantity

 }

 return total 
}
const totalCart = totalPriceOfCart(cart);
console.log("Price: ", "£", totalCart)

// const totalPrice = function()

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart
function calculateQuantityInCart(cart) {
  console.log("Inside calculateQuantityInCart: ", cart);

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantity = item.quantity;

    // console.log("Iteration #", i + 1);
    // console.log("Total @ start: ", total);
    // console.log("Quantity: ", quantity);

    total = total + quantity;

    console.log("Total @ end: ", total);
  }

  return total;
}

const totalQuanityInCart = calculateQuantityInCart(cart);

console.log("totalQuanityInCart: ", totalQuanityInCart);

// const quantityOfItemsInCart = function()

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"


 function buildReceipt(cartItem) {
   const name = cartItem.product.name;
   const type = cartItem.product.type;
   const price = cartItem.product.price;
   const quantity = cartItem.quantity;

   const subtotal = price * quantity;


   return `${name} | ${type} - £${price} x ${quantity} || ${subtotal}`
  }

  const receipt = buildReceipt(cart[0]);

  console.log("receipt: ", receipt);


// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

function buildReceiptMessage(cart) {
  console.log("Inside buildReceiptMessage: ", cart);

  let message = "Apple Store Receipt\n\n";

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

    const row = buildReceipt(cartItem);

    message += row + "\n";
  }

  message += "\n";

  const quantityItems = calculateQuantityInCart(cart);
  const quantityItemsString = `# of Items ${quantityItems}\n`;

  message += quantityItemsString;

  const total = totalPriceOfCart(cart);
  const totalString = `Total || £${total.toFixed(2)}\n`;

  message += totalString;

  return message;
}

const receiptMessage = buildReceiptMessage(cart);

console.log("receiptMessage: ", receiptMessage);

// FIND PRODUCT FUNCTION

// function findProduct(products, targetProduct) {
//   console.log("Inside findProduct: ", products, targetProduct);

//   let foundProduct = null;

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const name = product.name;

//     if (name === targetProduct) {
//       foundProduct = product;
//       break;
//     }
//   }

//   return foundProduct;
// }

// const iPadMini = findProduct(appleStore.products, "iPad mini");

// console.log("iPadMini: ", iPadMini);

// const iPhone12 = findProduct(appleStore.products, "iPhone 12");

// console.log("iPhone12: ", iPhone12);

// const jeepWranglerPolar = findProduct(
//   jeepStore.products,
//   "Jeep Wrangler Unlimited Polar"
// );

// console.log("jeepWranglerPolar: ", jeepWranglerPolar);
