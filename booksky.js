// select pop up , pop overlay, button

var pop_overlay=document.querySelector(".pop-overlay")
var pop_box=document.querySelector(".pop-box")
var add_button=document.getElementById("add-button1")

add_button.addEventListener("click", function()
{
    pop_overlay.style.display="block"
    pop_box.style.display="block"
})      /*to display the pop up card on clicking  + */

/* display none when clicking cancel */

/*if the button has no action page, the page refreshes and loads to the same page*/

var cancelpop= document.getElementById("cancel-book")

cancelpop.addEventListener("click",function(event){
    event.preventDefault() /**to prevent the default refreshing of page */
    pop_overlay.style.display="none"
    pop_box.style.display="none"
})

/** on clicking add, append to the container */

// select container, add-book, title, author...

var container=document.querySelector(".container")
var add_book=document.getElementById("add-book") // to addd book when add is clicked
var title=document.getElementById("book-title")
var author=document.getElementById("book-author")
var description=document.getElementById("book-desc")

 add_book.addEventListener("click",function(event){
event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container") // create a class which has the properties of book-container
  
    div.innerHTML= 
     `<h2>${title.value}</h2>
        <h5>${author.value}</h5>
     <p>${description.value}</p>
     <button onclick=delete_book(event)>delete</button`     //creates a del button template -- get the value present in book-title, creates a h1 for title
 

    container.append(div)
    pop_overlay.style.display="none"

    pop_box.style.display="none" // to remove the box append and then display none
 })

 function delete_book(){
    event.target.parentElement.remove()
 }