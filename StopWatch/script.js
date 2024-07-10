const startstopbtn = document.querySelector('#startstopbtn');
const reset = document.querySelector('#resetbtn');
let timer = document.querySelector('.timer');

seconds = 0;
minutes = 0;
hours = 0;

function stopWatch(){
    
    seconds += 1;
    if(seconds / 60 === 1){
        minutes += 1;
        seconds = 0;

        if(minutes / 60 === 1){
            hours +=1
            minutes = 0;
        }
    }
    displayHours = hours > 9 ? hours : '0' + hours.toString();
    displayMinutes = minutes > 9 ? minutes : '0' + minutes.toString();
    displaySeconds = seconds > 9 ? seconds : '0' + seconds.toString();
    timer.innerText = displayHours +':'+ displayMinutes+':'+displaySeconds
}


// creating variables to trigger the timer
timerStatus = 'stopped';
timeInterval = null;



// adding an event to the startstop button
startstopbtn.addEventListener('click',function(){
    if(timerStatus === 'stopped'){
        timeInterval = window.setInterval(stopWatch, 1000);
        timerStatus = 'started';
        startstopbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        startstopbtn.style.backgroundColor = 'orange'; 
    } 
    else{
        window.clearInterval(timeInterval);
        timerStatus = 'stopped';
        startstopbtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        startstopbtn.style.backgroundColor = 'rgb(25, 218, 25)'; 
    }
})



// implementing reset button
reset.addEventListener('click',()=>{
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerText = '00:00:00'
    timerStatus = 'stopped';
    startstopbtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    startstopbtn.style.backgroundColor = 'rgb(25, 218, 25)';
})