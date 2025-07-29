const uname = document.getElementById('username');
const Email = document.getElementById('email');
const pass = document.getElementById('Password');

function SetSuccess(input){
    formGroup =input.parentElement;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
    const span = formGroup.querySelector('span');
    span.innerHTML = 'success';
    span.style.color = 'green';
}
function SetError(input, message){
    formGroup =input.parentElement;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    const span = formGroup.querySelector('span');
    span.innerHTML = message;
    span.style.color = 'red';
}
uname.addEventListener('keyup', function(){
    let uValue = uname.value.trim();
    if(uValue.length>= 5){
        SetSuccess(uname);
    }
    else if(uValue==''){
        SetError(uname, 'Username not Empty');
    }
    else{
        SetError(uname, 'Username must have 5 or more than');
    }
});
Email.addEventListener('keyup', function(){
    let eValue = Email.value.trim();

    if( eValue.length >=5  && eValue.endsWith('@gmail.com') ){
        SetSuccess(Email);
    }
    else if( eValue.length < 5){
        SetError(Email, 'email must have 5 or more than')
    }
    else if(eValue == ''){
        SetError(Email, 'email not Empty');
    }
    else{
        SetError(Email, 'Email must have @gmail.com at end');
    }
});

pass.addEventListener('keyup', function () {
    let pValue = pass.value.trim();

    if (pValue === '') {
        SetError(pass, 'Password cannot be empty');
    }
    else if (pValue.length < 8) {
        SetError(pass, 'Password must be at least 8 characters');
    }
    else if (!/[A-Z]/.test(pValue)) {
        SetError(pass, 'Password must contain at least one uppercase letter');
    }
    else if (!/[a-z]/.test(pValue)) {
        SetError(pass, 'Password must contain at least one lowercase letter');
    }
    else if (!/[0-9]/.test(pValue)) {
        SetError(pass, 'Password must contain at least one number');
    }
    else if (!/[@$!%*?&]/.test(pValue)) {
        SetError(pass, 'Password must contain at least one special character (@$!%*?&)');
    }
    else {
        SetSuccess(pass);
    }
});
const togglePass = document.getElementById('togglePass');

togglePass.addEventListener('click', function() {
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);

    // Toggle icon class
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});
