var products = [
    { code: 1000, name: "garlic", mrp: 120, aval_qty: 10 },
    { code: 1001, name: "chilly", mrp: 80, aval_qty: 5 },
    { code: 1002, name: "tomato", mrp: 35, aval_qty: 20 },
    { code: 1003, name: "onion", mrp: 40, aval_qty: 37 },
    { code: 1004, name: "potato", mrp: 45, aval_qty: 40 },
    { code: 1005, name: "banana", mrp: 55, aval_qty: 60 },
    { code: 1006, name: "brinjal", mrp: 43, aval_qty: 2 },
    { code: 1007, name: "beetroot", mrp: 38, aval_qty: 5 },
    { code: 1008, name: "carrot", mrp: 60, aval_qty: 0 },
    { code: 1009, name: "bitterguard", mrp: 50, aval_qty: 5 },
    { code: 1010, name: "carrot", mrp: 70, aval_qty: 1 }
]


// var product_names=products.map(item=>item.name)
// console.log(product_names)


// var p_names=products.map(item=>item.name.toUpperCase())
// console.log(p_names)


// var below_fifty=products.filter(item=>item.mrp<50)
// console.log(below_fifty)


// var out_of_stock=products.filter(item=>item.aval_qty==0)
// console.log(out_of_stock)

// var stock=products.filter(item=>item.aval_qty<=10)
// console.log(stock)


// var mid_products = products.filter(item => item.mrp > 50 & item.mrp < 100)
// console.log(mid_products)


// var b_name=products.filter(item=>item.name[0]=='b')
// console.log(b_name)


// var p_offer=products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%")
// console.log(p_offer)
//console.log("products")
// console.log(products)



// only print offer
// var p_offer=products.map(item=>item.mrp>50?item.offer="5%":item.offer="0%")
// console.log(p_offer)

// console.log("products")
// console.log(products)

// var p_offer=products.map(item=>item.mrp>50?item.offer="5%":item.offer="0%")
// console.log(products)


// var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
// console.log(costly_product)

// var low_cost_product=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2)
// console.log(low_cost_product)


var product_details=products.find(item=>item.name=="carrot")
console.log(product_details)


var product_details=products.filter(item=>item.name=="carrot")
console.log(product_details)


var is_available=products.some(item=>item.mrp<30)
console.log(is_available)


var is_available=products.some(item=>item.mrp>30 & item.mrp<50)
console.log(is_available)