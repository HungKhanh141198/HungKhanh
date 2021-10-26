// input number
var input = prompt("please input a number");

if(isNaN(input))
{
    alert("Please input a positive number!")
}else{
    if(input < 0){
       alert ("Please input a positive number") 
     }else{
        alert ("Congratulations! You did it")
  }
}
// input email
var email = prompt("Please input your email");

if ( email.indexOf('@') === -1||  email.length > 8 || email.charAt(0) === '@' ) {
  alert("Your email is not valid")
}
else {
  alert("Congratulations! You did it")
}