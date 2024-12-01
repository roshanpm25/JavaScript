//print the book name html from the given array, using filter
/*let books = [
    {num : 1 , bname : 'HTML'},
    {num : 2 , bname : 'js'},
    {num : 3 , bname : 'css'},
    {num : 3 , bname : 'html'}
]

const search = "HTML".toLowerCase();

const fil = books.filter(bk => 
{
    return bk.bname.toLowerCase().includes(search); // each term is stored in bk
}
)
console.log(fil);
------------------------------------------------------------------------------------------
*/

/* REDUCE FUNCTION -->to add all nos in an array without loops 

let num = [1,2,3,4];
let sum =num.reduce((accumulator,current) => accumulator + current);
console.log(sum);  // accumulator -> store result 

// 2. Flatten an array
let nested_arr = [[1,2,3] ,[4,5,6]];
let new_arr = nested_arr.reduce((accumulator, current )=>
        accumulator.concat(current));
console.log(new_arr);

//3. Find Largest in an array

let nums =[ 1,234,543,66];
let large = nums.reduce((acc,curr)=>{
    return Math.max(acc,curr);
})
console.log(large);     //acc stores 0 first then, curr stores 1, then large is 1, acc also stores 1 
----------------------------------------------------------------------------------
*/

/* SLICE -> to store a set of values in another array 

const numb = [1,2,3,4,5,6,7];
console.log(numb.slice(2,5));
-----------------------------------------------------------------------------------*/

/* SPLICE -> the cut off remaining is stored in another var 

const nu = [1,2,3,4,5,6,7,8,9,10];
//let removes = nums.splice(2);   // cuts after index 2 then stores them
//console.log(removes);       // changes is made in org array
rem =nu.splice(2,2,25,36);
console.log(rem);

const a=[1,2,3,4,45];
a.splice(2,0,100,55);
console.log(a); // insert values without deleting

----------------------------------------------------------------------------------------- */

/* CONCAT

const a =[1,2,3,4];
const b=[4,5,60];
let d= a.concat(b,22,33,44,['a','b','c']);
console.log(d);
------------------------------------------------------------------------------ */

/* SORT 
const a =['ashish','keerthi', 'sam','roshni'];
a.sort();
console.log(a);

const b =[10,100,90,23];
b.sort();
console.log("wrong sort", b);

b.sort((cur,next)=>
{
    return cur-next;
});
console.log("correct sort", b);
-------------------------------------------------------------------------*/

/* FILL -> fills with value
const a =[1,22,33,44,55,2,3,4];
a.fill(25,1,5);
console.log(a);

-----------------------------------------------------------------------------------*/
/* INCLUDES
const inc = ["pen","Pencil","rubber"];
let res = inc.includes("Pencil");
console.log(res);

-------------------------------------------------------------------------------*/

/* JOINS -> joints without an array
const inc = ["pen","Pencil","rubber"];
console.log(inc.join());

-------------------------------------------------------------------------------------*/

/* REVERSE 
const ab=[1,2,3,5,4,7]
ab.reverse();
console.log(ab); 

--------------------------------------------------------------------------------------------*/

/* PUSH -> add values

let n = [1,2,3,34,5]
console.log(n.push(80));
console.log(n);

// merge two arrays

let m=["abc","def","ceg"];
let n=["ws"."fds","fdc"];

m.push(...n);
console.log(m);

-------------------------------------------------------------------------*/

/* POP

const abc=["aravi","sam","george"];
console.log(abc.pop()); // last el is popped and saved
console.log(abc);

--------------------------------------------------------------------- */

/* SHIFT -> remove first el 

const abc=["aravi","sam","george"];
const newel= abc.shift();
console.log(newel);
console.log(abc);

--------------------------------------------------------------------*/

/* UNSHIFT -> add el from starting endex , push -> adds el from last index


const abc=["aravi","sam","george"];
let newn = abc.unshift("new name");
console.log(newn, abc);

----------------------------------------------------------------------- */

/* indexOf 

const abc=["aravi","sam","george"];

let i=abc.indexOf("sam");
console.log(i);

let b="helololo"
i=b.indexOf("l",4);

-------------------------------------------------------------------------*/

/* LastIndexOf --> to find the last occurence 

const abc=["aravi","sam","george","aravi"];

let i=abc.lastIndexOf("aravi");
console.log(i);

----------------------------------------------------------------------*/

/* EVERY AND SOME


const abc=[
    {name: "ram", age:20},
    {name: "sam", age:12},
    {name: "tom", age:30},
];      // every check if allvakues are pos

  function iseligible(value){
    return value.age>=18;
  }

  result  = abc.every(iseligible);          // and gate1
  console.log(result);

  result1  = abc.some(iseligible);      
  console.log(result1);                 //or gate
  
 --------------------------------------------------------------------------------*/
 
 // PRIMITIVE -- the changes made in user 1 does not reflect in user 2
 // REFERENCE -- the user1 add is stored in heap memory, user2=user1, the heap add is assigned to user1, so when any change is made to user1 it reflects in user2
/*
 let a1=[1,2,3,4]       // array is an reference type
 let a2=a1;
 console.log(a1);
 console.log(a2);

 a1.push(30);
 console.log(a1);
 console.log(a2);

----------------------------------------------------------------------------*/

/* clone object -> spread operator 

let a1={a:1,b:2,c:3,d:4};
let b1={a:10,b:20,c:30,d:40};

const c={...a1};
console.log(c);

---------------------------------------------------------------------------------*/

/* CLONE AN ARRAY 
1. SPREAD 


let org=[1,2,3];
let clone = [...org];
console.log(clone);

// slice operator 
let org1=[1,2,3];
let clone1 = org1.slice();
console.log(clone1);

// 3. concat
let cloned= [].concat(org1);
console.log(cloned);

//4. JSON parse method-> convert the array into string using stringify(), then again convert into array

let strings=JSON.parse(JSON.stringify(org1));
console.log(strings);

----------------------------------------------------------------------------------------------------*/

/** different ways to create an object 

const student1= {        //student is an object
    name: "roshan",
    age:10,
    city : "chennai",
  
    about: function(){
        return `${this.name} is from ${this.city}`
    }
};
console.log(student1);
console.log(student1.about()); // roshan is from chennai

//pass multiple objects using a single function

function addstudent(name,city,age)
{
    const infos={};     // define a empty object
    infos.name=name;
    infos.city=city;
    infos.age=age;
    return infos;
}
console.log(addstudent("roshan","chennai",12));

// Object.create is a way to create object

------------------------------------------------------------------------------------------*/

/** OPTIONAL CHAINING (?.)  -> when an user doesnt fill, the address field properly, the whole project crashes 

const user={
    name:"roshan",
}
console.log(user.address?.city); //if there is address, then go to city and print city , if no address,  break it and returns undefined

----------------------------------------------------------------------------------------------------*/

/** FUNCTION INSIDE OBJECT 

const object={
    name:"roshan",
    age:18,
    method1: function(){
        console.log("I am a method");},

        method2:()=>{
            console.log("I am a method2");
      
    }
}
console.log(object);
object.method1();    //prints i am a method

----------------------------------------------------------------------------------------*/

/** DESTRUCTURE AN ARRAY -> seperate the elements in an array 

const numbs=[1,2,3,4,5];
const[a,b,...rest]=numbs;
console.log(a);
console.log(b);
console.log(rest);

//OBJECT DESRTUCT

const user ={ name:"roshan", age:12,gender:"female"};
const{name,age,gender}=user;
console.log(name);
console.log(age);
console.log(gender);

//SWAPPING
let a1=1;
let b1=2;

[a1,b1]=[b1,a1]
console.log(a1);
console.log(b1);

//SKIP UNWANTED VALUES

let abc=[1,2,3,8,4,5];
let[q,,,w,,]=abc;
console.log(q);
console.log(w);

---------------------------------------------------------------------------*/

/** CREATE OBJECTS IN JS 

const user={
    name:"roshan", age:30       //object literal, storing in user
}
console.log(user);

// 2, object constructor 

const person =new Object();
person.name="roshan";
person.age=20;
console.log(person);

//3. Object.create method 

//4. using class
class persons{
    constructor(name,age,job)
    {
        this.name = name;
        this.age= age;
        this.job=job;
    }
}
const p= new persons("roshan",12,"cse");
console.log(p);

------------------------------------------------------------------------------*/

/**ITERATE OBJECTS
// 1. For in loop
const user = {
    name:"roshan", age:30, job:"cse"
};

for(let i in user ){
    console.log(`${i}:${user[i]}`);
}

// 2. using object.keys , object.values

---------------------------------------------------------------------------- */

/** OBJECT INSIDE ARRAYS 

const user = [{
    name:"roshan", age:30, job:"cse"},
   { name:"roshan", age:30, job:"cse"},
];

for(const i of user)
console.log(i.name);

-----------------------------------------------------------------------------*/
/*
// CALL,APPLY,BIND

function welcome() {
    console.log("welcome" + this.user_name); // this is a property of windows , no user_name in windows function
}

const student = {user_name:"roshan"};
welcome.call(student);      // this is student's and using call method we assign the value 

function total(eng,mat)
{
    console.log(this.user_namename+ "got" +(eng+mat)+ "marks")
}
// function call 
total(student,25,25);   //op roshan got 50 marks

//---------------------------------------------------------------------------------

/** APPLY  

let subs = [20,23];
total.apply(student,subs);  // multiple parameters in array form 

//---------------------------------------------------------------------------------

/** BIND 

const fun = total.bind(student,50,70);
console.log(fun)
fun();  // use fun  whenever we need

------------------------------------------------------------------------------------*/

/** CLASS IN JS   //ES5

function Person(name)
{
this.name = name;
}

Person.prototype.sayhello = function(){
    console.log("Helllo my name is " + this.name);
}

var p = new Person("roshannn");
console.log(p);         // the obj p assigns rohannn to name in Perosn 
// op helo my name is roshannn
p.sayhello();

*/
//ES6 
/*
class Person1{
    constructor(name1)
    {
        this.name1=name1;
    }

    sayhello1()
    {
        console.log("this is second one " +this.name1);
    }

}

//var p2=new Person1("name1 is roshan");
//p2.sayhello1();


/** INHERITANCE  

class student extends Person1{
    constructor(name1) {
        super(name1);        // we extend name form above so super 
            }// using super we send the name1 to Parent name1
    
}

var stu = new student("roshee");
stu.sayhello1();

-------------------------------------------------------------------------*/

/** GETTER AND SETTER 

const person ={
    fname : "roshan",
    sname : "pm",
     get full(){                                //get keyword, assigns full as a func 
        return this.fname+" "+this.sname;
    },

};

console.log(person.full);


//get get values 
//setter - set values 

class circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius*2;       
    }

    set diameter(diameter)
    {
        this.radius = diameter/2;       // set value
    }

    get area(){
        return Math.PI*this.radius*this.radius;
    }
}

const c = new circle(20);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);
*/

/** STATIC METHOD  

class Myclass{
    static var="i am a variable";
    static method (){
        console.log("i am a static method");
    }
}

Myclass.method();
console.log(Myclass.var);       // need not assign like : const a new Myclass()*/