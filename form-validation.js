/**
 * Created by TylerHendrickson on 6/24/16.
 */
// Global
var valid = false;
var validEmail = false;

function validateForm() {
    // Get inputs
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var inquiryType = document.getElementById("type");
    var message = document.getElementById("message");

    console.log(name.value, email.value, inquiryType.value, message.value);

    // Verifies email is valid and inputs are not blank
    if (name.value != "" && message.value != "" && inquiryType.value != "" && validEmail) {
        valid = true;
    }

    // Point out to user which fields are invalid
    else {
        checkForEmpty(name);
        checkForEmpty(email);
        checkForEmpty(inquiryType);
        checkForEmpty(message);
    }

    // Process form
    return valid;
}

// Alerts user if box is empty
function checkForEmpty(input) {
    if (input.value == "") {
        console.log("The " + input.name + " field is empty!");
        input.className = "form-invalid";
    }

    else {
        input.className -= "";
        if (input.name == "email") {
            validateEmail(input);
        }
    }
}

// Alerts user if email is not valid
function validateEmail(thisEmail) {
    validEmail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(thisEmail.value);

    if (validEmail == false) {
        console.log("Not a valid email!");
        window.alert("This email does not appear to be valid. Please enter a valid email address.");
        thisEmail.className = "form-invalid";
    }

    else {
        thisEmail.className -= "";
    }
}



