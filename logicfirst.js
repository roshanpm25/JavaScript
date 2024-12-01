//let a = prompt("enter tickets");
//console.log("you pay ", Number(a)*10)

let msg = document.getElementById("msg")
msg.innerHTML = "manipulate html using js"

//slice (start,end)
//substirng (start,end)
//substr(start, length) from 4th till the next 10th place
//trim- trims the space

let name1 ="roshan";
let r1= Math.floor(Math.random() * 6) + 1;

console.log(name1[r1]);

//use backtick when more no of variables and str are used

let a=5;
console.log(`you have ${a} items in your cart
Your bill amount is $ ${a*10} `);

//join- converts array to string


// split - convert string to array
let name ="ros, han";
let s=name.split(",");
console.log(s);

//user object

user ={
    name:"roshan",
    age:19,

    buy: function(){
        console.log("i like to buy cars");
    }
}

console.log(user.age);
user.name="roshanpm";
console.log(user.name);
user.buy();

// for in

user ={
    name:"roshan",
    age:19,
}

for(let i in user ){        // to print only the key values
    console.log(i);
}

// function 

// default parameters and function expression

let greet = function(name='there')
{
    console.log('hi',name)
}

greet("roshan");
greet();

// arrow func
let volume =(l,b,h)=>(
    l*b*h)
   

console.log(volume(1,3,4));

// generators concept 

// callback -- passing a function as an argument to another function

function greet1(name){
    console.log("hello", name)
}

function greet2(name){
    console.log("hello no 2", name)
}
function greet3(callbackfunc){
    callbackfunc("rosheee")
}

greet3(greet1);     //greet3 is called, and greet1 func is passed as an arg
//greet3(greet1){ greet1("roshee")}

//for each 

arr =['roshee','sandyy','rubi','samyu']

arr.forEach(printfunc) // passing a call backfunction print func 

function printfunc(val){
    console.log(val)
}

// exercise 1

arr2d = [
    ['a','b','c'],
    ['c','e','f'],
    ['d','e','d']
];

//result = {a:1,  b:1, c:2}

console.log(arr2d.flat())

let count = arr2d.flat().reduce((a,i)=>{
        if(a[i]) // is c present in accumulator? yes then inc the val
            a[i]++
        else
            a[i]=1      //a=1,b=1,c=1
        return a
}, {});

console.log(count)

// exercise 2

ar1=[4,6,2,3,1,1,3,5,7,8,4,3]
let dup=ar1.reduce((acc,i)=>{
    if(acc[i])
        acc[i]++
    else
    acc[i]=1
    return acc
}

, {}    //new value is storred here 
);
console.log("\n",ar1)
console.log(dup)
console.log(ar1.filter(i=>dup[i]===1))

//exercise 3

let named = "Robert Andrew George";
let res=named.split(' ').map(i => i[0]).join('')
console.log(res);

//exercise 4

let ip = [6,-5,7,-2,4,6,-1];
let r = ip.filter(i=>i>0).reduce((a,b)=> a+b) // a stores result, b stores current value
console.log(r);


//set - collection of values, unique values

let a1=[1,1,2,2,3,3];
let b = new Set(a1)
console.log(a1)
console.log(b)
b.add(5)

//key - occur only once 

let b1= new Map()
b1.set('a',1)
b1.set('b',31)
b1.set('c',21)

for(let i of b1){
    console.log(i)
}




var twoSum = function(nums, target) {
    


};

    console.log(twoSum([2,7,11,15],9))

   //classes

   let user1={
    name:"roshan", age:21,

   }

   let user2={
    name:"arsh", age:11,
   }

   let user3={
    name:"ayferrr", age:11,
   }

  

   //login,logout are same so we keep them in a class

   class User{      //common template
    static NoOfUser=0;  //when we want to create a variable to store the work in a class 
    constructor(name,age){   // arsrosh gets copied here and 21 also
        //instance variable   
        this.name=name;
            this.age=age;
            User.NoOfUser++;
    }

    login(){
        console.log("hey!,its me",this.name);
        return this
    }
    logout(){
        console.log(`logout , i am ${this.age} old`);
    }

   }

   let u1 = new User("arshrosh",12); // when we initialize a new obj u1, it passes to the constructor
   let u2 = new User("arsheee",11);
   console.log("no of users created", User.NoOfUser )
   u1.login();
   u1.logout();

//when each time a u1 is created, the constructor is called , and ther user count is incrememnted

   //OOPS CONCEPT 

   u2.login().logout(); // method chaining where login returns as an object and obj.logout() is called

   // synchronous - step by step completion, js is synchronous in nature 
   /* to make js asynchronous in nature, we need browser's help */

   console.log('step 1')
   console.log('step 2')
   console.log('step 3')

   setTimeout(()=>
    console.log('s1'),4000
)
   setTimeout(()=>console.log('s2'),2000)
   setTimeout(()=>console.log('s3'),1000)

   console.log('bye')

   //promises

   const takkalbook = new Promise((resolve,reject)=>{
    let success=true
    if(success)
        resolve()
    else
        reject()
   })

   takkalbook.then(success) //resolve
   .catch(fail)             //reject

   function success(){
    console.log("success");
   }
   function fail(){
    console.log("fail");
   }