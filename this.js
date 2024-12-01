const person={
    name: "spongebob",
    food:"burger",
    message : function(){
        console.log(`The message is ${this.name}`);   
    }
    
}

person.message();

/** this here refers to the object's name => the object here is person so this.name means person.name */

const person1={
    name: "patrick",
    food:"pizza",
    message : function(){
        console.log(`The message is ${this.name}`);   
    }
    
}

person.message();
person1.message();
 // this does not work in arrow function