let sum=0
let one=function rec(a){
    if(a==0){
        return 0
    }
    sum+=a
    return sum+rec(a-1)

}
console.log(one(10))