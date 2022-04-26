const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const specials = ',.!@#$%^&*';

const password = ""

const textLength = document.querySelector("#length-value");
const lengthElValue = document.querySelector("#myRange");
const generateBtn = document.querySelector(".btn")
const options = document.querySelector(".checkbox-btn")
const errorText = document.querySelector(".error-text")

const passEl = document.querySelector(".password")

const upperCaseEl = document.querySelector("#uppercase-el")
const lowerCaseEl = document.querySelector("#lowercase-el")
const numbersEl = document.querySelector("#numbers-el")
const symbolsEl = document.querySelector("#symbols-el")

const pass1 = document.querySelector("#pass1")
const pass2 = document.querySelector("#pass2")
const pass3 = document.querySelector("#pass3")
const pass4 = document.querySelector("#pass4")

// Search for selected option to INCLUDE password
function allPassVariables(allPassElements) {
    if (upperCaseEl.checked) {
        allPassElements += upperCase
    }
    if (lowerCaseEl.checked) {
        allPassElements += lowerCase
    }
    if (numbersEl.checked) {
        allPassElements += numbers
    }
    if (symbolsEl.checked) {
        allPassElements += specials
    }
    return allPassElements
}

// change slider number    
textLength.innerText = lengthElValue.value
lengthElValue.oninput = function () {
    textLength.innerHTML = this.value
}


// Generate Password Action
generateBtn.addEventListener("click", function () {
    let passLength = lengthElValue.value //return Password legnth
    var allPassEl = ""

    if (upperCaseEl.checked || lowerCaseEl.checked || numbersEl.checked || symbolsEl.checked) {
        errorText.innerText = "Keep your password safe 😁"
        errorText.style.color = "gold"
        errorText.style.display = "block"
        generatePassword(pass1)
        generatePassword(pass2)
        generatePassword(pass3)
        generatePassword(pass4)

    } else if (!upperCaseEl.checked || !lowerCaseEl.checked || !numbersEl.checked || !symbolsEl.checked) {
        errorText.innerText = "Please, select at least one option to generate your password 🔒"
        errorText.style.color = "#b83636"
        errorText.style.display = "block"
    }

    // Function that generate password
    function generatePassword(passSpaceNumber) {
        allPassEl = allPassVariables(allPassEl)
    
        let passArray = []
        for (var i = 0; i < passLength; i++) {
            let generate = allPassEl[Math.floor(Math.random() * allPassEl.length)]
            passArray.push(generate) // Get all characters
            let finalPass = passArray.join(``) // Get all character in one string
            //passwords(finalPass1)
            passSpaceNumber.innerHTML = finalPass
        }
    }
})
