// document.addEventListener('DOMContentLoaded', init);
// function init(_event) {
//     regForm = document.forms['form'];
//     regForm['button'].onclick = validateForm;
// }

// function validateForm(_event) {
//     let errorMessages = Array();

//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (regForm['firstname'].value) {
//         if (regForm['firstname'].value.length < 2) {
//             errorMessages.push('Min length for firstname is 2');
//         } else if (regForm['firstname'].value.length > 25) {
//             errorMessages.push('Max length for firstname is 25');
//         }
//     } else {
//         errorMessages.push('Please enter Firstname');
//     }

//     if (regForm['lastname'].value) {
//         if (regForm['lastname'].value.length < 2) {
//             errorMessages.push('Min length for lastname is 2');
//         } else if (regForm['lastname'].value.length > 25) {
//             errorMessages.push('Max length for lastname is 25');
//         }
//     } else {
//         errorMessages.push('Please enter Lastname');
//     }
//     if (regForm['email'].value) {
//         if (!filter.test(regForm['email'].value)) {
//             errorMessages.push('Invalid Email')
//         }
//     } else {
//         errorMessages.push('Please enter Email');
//     }

//     if (!regForm['address'].value) {
//         errorMessages.push('Please enter Address');
//     }
//     if (regForm['password'].value) {
//         if (regForm['password'].value.length < 5) {
//             errorMessages.push('Password min is 5');
//         } else if (!regForm['password2'].value) {

//             errorMessages.push('Please confirm your password');
//         }
//     } else {
//         errorMessages.push('Please enter password');
//     }

//     if (regForm['password'].value && regForm['password2'].value) {
//         if (regForm['password'].value != regForm['password2'].value) {
//             errorMessages.push('Passwords do not match');
//         }

//     } 


//     displayErrors(errorMessages);
//     if (errorMessages.length) {
//         return false;
//     }

//     function displayErrors(errors) {
//         let errorBox = document.getElementById('errorMessages');
//         if (!errors.length) {
//             errorBox.innerHTML = '';
//             return false;
//         }

//     }
//     var messageString = '<ul>';
//     for (let i = 0; i < errors.length; i++) {
//         messageString += '<li>' + errors[i] + '</li>';
//     }
//     messageString += '</ul>';
//     errorBox.innerHTML = messageString;
// }

// var pages = document.getElementsByClassName('page');
// var inputs = document.querySelectorAll('input');
// var errorBox = document.getElementById('errorMessages');

// function deleteErrors() {
//     if (!regForm['firstname'].value) {
//         errorBox.innerHTML = '';
//     } else if (!regForm['lastname'].value) {
//         errorBox.innerHTML = '';
//     } else if (!regForm['address'].value) {
//         errorBox.innerHTML = '';
//     } else if (!regForm['email'].value) {
//         errorBox.innerHTML = ''
//     } else if (!regForm['password'].value) {
//         errorBox.innerHTML = '';
//     } else if (!regForm['password2'].value) {
//         errorBox.innerHTML = '';
//     }
// }

const btn = document.getElementById('button');
regForm = document.forms['form'];
// regForm['button'].onclick = validateForm;
let error_count = 0;

filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
btn.addEventListener('click', function (event) {
    let count = 0;
    let count2= 0;
    let errorMessages = Array();



    if (regForm['firstname'].value) {
        if (regForm['firstname'].value.length < 2) {
            errorMessages.push('Min length for firstname is 2');
            event.preventDefault();
            count2++;

        } else if (regForm['firstname'].value.length > 25) {
            errorMessages.push('Max length for firstname is 25');
            event.preventDefault();
            count2++;
        }
    } else {
        errorMessages.push('Please enter Firstname');
        event.preventDefault();
        count++;
    }


    if (regForm['lastname'].value) {
        if (regForm['lastname'].value.length < 2) {
            errorMessages.push('Min length for lastname is 2');
            event.preventDefault();
            count2++;
        } else if (regForm['lastname'].value.length > 25) {
            errorMessages.push('Max length for lastname is 25');
            event.preventDefault();
            count2++;
        }
    } else {
        errorMessages.push('Please enter Lastname');
        event.preventDefault();
        count++;
    }
    if (regForm['email'].value) {
        if (!filter.test(regForm['email'].value)) {
            errorMessages.push('Invalid Email');
            event.preventDefault();
            count2++;
        }
    } else {
        errorMessages.push('Please enter Email');
        event.preventDefault();
        count++;
    }

    if (!regForm['address'].value) {
        errorMessages.push('Please enter Address');
        event.preventDefault();
        count++;
    }
    if (!regForm['password'].value) {
        errorMessages.push('Please enter password');
        event.preventDefault();
        count++;
    }
    if (regForm['password'].value.length < 5 && regForm['password'].value.length != 0) {
        event.preventDefault();
        errorMessages.push('Password min is 5');
        count2++;
    }
    if (!regForm['password2'].value) {
        errorMessages.push('Please confirm password');
        event.preventDefault();
        count++;
        count2++;
    }
    //  else {
    //     errorMessages.push('Please enter password');
    // }

    if (regForm['password'].value && regForm['password2'].value) {
        if (regForm['password'].value != regForm['password2'].value) {
            errorMessages.push('Passwords do not match');
            event.preventDefault();
            count2++;
        }

    }

    error_count = errorMessages;



    if (count == 6) {
        alert('Input all fields!');
        event.preventDefault();

    }
    else {
        if (count2 > 0) {
            alert(errorMessages);
            event.preventDefault();
        }
        else {
        //     if (regForm['firstname'].value.length < 2) {
        //         errorMessages.push('Min length for firstname is 2');
        //         event.preventDefault();

        //     }
        //     else if (regForm['firstname'].value.length > 25) {
        //         errorMessages.push('Max length for firstname is 25');
        //         event.preventDefault();
        //     }

        //     else if (regForm['lastname'].value.length < 2) {
        //         errorMessages.push('Min length for lastname is 2');
        //         event.preventDefault();
        //     }
        //     else if (regForm['lastname'].value.length > 25) {
        //         errorMessages.push('Max length for lastname is 25');
        //         event.preventDefault();
        //     }


        //     else if (!filter.test(regForm['email'].value)) {
        //         errorMessages.push('Invalid Email');
        //         event.preventDefault();
        //     }

        //    else if (regForm['password'].value.length < 5 && regForm['password'].value.length != 0) {
        //         event.preventDefault();
        //         errorMessages.push('Password min is 5');
        //     }

        //     else if (regForm['password'].value != regForm['password2'].value) {
        //         errorMessages.push('Passwords do not match');
        //         event.preventDefault();
        //     }
            // else {
                window.location.href = 'registration.php';
            // }

        }


    }




});



