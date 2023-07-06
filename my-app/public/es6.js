// declaration of variables

//var age = 20;
const name  = "akram"


/// funtions declaration
const sayHello= (a)=> alert("Hello " + a);

// template string
var city  = "Meknes";
//alert("I am  from " + city)
//alert(`im from ${city}`);

/// spread operator

let person = {
    nom:"ali",
    age:27, 
    city : "Casa",
    hobby: "Basketball"
}
person = {...person,nickname:'rass l9alwa'}
console.log(person)
/// destructuring 
const {nom, age} = person;
//alert(nom+" "+age)

///Array Methods: map -filter -find
// some - every - reduce

let notes = [17,18,9,14,19,8,5];
const resMap= notes.map((value,index,array)=>{
    return value;
})
//alert(resMap)
//filter
const resFilter = notes.filter((value)=>{
    return value <= 10;
})
//alert(resFilter);

//find
const resFind = notes.find((value)=>{
    return value === 10;
})
//alert(resFind)

///every 
const resEvery = notes.every((value) =>{
    return value > 10;
})
//alert(resEvery)

///every 
const resSome = notes.some((value) =>{
   return value > 10;
})
alert(resSome)