

var errorName=document.getElementById('errorName');
var errorPassword=document.getElementById('errorPassword');

function validateName()
{
    var thename=document.getElementById("name").value;
    if(thename.length==0)
    {
        errorName.innerText="Please Enter Name"
        return false;
    }
    else{
        errorName.innerText=" ";
        return true;
    }
}
function validatePassword()
{
    var password=document.getElementById("password").value;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    
    

    if(password.length==0)
    {
        errorPassword.innerText="Please Enter Password";
    return false;
    }
    if(strongPassword.test(password))
    {
       console.log("Correct")
        return true;
    }
    
    else{
       errorPassword.innerHTML=" ";
        return false;
    }
}
 function validateForm(){
     if(!validateName()||!validatePassword()){
         alert("Incorrect details")
     }
     else{
         alert("Success")
     }
 }

