// const URL="http://localhost:5000/Data"
// let options={
//     "method":"POST",
// "headers":{
//     "content-Type":"application/json"
// },
// "body": JSON.stringify(
//     {
//     "id":"104",
//     "name":"sai",
//     "age":23
//     }
// )}
// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })
// .catch(res=>console.log(res))



// const URL="http://localhost:5000/Data/2"
// let options={
//     "method":"DELETE"
// }
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.statusText)
//     }
// })


// const URL="http://localhost:5000/Data/3"
// let options={
//     "method":"PUT",
// "headers":{
//     "content-Type":"application/json"
// },
// "body": JSON.stringify(
//     {
//     "age":23
//     }
// )}
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })
// .catch(res=>console.log(res))

const URL="http://localhost:5000/Data/2"
let options={
    "method":"PATCH",
"headers":{
    "content-Type":"application/json"
},
"body": JSON.stringify(
    {
    "age":23
    }
)}
fetch(URL,options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
})
.catch(res=>console.log(res))

