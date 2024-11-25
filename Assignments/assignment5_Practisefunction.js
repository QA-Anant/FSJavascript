// Ecommerce checkout example

// Step 1 : search an item

function searchitem(itemName)
{
   // console.log(`User is searching for item : ${itemName}`)
    console.log(`System has find the item id : ${itemName+10}`)
    return itemName+10
}

function addToCart(itemID)
{
   // console.log(`System is adding the item to cart : ${itemID}`)
    console.log(`System returns cart id : ${itemID+10}`)
    return itemID+10

}

function checkoutToCart(cartdId)
{
   // console.log(`System is checking out the cart with cartid : ${cartdId}`)
    console.log(`System returns checkout id : ${cartdId+10}`)
    return cartdId+10
}

function makePayment(checkoutId)
{
   // console.log(`System is making payment for checkout id : ${checkoutId}`)
    console.log(`System returns payment id : ${checkoutId+10}`)
    return checkoutId+10
}

const searchitemId = searchitem("Iphone")
const cartID = addToCart(searchitemId)
const checkoutToCartId = checkoutToCart(cartID)
const paymentID = makePayment(checkoutToCartId)

