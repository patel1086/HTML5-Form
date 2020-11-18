//Name Validation
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function(){
    var nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent="Name is Incorrect";
});

//Email Validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
    if(emailRegex.test(email.value))
    emailError.textContent="";
    else emailError.textContent="Email Id is Invalid";
});

//Mobile Number Validation
const mobile = document.querySelector('#mobile');
const mobError = document.querySelector('.mobile-error');
mobile.addEventListener('input',function(){
let mobileRegex = RegExp('[91]{2}[7-9]{1}[0-9]{9}');
if(mobileRegex.test(mobile.value))
mobError.textContent="";
else mobError.textContent="Invalid Mobile number";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});