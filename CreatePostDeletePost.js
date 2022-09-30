const posts =[
    {title: 'Post1' ,body: 'This is post one'},
    {title: 'Post2' ,body: 'This is post two'}
];

function getPosts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{        
            let output = '';
            posts.forEach((post) => {
                output+=`<li>${post.title} => ${post.body}</li>`;
            });            
            document.body.innerHTML=output;
            var ot=document.body.innerHTML;
            resolve(ot);
        }, 1000);
    })    
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
             
            const error = false;
            if(!error){ 
            
            resolve(posts.push(post));
            }
            else{ 
            reject('Error: Something went wrong');
            }
        },2000);    
    });    
}


function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{            
            if(posts.length>0){
                resolve(posts.pop());
            }
            else
            reject('Inside catch bolck array is empty now');
        }, 1500);
    })    
}
// deletePost().then(getPosts).catch(error=>console.log(error));

async function display(){
    await createPost({title:'Post3', body: 'This is post three'});    
    await getPosts();    
    await deletePost();    
    await getPosts();
    await deletePost();
    await getPosts();
    await deletePost();
    await getPosts();
    await deletePost();   
}
display().catch((a)=>console.log(a));





