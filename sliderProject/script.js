(function(){
    const pic = ["car1", "car2", "car3", "car4", "car5", "car6", "car7"];
    const buttons = document.querySelectorAll(".btn");
    const imageDiv = document.querySelector(".imageContainer");

        let counter = 0;
    buttons.forEach(function(button){
           button.addEventListener('click', function(e){
               if(button.classList.contains('previous')){
                   counter--;
               }
               if(counter < 0){
                   counter = pic.length - 1;
               }
               imageDiv.style.backgroundImage = `url('./images/${pic[counter]}.jpg')`;
               
               
               if(button.classList.contains('next')){
                   counter++;
               }
               if(counter > pic.length-1){
                   counter = 0;
               }
               imageDiv.style.backgroundImage = `url('./images/${pic[counter]}.jpg')`;

               

           }) 
    })
})();