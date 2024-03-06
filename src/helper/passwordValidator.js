const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

function validatePassword(password){
    if(password.length < 8){
        return false;
    }

    if(!regex.test(password)){
        return false;
    }

    return true;
}

export default validatePassword;