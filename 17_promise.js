
// const isNotesAvailabe= false;
// const promiseNotes= new Promise(function(success,reject){
// if (isNotesAvailabe) {
//     success("Sharing the notes .. Here you go ..")
// }
// reject('Sorry guys.. I didnt get time')
// })
// promiseNotes.then(function(success){
//     console.log(success);
//     console.log("Thank You Master");    
// }).catch(function(failure){
// console.log(failure);
// console.log('Very Khadus Master');
// }).finally(function(){
//     console.log('I must have my notes ....');
// });



// with arrow function

const isNotesAvailabe= false;
const promiseNotes= new Promise((success,reject)=>{
if (isNotesAvailabe) {
    success("Sharing the notes .. Here you go ..")
}
reject('Sorry guys.. I didnt get time')
})
promiseNotes.then(success=>{ console.log(success);
    console.log("Thank You Master");    
}).catch((failure)=>{
console.log(failure);
console.log('Very Khadus Master');
}).finally(()=>{
    console.log('I must have my notes ....');
});