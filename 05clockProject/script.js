var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

// getting it to show the current time on the page
 var showCurrentTime = function(){
   
    //  display the time on web page
     var clock = document.getElementById("clock");
    
     var currentTime = new Date();
     
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";
    
     // set hours
     if(hours > noon) {
         meridian = "PM";
     }
     if(hours > noon){
         hours = hours - 12;
     }
    
     //  set minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    }    
    
    // set seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    
    // puttinng strings together to get the full time
    var clockTime = hours + ":" + minutes + ":" + seconds + ":" + meridian + "!";
    
     clock.innerText = clockTime;
    
};
    //Getting the clock to increment on its own change its output

    var updateClock = function() {

        var time = new Date().getHours();
        var messageText;
        var image = "normalTime.jpg";
        
        var timeEventJS = document.getElementById('timeEvent'); 
        var locateImage = document.getElementById('locateImage');

        if (time == partyTime) {
            image = "./images/partyTime.jpg";
            messageText = "Let's Party!";
        }
        else if(time == wakeUpTime) {
            image = "./images/wakeUpTime.jpg";
            messageText = "Its Wake UP time.";
        }
        else if (time == lunchTime) {
            image = "./images/lunchTime.jpg";
            messageText = "Lunch Time, Lets have some lunch.";
        }
        else if (time == napTime) {
            image = "./images/napTime.jpg";
            messageText = "It's Nap time. Sleep tight.";
        }
        else if (time < noon) {
            image = "./images/morning.jpg";
            messageText = "Good Morning!";
        }
        else if (time >= evening) {
            image = "./images/evening.jpg";
            messageText = "Good Evening";
        }
        else {
            image = "./images/afternoon.jpg";
            messageText = "Good Afternoon!";
        }

        
        console.log(messageText);
        timeEventJS.innerText = messageText;
        locateImage.src = image;
        showCurrentTime();
    };
    updateClock();

    //Getting the clock to increment once a second

    var oneSecond =1000;
    setInterval(updateClock, oneSecond);

    
    //Getting party time button to work

    var partyButton = document.getElementById('partyTimeButton');
    
    var partyEvent = function() {
        if (partyTime < 0) {
            partyTime = new Date().getHours();
            partyTimeButton.innerText = "PARYT OVER!";
            partyTimeButton.style.backgroundColor = "#0A8DAB";
        }
        else {
            partyTime = -1;
            partyTimeButton.innerText = "PARTY TIME!";
            partyTimeButton.style.backgroundColor = "#222";
        }
    };

    partyButton.addEventListener("click", partyEvent);
    partyEvent();

    //activate wake up selector

    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
    var wakeUpEvent = function() {
        wakeUpTime = wakeUpTimeSelector.value;
    };
    wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
    

    //activate lunnch  selector

    var lunchTimeSelector = document.getElementById('lunchTimeSelector');
    var lunchEvent = function() {
        lunchTime = lunchTimeSelector.value;
    };
    lunchTimeSelector.addEventListener('change', lunchEvent);



    //activate nap time selector

    var napTimeSelector = document.getElementById("napTimeSelector");
    var napEvent = function() {
        napTime = napTimeSelector.value;
    };
    napTimeSelector.addEventListener('change', napEvent);

