
const url = "https://mock-data-api.firebaseio.com/webb21/products.json"


fetch(url)
.then((res) => res.json())
.then((productData) => productList(productData))


const productContainer = document.getElementById("product-container")
const totalSpent = document.getElementById("total-spent")
let sum = 0

function productList(productData) {
  productData.forEach((productItem) => {
    RenderProductItem(productItem)
  })
}

function RenderProductItem(productItem) {
  const productItemElement = document.createElement("div")

 
function itemName(productItem) {
  const productName = document.createElement("h1")
  productName.innerText = productItem.name
  return productName
}

function itemImage(productItem) {
  const productImage = document.createElement("img")
  productImage.src = productItem.images[0].src.small
  productImage.alt = productItem.images[0].alt
  productImage.addEventListener("click", function () {
    buyItem(productItem)
  })

  return productImage
}

function buyItem(productItem) {
    let itemPrice = productItem.price
    sum += itemPrice;
    totalSpent.innerText = `Total: ${sum}`
  }

function itemDescription(productItem) {
  const productDescription = document.createElement("b")
  productDescription.innerText = productItem.description
  return productDescription
}

function itemPrice(productItem) {
  const productPrice = document.createElement("p")
  productPrice.innerText = `Price: ${productItem.price}`
  return productPrice
}

function itemRating(productItem) {
  const productRating = document.createElement("p")
  productRating.innerText = `Rating: ${productItem.rating}`
  return productRating
}

function itemStock(productItem) {
  const productStock = document.createElement("p")
  productStock.innerText = `Stock: ${productItem.stock}`
  return productStock
}

productItemElement.append(
    itemName(productItem),
    itemImage(productItem),
    itemDescription(productItem),
    itemPrice(productItem),
    itemRating(productItem),
    itemStock(productItem)
  )
  productContainer.appendChild(productItemElement)
}