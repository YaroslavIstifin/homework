const my = {
    name: 'Yaroslav',
    age: 19,
    isAdmin: false
}


const users = {
    alex : {
        age: 20,
        isAdmin: true,
        sayHello(name){
            console.log(`Hello ${name}`)
        }
    }
}

users.alex.sayHello('John')




const user = [ 
    {
        name: 'Alex',
        age: 20,
        isAdmin: true,
        
    },
    {
        name: 'Ben',
        age: 20,
        isAdmin: false,
        
    },
    {
        name:'Tom',
        age: 20,
        isAdmin: false,
        
    },
    {
        name:'John',
        age: 20,
        isAdmin: false,
        
    },
    {
        name: 'Tony',
        age: 20,
        isAdmin: true,
        
    },
    {
        name: 'Cavin',
        age: 20,
        isAdmin: false,
        
    }

]

let a = 0
for(let i = 0; i<user.length; i++){
    if(user[i].isAdmin == true){
        a = a + 1 
    }
}
console.log(a)
    
    




