const form=document.getElementById('form')
const username= document.getElementById('Username');
const email= document.getElementById('Email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');


//email validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)){
        showSuccess(email);
    }else showError(email, "invalid email");
}
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checklength(username, 3, 15);
    checklength(password, 6, 25);
    checkPasswordMatch(password, password2);
    validateEmail(email);
})

//checking the fields required
function checkRequired(inputArr){

    inputArr.forEach(function(input) {
       if(input.value.trim() ===''){
           showError(input, `${(getfieldname(input))} is required`);
       }
       else{
            showSuccess(input);
       }
    });
    
    }

  function  getfieldname(input){
        return input.id.charAt(0).toUpperCase()+input.id.slice(1);
    }
    
    function checklength(input,min, max){
        if(input.value.length<min){
            showError(input, `${(getfieldname(input))} must be at least ${min} characters`)
        }else if(input.value,length>max){
            showError(input, `${(getfieldname(input))} must be less than ${max} characters`)
        }
    }

function showError(input, message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl= input.parentElement;
    formControl.className='form-control success'; 
}

function checkPasswordMatch(input1, input2){
    if(input1.value!== input2.value){
        showError(input2,"password do not match");
    }
}