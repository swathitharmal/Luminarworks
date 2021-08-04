var  temperature=[
    {district:"tvm",temperature:25},
    {district:"kollam",temperature:27},
    {district:"kottayam",temperature:24},
    {district:"ekm",temperature:27},
    {district:"tsr",temperature:25},
    {district:"pkd",temperature:30},
    {district:"tvm",temperature:27},
    {district:"kollam",temperature:25},
    {district:"kottayam",temperature:28},
    {district:"ekm",temperature:29},
    {district:"tsr",temperature:32},
    {district:"pkd",temperature:31},
]

var weather={}

for(let data of temperature){
    let dist=data["district"]
    let temp=data["temperature"]
    if(dist in weather){
        let old_temp=weather[dist]
        if(old_temp<temp){
            weather[dist]=temp
        }
        else{
            weather[dist]=old_temp
        }
    }
    else{
        weather[dist]=temp
    }
}
console.log(weather)



console.log(weather)

function districtSort(data){
    return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1])
}

console.log(districtSort(weather))


// for(let key in weather){
//     console.log(key)
// }

// weather[key]