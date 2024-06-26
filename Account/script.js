function showSuccess(message) {
    document.getElementById('alertMessage').textContent = message;
    document.querySelector('.modal-content').style.backgroundColor = '#33C481';
    document.querySelector('.modal-content').style.color = '#fefefe';
    document.getElementById('alertModal').style.display = 'block';
}

function showAlert(message) {
    document.getElementById('alertMessage').textContent = message;
    document.querySelector('.modal-content').style.backgroundColor = '#fefefe';
    document.querySelector('.modal-content').style.color = '#000';
    document.getElementById('alertModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('alertModal').style.display = 'none';
}

document.querySelector('.close-btn').onclick = closeModal;

window.onclick = function(event) {
    if (event.target == document.getElementById('alertModal')) {
        closeModal();
    }
}

function validatedata(){

    // Component
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let confirmpass = document.getElementById("confirmpass").value
    
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let agreement = document.getElementById("agreement")

    let gender = male.checked ? "Male" : "Female"

    // Validation

    if(name.length < 5){
        showAlert("Username length must be more than 4 characters")
    }

    else if(!email.endsWith("@gmail.com")){
        showAlert("Email must end with @gmail.com")
    }

    else if(phoneNumberChecker(phoneNumber) === false){
        showAlert("Phone number must be 8 - 12 numbers")
    }
    
    else if(checkAlphanumeric(password) === false){
        showAlert("Password must contain at least 1 character and 1 number")
    }

    else if(password !== confirmpass){
        showAlert("Password not the same")
    }

    else if(!male.checked && !female.checked){
        showAlert("Please check the gender")
    }

    else if(!agreement.checked){
        showAlert("Please check the agreement!")
    }

    else{
        showSuccess("Account Successfully created")
    }

}

// Validation Function

function phoneNumberChecker(phone){

    let count = 0
    let isNumber = true

    for (let i = 0; i < phone.length; i++){
        if (phone[i] >= '0' && phone[i] <= '9') count++
        else isNumber = false
    }

    if (isNumber && (count >= 8 && count <= 12)) return true
    else return false

}

function checkAlphanumeric(password){

    let isAlphabet = false
    let isNumber = false

    for (let i = 0; i < password.length; i++) {

        if(isNaN(password[i])){
            isAlphabet = true;
        }

        else{
            isNumber = true
        }

        if(isAlphabet === true && isNumber === true){
            return true
        }

    }

    return false

}