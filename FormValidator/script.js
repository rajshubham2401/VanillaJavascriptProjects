// const form = document.querySelector("#form");
// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const confirm_password = document.querySelector("#confirm-password");


// //Event Listener
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkRequired([username, email, password, confirm_password]);
//     if (!isValid(email.value)) {
//         showError(email, "Is Not Valid");
//     } else {
//         showSuccess(email);
//     }

// });


// // Check Required Function
// function checkRequired(inputArr) {
//     inputArr.forEach(input => {
//         if (input.value === "") {
//             showError(input, "Is Required");
//         } else {
//             showSuccess(input);
//         }
//     });
// }

// // Error Show  Function
// function showError(input, message) {
//     const formControl = input.parentElement;
//     const label = formControl.querySelector("label");
//     formControl.className = "form-control error";
//     const small = formControl.querySelector("small");
//     small.innerText = `${label.innerText} ${message}`;
// }
// // Success Show Method
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";
// }
// // Email Validation Function
// function isValid(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

let array = [2, 4, 100, 4, 11, 2602, 36];
let outlierFunction = function() {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < 3; i++) {
        if (array[i] / 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    if (even > odd) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] / 2 !== 0) {
                return array[i];
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] / 2 == 0) {
                return array[i];
            }
        }
    }
}
console.log(outlierFunction());