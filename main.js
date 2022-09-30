console.log(`Person1 shows ticket`);
console.log(`Person2 shows ticket`);

const promiseWifeBringsTicket = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})
const getPopcorn=promiseWifeBringsTicket.then((t)=>{
    console.log('Husband: Lets go in');
    console.log('Wife: no, I am hungry');
    return new Promise((resolve, reject)=>{
        resolve(`${t} with popcorn`)
    });
})
const getButter=getPopcorn.then((t)=>{
    console.log('Husband: I got popcorn');
    console.log('Husband: Lets go in');
    console.log('Wife: no, I need some butter');
    return new Promise((resolve, reject)=>{
        resolve(`${t} and with butter`)
    });
});

const getColdDrink= getButter.then((t)=>{
    console.log(`Husband: anything else`)
    console.log(`Wife: I need some cold-drink`)
        return new Promise ((resolve, reject)=>{
         resolve(`${t} with colddrink`);
        })    
})
getColdDrink.then((c)=>console.log(`${c}`))


console.log('Person4 shows ticket');
console.log('Person5 shows ticket');