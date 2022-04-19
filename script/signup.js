var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var passwordError=document.getElementById("password-error");
var numberError=document.getElementById("number-error");


function validateName(){
    var thename=document.getElementById("name").value;
    if(thename.length==0){
      nameError.innerText="*Enter your name";
      return false;
    }
   if(!thename.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameError.innerText="Enter Full Name"
    }
    nameError.innerText=" ";
    return true;
}

function validateNumber()
{
    var thenumber=document.getElementById('number').value;
 if(thenumber.length==0){
     numberError.innerText="*Please enter your number";
     return false;
 }


 if(!thenumber.match(/\d{3}[-. ]?\d{3}[-. ]?\d{4}/))
 {
    numberError.innerText="*Enter a valid format";
     return false;
     
 }   
 else{ 
     numberError.innerText="";
     return true;}
    
}

function validateEmail(){
    var theemail=document.getElementById("email");
    if(theemail.length==0){
        emailError.innerText="*Please enter your email";
        return false;}
     if(!theemail.match(/^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/)) 
    {emailError.innerText="Inavild Email";
     return false;
 }
 emailError.innerText="";
 return true;

}