

const form=document.getElementById('form')
const username= document.getElementById('Username');
const email= document.getElementById('Email');
const password= document.getElementById('password');
const password2= document.getElementById('confirm_password');




//checking the fields required
function checkRequired(inputArr){

inputArr.forEach(function(username) {
   // if(input.value.trim ===''){
       // showError(input, "is required")
     console.log(input.value);
   // }else{
        //showSuccess(input)
  //  }
});

}

form.addEventListener('submit', function(e){
e.preventDefault();
checkRequired([username, email, password, password2]);
}

)



