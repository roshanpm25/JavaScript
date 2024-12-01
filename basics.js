/* LESSON - 1

console.log("hello");
console.log([1,2,3]);
console.table({n:'d',a:3});
console.warn("hi");
console.time("start")
    for(i=0;i<2;i++)
        {
        console.log(i);
        }
console.timeEnd("TimerEnd");*/

/*----------------------------*/


/* LESSON -2 
var a1=10;
var b1=40;

console.log(a1+b1);

let a=10;
let b=40;

console.log(a);

const a2=55;
const b2=66;
console.log(a2+b2);

/*value assignment*/
/*
const student={'name1':'rose','age':12};
console.table(student);
console.log(student.name1);

student.name1='roshan';   /*reassigning value of name1 in const, through object,which cant be done  in var,let
console.table(student);

--------------------------------------------
*/


/* LESSON - 3 : TO FIND THE TYPE OF A VALUE GIVEN IN CONSOLE 

*--> PRIMITIVE DATA TYPES <--*

a=10;
console.log(typeof a);  **NUMBER**

b=1.0;
console.log(typeof b);  **NUMBER** 

var n="hello";
console.log(typeof n);  **STRING**

var d=true;
console.log(typeof d);      **BOOLEAN**

var E=null;
console.log(typeof E);  **OBJECT BECAUSE IT ITSELF A DATA TYPE** 

var m;
console.log(typeof m);  **UNDEFINED NO VALUE GIVEN**

 const w=Symbol()
 console.log(w);        **SYMBOL GENERATES UNIQUE CharacterData, USED IN OBJECT** 


 ** --> REFERENCE DATA TYPES <--**

var course=['c','java','cpp'];  //OBJECT
console.log(typeof course);

var da=new Date();
console.log(typeof da);     //RETURNS TYPE OBJECT
console.log( da)            //SHOWS DATE

--------------------------------------------------
*/

/* LESSON - 4: TYPE CONVERSION 

b=1.0;
console.log(typeof b); //NUMBER

b=String(b);
console.log(typeof b); //STRING

b=true;
console.log(typeof b); //BOOLEAN

b=String(b);
console.log(typeof b);  //STRING


b=true;
console.log(typeof b);
b=b.toString();         //TO_STRING FUNCTION
console.log(typeof b); 

---------------------------------------------------
*/

/* LESSON - 5 TYPE COERCION 

let a= "25";
let b=50;
console.log(a+b);  //CONCATINATION

let a1= "25";
let b1=50;
b1=Number(a1);
console.log(a1+b1); //ADDITION

------------------------------------*/

/* LESSON - 6  OPERATORS 
I-->ARITHMETIC OPERATOR<--

let a1= 35;
let b1=50;
let c;
c=a1+b1;
c1=a1-b1;
d=2**3;
d=d--;
d=--d;
console.log(c);
console.log(d);

------------------------------------*/

/* --> ASSIGNMENT OPERATION <--
let a=10;
 a+=5;
 console.log(a);
 -----------------------------------

 --> COMPARISON OPERATOR <--


let a= 20;
let b=49;
console.log(a==b); //FALSE

let a1= 20;
let b1= "20";
console.log(a1==b1); // TRUE -- ENOUGH IF NUMBERS INSIDE  STRING IS SAME
console.log(a1===b1); // FALSE-- DATATYPE AND VALUE MUST BE SAME 

------------------------------------
 
--> RELATIONAL OPERATOR <--


let a= 10;
let b= 20;
console.log("greater: ",a>b); //FALSE 

-----------------------------------------

---> LOGICAL OPERATOR  and,or,not <---


let a= 10;
let b= 20;
console.log(a<20 && a>5) //true

----------------------------------------

--> STRICT EQUALITY / IDENTITY OPERATOR -->

let a= 10;
let b= '10';
console.log(a===b) //false

------------------------------------------

--> TERNARY OPERATOR <---


const age=14;
console.log(age>18 ? 'yes':'no'); // no

// HANDLING NULL VALUES

function hello(name1)
{
    console.log("hello "+name1);
}
hello("rose");

function hello1(name1)
{
 const res=name1?name1: "no name"; // if any name present print that name else print the no name
    console.log("hello "+res);
}
hello1(null);

// HANDLING NULL IN OBJECT TYPES

user={'name':"abc", 'age': 67};
console.log(user.name);  //abc

const greeting=(user)=> {
    const name=user.name? user.name : "sorry no name";  //CHECKS FOR NAMEIS PRESENT OR NOT
    return "hello " + name;
}
    console.log(greeting(user)); //functions work when () RE PRESENT INSIDE
    

        // INCREMENT ++ / DECREMENT -- OPERATOR

        let a=3;
        const b=a++;
        console.log("a",a , "b",b); //postfix a=4 b=3 first assigns value to b then increments  
        
        let x=3;
        const y=++x;
        console.log("x",x , "y",y); //prefix x=4 y=4 increments and stores the new result in y 
-----------------------------------------------------------------------------------------------------------
        */

/* LESSON - 7 -->CONDITIONAL STATEMENETS {if,else,if else, if else ladder, nested , switch case} <---

let age= prompt("enter age");
if(age>=18 && age!=null)
    { 
        console.log(age+"yes eligible");     //refresh , prompt - input from user
    }
   else if(age<=18 && age==8)
   {
    console.log(age+"yes but eligible"); 
   }
*/

let A=2.55678;
   console.log(A.toFixed(3));       //round off

   let a=2;
   switch(a)
   {
    case 1:
        console.log(a);
break;

case 2:
    console.log(a);
break;
   }//

   //**LOOP -WHILE, dowhile, for loop , nested for loop  , for off loop , for in loop
/*
   var c=1;
   while(c<10)      //WHILE LOOP
    {
        console.log(c);
        c++
    }
   
    // DO WHILE LOOP currently not workingproperly check afterwards

    // FOR LOOP

    for(let i=0;i<10;i++)
        {
            console.log("i "+i);
        }

        let arr=[];
        for(let i=0;i<10;i++)
            {
                arr.push(i);        //pushes each element from 0to10 inside arr
            }
            console.log(arr);       //[0,1,2,...,9]
            console.log(arr[4]);       //returns element in 4th position
            
//NESTED FOR LOOP -- double loop

let num=[];
for(let j=0;j<10;j++)  
    {
        num.push([]);       //num[0]

        for(let k=0;k<3;k++)
            {
num[j].push(k);     //num[0]={0,1,2}
            }
    }
    console.log(num);
    console.table(num); /*(index)
   
    0	0	1	2
    1	0	1	2
    2	0	1	2
    3	0	1	2
    4	0	1	2
    5	0	1	2
    6	0	1	2
    7	0	1	2
    8	0	1	2
    9	0	1	2
    Array(10) */

    //FOR OFF LOOP:
/*
    let name1=['a','b','c'];

    for(let n of name1)
{
    console.log(n); //to print all the elements in the array
}


//FOR IN LOOP ---> to get key and value pair

let key_v={
    namee:"rose",
age:10,
gender:'f',
};

for (let vals in key_v){
    console.log(vals);          //prints the key value
    console.log(key_v[vals]);   //prints the values of the key
}

------------------------------------------------------------------------
*/

/*  LESSON 8 MATH & STRING FUNCTIONS 

// MATH FUNCTION 

let z
z=Math.PI;
a=Math.E;
console.log(z);  
console.log(a);        
v=Math.abs(-98);
v=Math.max(19,34,56,33);
v=Math.random()*50+1;
v=Math.sign(-20);  //- =>-1 ,+ve =>1 , 0=>0
v=Math.sin(98);
console.log(v);


//prints math function
// ,floor , . ceil , .round, .log , .sqrt, .abs, .trunc, .pow, .random, .

// ** STRING FUNCTION  **

// ___---->>  1. CONCATENATION

let fn="hello";
let sn="rose";

console.log(fn+" "+sn);   // " " for space >>manual
console.log(fn.concat(" ", sn));  // in built function 

// ___---->> 2. APPEND

d="hi  ";
d+= "hello"
console.log(d);

// ___---->> 3. ESCAPING

let e= 'she can\'t run';        // for using ' '
console.log(e);

// ___---->> 4. LENGTH 

console.log(fn.length);

console.log(sn.toUpperCase());      // UPPER CASE

// ___---->> 5. INDEX OF FUNCTION 

console.log(fn.indexOf('o'));       // returns the location of the element

// ___---->> 6. CHAR_AT FUNCTION

console.log(fn.charAt(1));      // returns character present in location 1

console.log(sn.charCodeAt(1));      // ASCI VALUE OF O

// ___---->> 7. SLICING FUNCTION

console.log(fn.substr(0,3));        // substring --- strike  because old version

let text="wee33442rfc";
console.log(text.substring(0,5));       

console.log(text.substring(4,0));       // starting value small than ending value takes the ulta 

console.log(text.substring(39,50));         //wrong number

console.log(text.slice(2,4));

console.log(text.slice(4,2));       // reverse so gone wrong -- not like substring

console.log(text.slice(-3))         //last 3 values

// ___---->> 8. SPLIT FUNCTION

let demo="abc def ghi";
console.table(demo.split(" "));         //splits each word according to the given condition here the condition given is space

// ___---->> 9. REPLACE 

var r= "i am rose";
console.log(r);
console.log(r.replace("rose","roshan"));

// ___---->> 10. INCLUDES FUNCTION 

let e2= ['a','b','c'];
console.log(e2.includes('b'));  // check if b is present in the array or not

// ___---->> 11. TRIM FUNCTION 

var r1=" abd "
console.log(r1.length); // trims exxtra spaces
r1=r1.trim();
console.log(r1.length);

// ___---->> 12. PAD START ADD NUMBERS / CHARACTERS 

let y="5";
console.log(y.padStart(5,0)); // prints 5 zeroes before 5

console.log(y.padEnd(4, '#'));

// ___---->> 13. LONG LITERAL SRINGS 

let para= "Lorem ipsum dolor sit amet\ consectetur adipisicing\ elit. Explicabo, obcaecati"
console.log(para);      //prints line wise

// ___---->> 14. CONVERT ASCII TO CHAR  

console.log(String.fromCharCode(65,68,70)); 

------------------------------------------------------------------------------------------------------- 

LESSON 9 FUNCTIONS 

function add(a,b)
{
    return a+b;

}

console.log(add(30,500));


//  ===> FUNCTION WITH ARBITARY ARGUMENTS -- args inbuilt keyword, in java whatever how many ever keywords we give , it considers as an array and process the function

function sum()
{
    let total=0;
    for (let i=0;i<arguments.length;i++)  // length-- to count the number of arguments we have entered inside and to run accordingly
        {
        total+=arguments[i];  
    }
    return total;
}

console.log(sum(23,33,10)); //what so many parameters

//  ===> FUNCTION WITH EXPRESSION 

const add1 = function(a,b)  // storing the function inside a variable 
{
    return a+b;
}

console.log(add1(13,33));

//  ===> FAT ARROW FUNCTION

const add2=(a,b)=>{
    return a+b;
}
console.log(add2(90,77));

// 1. using arrow function with map ()

let nar=[1,2,3,4];
let dn=nar.map(nar=>nar+2);
console.log(dn);

// 2. using filters  --> need words more tha 5 letters

let words=['ugedhbcjhd','dd','ufhdcb','ees'];
console.log(words.filter(words=>words.length>5));

// 3. use arrow functions with reduce():

console.log(nar);
let tot=nar.reduce((sum,nar)=>sum+nar,0);       //sums and adds  sum--> in built function
console.log(tot);

// 4. use arrow to create a closure:

let cc=()=>
    {
        let c=0;
        return ()=> 
            {
                c++;
                return c;
            }
    };
    let c1=cc();
    console.log(c1());
    console.log(c1());
    ---------------------------------------------------------------------
    

    LESSON 10 --> CALL BACK FUNCTION <--- 

    function a1()
    {
        console.log("hello hey");
    }

    function b(c)
    {
        c();
    }
    b(a1);

    // set time function

    setInterval(function()
    { 
        for(i=0;i<5;i++){
            
        console.log("prints"+ i);}
    }, 3000);

--------------------------------------------------------------------
   
*/

/*  LESSON 11 --> ARRAY CONCEPTS <--- 
*/

let b=new Array(10,11,12);
console.table(b);       // 1

let c= new Array("joes", 30, true, {
    tamil:100, eng:54       // index 0, 1 ,2 ,3rd index tamil, eng
});
console.table(c);


// ARRAY METHODS + OPERATIONS

// 1. FOR EACH


const narr=[1,2,3,4];
narr.forEach()  // 3 parameters --> value, index , array

