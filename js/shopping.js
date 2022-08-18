// for storing all the cart items
const cartArray = [];

function display(cartProduct) {
  //   console.log(cartProduct);
  let totalPrice = 0;
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < cartProduct.length; i++) {
    // console.log(cartProduct[i].productName, cartProduct[i].productPrice);
    // getting the product name & price
    const name = cartProduct[i].productName;
    const price = cartProduct[i].productPrice;
    // totalPrice = totalPrice + price;
    totalPrice += price;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>`;
    tableBody.appendChild(tr);
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <th> Total</th>
        <th>Price</th>
        <th>$${totalPrice}</th>`;
  tableBody.appendChild(tr);
}

function addToCart(element) {
  //   console.log("addToCart", element);
  //   console.log(element.parentNode.parentNode.children);
  //   console.log(element.parentNode.parentNode.children[0].innerText);
  //   console.log(element.parentNode.parentNode.children[1].children[0].innerText);
  //   getting the product name
  const productName = element.parentNode.parentNode.children[0].innerText;
  //   console.log(productName);
  //   getting the product price
  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  //   console.log(productPrice);
  //   creating a new object for the cart item
  const productObj = {
    productName: productName,
    // productPrice: productPrice,
    productPrice: parseFloat(productPrice),
  };
  cartArray.push(productObj);
  //   console.log(productObj);
  //   console.log(cartArray);
  //   console.log(cartArray.length);
  document.getElementById("total-added-product").innerText = cartArray.length;
  //   sending cartArray to display function
  display(cartArray);
}
