var nameError=document.getElementById("name-error");
var numberError=document.getElementById("number-error");
var emailError=document.getElementById("email-error");
var passwordBox=document.getElementsByClassName("passwordBox");
var passwordChecker=document.getElementById("passwordText");





function validateName(){
    var thename=document.getElementById("name").value;
    if(thename.length==0){
      nameError.innerText="*Enter your name";
      return false;
    }
   if(!thename.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameError.innerText="Enter Full Name";
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
 

 if(!thenumber.match(/^\d{3}[-. ]?\d{3}[-. ]?\d{4}$/))
 {
    numberError.innerText="*Enter a valid number";
     return false;
     
 }   
 else{ 
     numberError.innerText="";
     return true;}
    
}

function validateEmail()
{
    var theemail=document.getElementById("email").value;
    if(theemail.length==0)
    {
        emailError.innerText="*Please enter your email";
        return false;}
     if(!theemail.match(/^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/)) 
    {emailError.innerText="Inavild Email";
     return false;
 }
 emailError.innerText="";
 return true;

}

function validatePassword()
{
    var thepassword=document.getElementById("password").value;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    passwordChecker.style.color='white';
    passwordChecker.innerText="Password Strength";

    if(thepassword.length==0)
    {
    passwordChecker.innerText="Please Enter Password";
    return false;
    }
    if(strongPassword.test(thepassword))
    {
        passwordChecker.innerText="STRONG";
        passwordChecker.style.color='green';
        
        
        
        return true;
    }
    if(mediumPassword.test(thepassword))
    {
        passwordChecker.innerText=" MEDIUM";
        passwordChecker.style.color='orange';
        return false;
    }
    else{
        passwordChecker.innerText="WEAK";
        passwordChecker.style.color='red';
        return false;
    }
}

function validateForm(){
if(!validateEmail()||!validateName()||!validateNumber()||!validatePassword())
{
    alert("Please enter valid details")
    return false;}
    else{
        alert("Sign In Successfull")
    }
}

    
