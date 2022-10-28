//chon server nadarim kodemon ino dorost mikonim ke emtehanesh konim
export const Login=(username,password)=>{
    //resolve zamani ke dorost bod
    //reject zamanike ghalat bod
    return new Promise((resolve,reject)=>{
        if(username==='mobina'&&password==="12345"){
            //pending
            setTimeout(()=>{
                resolve({
                    //fullfilled
                    name:"mobina",
                    age:'23',
                    country:'iran'
                })
            },5000)
 
        }else{
            //rejected
            reject('invalid username or password')
        }

    })
}