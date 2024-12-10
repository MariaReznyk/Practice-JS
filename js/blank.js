function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
    
const result = [];

    for (const obj of products) {
        if (Object.keys(obj).includes(propName)) {
            result.push(obj[propName])
        };
  }

  return result;
  
}

getAllPropValues("categ");

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles);

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

for (const productDescr of products) {
  if (productDescr.name === productName) {return productDescr.price * productDescr.quantity}
}

    return `Product ${productName} not found!`;
  
}

calculateTotalPrice("Grip");

function add(...args) {
  let total = 0;
  for (const arg of args) { 
    total += arg;
  }
  console.log(total);
}

add(15, 27);
