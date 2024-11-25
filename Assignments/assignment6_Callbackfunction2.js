// Ecommerce checkout example with callback implementation

function searchitem(itemName,fn)
{
    console.log(`System has find the item id : ${itemName+10}`)   
    fn(itemName+10,checkoutToCart)
}

function addToCart(itemID, fn)
{
    console.log(`System returns cart id : ${itemID+10}`)   
    fn(itemID+10, makePayment)
}

function checkoutToCart(cartdId,fn)
{
    console.log(`System returns checkout id : ${cartdId+10}`)
    makePayment(cartdId+10)
}

function makePayment(checkoutId)
{
   // console.log(`System is making payment for checkout id : ${checkoutId}`)
    console.log(`System returns payment id : ${checkoutId+10}`)
}

const searchitemId = searchitem("Iphone", addToCart)