// Promises --!

//pending,resolve,reject

//.then success case resolve 
//.catch failur  reject




//.then() and .catch()


const myPromise = new Promise((resolve, reject) => {

    let age = 20;

    if(age >= 18){

        resolve("Eligible to Vote");

    }else{

        reject("Not Eligible");

    }

});

myPromise
.then((result) => {

    console.log(result);

})
.catch((error) => {

    console.log(error);

});



//callback and promises

function getData(callback){

    setTimeout(()=>{

        callback("User Data");

    },2000);

}

getData((data)=>{

    console.log(data);

});
function getData(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("User Data");

        },2000);

    });

}

getData().then((data)=>{

    console.log(data);

});

































































