const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

function validatePassword () {
    let valid = false;

    const password = password.value.trim();
    if(!isShort(password.length, 8)) {
        error('Password lenght must be > 8');
    }else if(!isLong(password.length, 20)) {
        error('Password lenght must be < 20');
    }else if(!isLowercase(password)) {
        error('Password must contain atleast one lowercase letter')
    }else if(!isUppercase(password)) {
        error('Password must contain atleast one uppercase letter')
    }else if(!isNumeric(password)) {
        error('Password must contain atleast one numeric digit')
    }else if(!isSpecialCharacters(password)) {
        error('Password must contain atleast one special character')
    }else{
        valid = true;
    }

    return valid;
}

const isLowercase = (password) => {
    const re = new RegExp("^(?=.*[a-z])");
    return re.test(password);
}

const isUppercase = (password) => {
    const re = new RegExp("^(?=.*[A-Z])");yh;
    return re.test(password);
}

const isNumeric = (password) => {
    const re = new RegExp("^(?=.*[0-9])");
    return re.test(password);
}

const isSpecialCharacters = (password) => {
    const re = new RegExp("^(?=.*[!@#\$%\^&\*])");
    return re.test(password);
}


submit.addEventListener('click', (event) => {
    event.preventDefault();

    if (password.value.trim() == '') {
        error(password, 'Input password');
    } else {
        success(password);
    }
});

function error(element, message) {
    const p = document.querySelector('p');
    p.textContent = message;
}

function success(element) {
    const p = document.querySelector('p');
    p.textContent = '';
}

