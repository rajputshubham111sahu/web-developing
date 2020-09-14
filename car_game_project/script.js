

var steps = [1,2,3,4,5,6];

var button = document.querySelector("#startBtn");
button.addEventListener('click',gameStart);
function gameStart(){
    
    document.querySelector(".results").innerHTML ="";
    
    var petrolPumpLoc =[] ;
    var repeat = 0;
    while (repeat !== 5){
        petrolPumpLoc.push(prompt("Enter Petrol pump locations, Petol Pump locate at :"))
        repeat++}
    
    
    document.querySelector("#petrolPumps").innerHTML = "Game Started..." +"<br>"+ "Petrol Pumps located at:"+ petrolPumpLoc;
    let carLocation = 0;
    let capacity = 30
    var moves = 0;
   
    while(carLocation<100){
       
        var index = Math.floor(Math.random()*6);
        var stepTaken = steps[index];
        carLocation += stepTaken;
        capacity = capacity - stepTaken;
        for(var i=0; i<5; i++){
        if(petrolPumpLoc[i] == carLocation  && capacity <=10) {
            capacity = capacity + 20 ;
            document.querySelector(".results").innerHTML += "Petrol refilled at "
        }}
        if(carLocation >=100){
            document.querySelector(".results").innerHTML +="Congrats! You win.";
        }
        if(capacity <= 0){
            document.querySelector(".results").innerHTML +="Game over! <br>";
            break;
        }
       
        
        moves +=1;
        console.log(stepTaken);
        
    
    document.querySelector(".results").innerHTML +="Move "+moves+ ": Step taken by car "+stepTaken +"kms, Car at " + carLocation+ "km from initial position, Petrol remaining " + capacity + "<br>";
    
    }

}