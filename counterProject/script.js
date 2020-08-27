(function(){
    const buttons = document.querySelectorAll('.button')
    let count = 0
    let limit = document.querySelector('#limit')
    //adding event listener and function to each button
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('prev') && count>-16){
                count--
            }
            else if(button.classList.contains('next') && count<16){
                count++ 
            }
            //selecting the counter text
            const counter = document.querySelector('#countNumber')
            counter.textContent = count
            
            if(count>0){
                counter.style.color = 'darkgreen'
                if(count>15){
                    limit.textContent = "You have reached the upper limit"
                }
                else{
                    limit.textContent = ""
                }
            }
            else if(count<0){
                counter.style.color = 'red'
                if(count<-15){
                    limit.textContent = "You have reached the lower limit"
                }
                else {
                    limit.textContent = ""
                }
            }
            
            else{
                counter.style.color = "#333333"
            }
        })
    
    })
}
)();