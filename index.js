let validated = true;
function validFirstName(){
    const firstName = document.getElementById('first-name').value;
    if(!firstName){
        const error = document.getElementById('first-error');
        error.innerHTML ="Provide first Name!"
        error.classList.add('text-danger');
        validated = false;
    } else{
        const pattern = /^[A-Za-z]+$/;
        if(!pattern.test(firstName)){
            const error = document.getElementById('first-error');
            error.innerHTML ="Enter Valid String!"
            error.classList.add('text-danger');
            validated = false;
            
        }
        else{
            const error = document.getElementById('first-error');
            error.innerHTML =""
            error.classList.remove('text-danger');

        }
    }
    
}

function validLastName(){
    const lastName = document.getElementById('last-name').value;
    if(!lastName){
        const error = document.getElementById('last-error');
        error.innerHTML ="Provide Last Name!"
        error.classList.add('text-danger');
        validated = false;
    } else{
        const pattern = /^[A-Za-z]+$/;
        if(!pattern.test(lastName)){
            const error = document.getElementById('last-error');
            error.innerHTML ="Enter Valid String!"
            error.classList.add('text-danger');
            validated = false;
            
        }
        else{
            const error = document.getElementById('last-error');
            error.innerHTML =''
            error.classList.remove('text-danger');

        }
    }
    
}

function validDOB(){
    const dob =  document.getElementById('dob').value;
    const error =  document.getElementById('dob-error');
    if(!dob){
        error.innerHTML = 'Provide DOB!';
        error.classList.add('text-danger');
        validated = false;
    } else{
        error.innerHTML = '';
        error.classList.remove('text-danger');
    }

}

function validBloodGroup() {
    const bloodGroup = document.getElementById('blood-group').value;
    if(bloodGroup == ""){
        const error = document.getElementById('blood-error');
        error.innerHTML = "Choose a valid blood group!";
        error.classList.add('text-danger');
        validated =  false;
    }
    else{
        const error = document.getElementById('blood-error');
        error.innerHTML =""
        error.classList.remove('text-danger');

    }
}

function validEmail() {
    const email = document.getElementById('email').value;
    if(!email){
        const error = document.getElementById('email-error');
        error.innerHTML = "Provide Email!";
        error.classList.add('text-danger');
        validated =  false;
    } else{
        const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!pattern.test(email)){
            const error = document.getElementById('email-error');
            error.innerHTML = "Enter a valid Email!";
            error.classList.add('text-danger');
            validated =  false;

        }
        else{
            const error = document.getElementById('email-error');
            error.innerHTML =""
            error.classList.remove('text-danger');

        }   

      }
    

}

function validatePhone(){
    const phone = document.getElementById('phone').value;
    if(!phone){
        const error = document.getElementById('phone-error');
        error.innerHTML = "Provide Phone!";
        error.classList.add('text-danger');
        validated =  false;

    } else{
        const pattern = /^[6-9][0-9]{9}$/; 
        if(!pattern.test(phone)){
            const error = document.getElementById('phone-error');
            error.innerHTML = "Enter a valid phone number!";
            error.classList.add('text-danger');
            validated =  false;
        }
        else{
            const error = document.getElementById('phone-error');
            error.innerHTML =""
            error.classList.remove('text-danger');

        }
    }
}


function validAddress(){
    const address = document.getElementById('address').value;
    if(!address){
            const error = document.getElementById('address-error');
            error.innerHTML = "Provide address line-1!";
            error.classList.add('text-danger');
            validated =  false;

    } else{
        const pattern = /^[A-Za-z0-9\,\.\- ]+$/;
        if(!pattern.test(address)){
            const error = document.getElementById('address-error');
            error.innerHTML = "Enter a valid address!";
            error.classList.add('text-danger');
            validated =  false;
        }
        else{
            const error = document.getElementById('address-error');
            error.innerHTML =""
            error.classList.remove('text-danger');

        }
    }

}

function validateCity(){
    const city =  document.getElementById('city').value;
    const error = document.getElementById('city-error');
    if(!city){
        error.innerHTML = 'Provide city !';
        error.classList.add('text-danger');
        validated = false;
    } else{
        const pattern = /^[A-Za-z]+$/;
        if(!pattern.test(city)){
            error.innerHTML = 'Enter a valid string !';
            error.classList.add('text-danger');
            validated = false;

        }
        else{
            error.innerHTML = '';
            error.classList.remove('text-danger');
        }
    }
}

function validAgree(){
    const agree = document.getElementById('agree').checked;
    const error = document.getElementById('agree-error');
    //console.log(agree);
    if(!agree){
        error.innerHTML = 'You must agree before submitting !'
        error.classList.add('text-danger');
        validated = false;
    }
    else{
        error.innerHTML = "";
        error.classList.remove('text-danger');
    }
    
}
function validState(){
    const state = document.getElementById('state').value;
    const error = document.getElementById('state-error');
    if(state === ''){
        error.innerHTML = 'Provide State';
        error.classList.add('text-danger');
        validated =  false;
    } else{
        error.innerHTML = '';
        error.classList.remove('text-danger');
    }
}

function validZipCode(){
    const zip =  document.getElementById('zip-code').value;
    const error =  document.getElementById('zip-error');
    if(!zip){
        error.innerHTML = "Provide zip code!";
        error.classList.add('text-danger');
        validated  = false;
    } else{
        const pattern = /^[1-9][0-9]{5}$/
        if(!pattern.test(zip)){
            error.innerHTML = 'Enter valid Indian Zip Code';
            error.classList.add('text-danger');
            validated = false;
        } else{
            error.innerHTML = '';
            error.classList.remove('text-danger');
        }
    }
}

function validation(){
    validated  = true;
     validFirstName();
     validLastName();
      validDOB();
    validBloodGroup();
    validEmail();
    validatePhone();
    validAddress();
    validAgree();
    validState();
    validateCity();
    validZipCode();
    if(validated)
        console.log("Validated");
    return validated;

    

   


}