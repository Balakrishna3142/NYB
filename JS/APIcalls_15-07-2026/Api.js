//API
//5methods in api
//get;fetching the data
//post;to send the data
//put;it change the entire record
//patch;update only partical data
//delet;to delet the data





//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/albums
//Fe-->API(get)-->BE(Routes,middleware,controllers)


let data=fetch("https://jsonplaceholder.typicode.com/albums")
.then((data)=>{
    return data.json()


})
.then((d) =>{
    data= d;
    console.log(d)})
    .catch((e)=>{
        console.log(e)
    })


console.log(data)


