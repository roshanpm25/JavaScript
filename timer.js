let ampm=document.getElementById('ampm')

function displayTime(){
    let date= new Date();
    let hr=date.getHours();
    let min=addZero(date.getMinutes());
    let sec=addZero(date.getSeconds());

//to display the time

    if(hr>12)
    {
        hr=hr-12;
        ampm.innerHTML='PM'
    }




    document.getElementById('hours').innerHTML= addZero(hr);
    document.getElementById('mins').innerHTML= min
    document.getElementById('seconds').innerHTML= sec;
}

function addZero(num){
    return num<10?"0"+num : num  
}

// if no less than zero, add a zero before










setInterval(displayTime,1000) // after 1 sec correctly call the display time function and update the current time 