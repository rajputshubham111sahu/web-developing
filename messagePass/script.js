(function(){
    const form = document.querySelector('#messageForm');
    //Set up Submit Button

    form.addEventListener('submit', function(e){
        //prevent the form's default submission
        e.preventDefault()
        //get user input from form
        const message = document.querySelector('#message');
        const alertMsg = document.querySelector('.alertMsg');
        const messageContent = document.querySelector('.messageContent');

        if(message.value === "") {
            //adding class "show" and removing class "alertMsg" to display the content 
            alertMsg.classList.add('show')
            alertMsg.classList.remove('alertMsg')
            //setting time interval to automatic remove the above changes
            setTimeout(function(){
                alertMsg.classList.remove('show')
                alertMsg.classList.add('alertMsg')
            }, 2000)
        } else {
            //Change message content and clear input message
            
            messageContent.textContent = message.value;
            message.value = ""
        }
       
        console.log(alertMsg);

    })
}) ();  