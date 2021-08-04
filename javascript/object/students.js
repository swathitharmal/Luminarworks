var product={
    item_code:1000,
    mrp:30000,
    name:"f14",
    in_stock:15
}

console.log(product.mrp)

console.log(product.name)

product.mrp-=2000
console.log(product)

if(!("offer" in product)){
    product.offer="25%"
}

console.log(product)
product.in_stock=25
console.log(product)