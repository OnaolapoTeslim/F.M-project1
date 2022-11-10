const myFunction = function () {
    const submitButton = document.getElementById("freetrial");
    const lastName = document.getElementById("lastName");
    var Email = document.getElementById("email");
    var passWord = document.getElementById("password");
    const error = document.querySelectorAll(".errorfield");
 const firstName = document.getElementById("firstName");
 function mySubfunction1 () {

 }
if ( firstName.value < 1){
 error[0].innerHTML = "First name cannot be empty !";
    error[0].style.color = "red";
} else {
    error[0].style.display = "none";
}
 if(lastName.value < 1) {
    error[1].innerHTML = "Last name cannot be empty !";
    error[1].style.color = "red";
} else {
    error[1].style.display = "none";
} 
if(Email.value < 1) {
    error[2].innerHTML = "Email cannot be empty !";
    error[2].style.color = "red";
}  else {
    error[2].style.display = "none";
} 
if(passWord.value < 1) {
    error[3].innerHTML = "Password format not supported !";
    error[3].style.color = "red";
}  else {
    error[3].style.display = "none";
}
}




const displayOne = function () {
    const firstName = document.getElementById("firstName");
    if(firstName.value > 1) {
        error[0].innerHTML = "";
    }
}
