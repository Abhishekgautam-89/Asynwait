function addWater(){
    return new Promise((res, rej)=> {
        res('Water added');
    })
}
function addTea(){
    return new Promise ((res, rej)=>{
        res('tea added');
    })
}
function boilWater(){
    return new Promise ((res, rej)=>{
        res('water boiled');
    })
}
function addMilk(){
    return new Promise ((res, rej)=>{
        res('Milk added');
    })
}
function addSugar(){
    return new Promise ((res, rej)=>{
        res('Sugar added');
    })
}
function teaIsReady(){
    return new Promise ((res, rej)=>{
        res('tea is ready to serve');
    })
}

 let prepareTea = async ()=>{
    
    let msg1 = await addWater();
    console.log(msg1);
    let msg2 = await addTea();
    console.log(msg2);
    let msg3 = await boilWater();
    console.log(msg3);
    let msg4 = await addMilk();
    console.log(msg4);
    let msg5 = await addSugar();
    console.log(msg5);
    let msg6 = await teaIsReady();
    console.log(msg6);
}

prepareTea();