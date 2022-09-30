console.log('Person 1 shows ticket');
console.log('Person 2 shows ticket');

const preMovie = async ()=>{
    const promiseWifeBringsTicket = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })
    let ticket = await promiseWifeBringsTicket;
        console.log(`Wife: I got ${ticket}`);
        console.log('Husband: Lets go in');
        console.log('Wife: no, I am hungry');
    
    const getPopcorn= new Promise((resolve,reject)=>{
        resolve ('popcorn');
    })    
    let popcorn= await getPopcorn
        console.log(`Husband: I got ${popcorn}`);
        console.log('Husband: Lets go in');
        console.log('Wife: no, I need some butter');
    
    const getButter= new Promise ((resolve, reject)=>{
        resolve('Butter');
    })
    let butter = await getButter
        console.log(`Husband: I got ${butter}`);
        console.log('Husband: Anything, Else');
        console.log(`Wife: Can we have some cold-drink`);

    const getColdDrink = new Promise((resolve, reject) => {
        resolve('Colddrink');
    })  
let Colddrink = await getColdDrink;
console.log(`Husband: ${Colddrink} is here`);

    return ticket;
}
preMovie().then((ticket)=>{console.log(`Person 3 got ${ticket}`)});

