const btn =document.getElementById("btn");
const colortext =document.getElementById("no");
const wrap =document.getElementById("wrap"); // the background change place

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];   // to generate random color 


btn.addEventListener('click',changeBG)

function changeBG(){        //to generate a 6 letter bg color

let colour='#'

for(let i=0;i<6;i++)
{
  
    colour = colour+randomval() //random character is appended 
}

wrap.style.background = colour; // to change the colour
colortext.innerHTML = colour;   //to change colour of the text
console.log(colour)


}

// to return the value 

function randomval(){
    let rv=Math.floor(Math.random()*16)
    return hex[rv]
}