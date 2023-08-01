const form = document.getElementById('passwordGen')
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUpperCaseElement = document.getElementById('includeUpperCase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passwordDisplay = document.getElementById('passwordDisplay')
const copy = document.getElementById('clipboard')

form.addEventListener("submit", function(e){
    e.preventDefault()
    const characterAmount = characterAmountNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)


    passwordDisplay.innerText = password
} )

const UPPER_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWER_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODWS =arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126))

function generatePassword (characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
    var charCodes = LOWER_CHAR_CODES
    if(includeUpperCase) charCodes = charCodes.concat(UPPER_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODWS)

    const passwordCharacters = []
    for (let i = 0; i <characterAmount; i++) {
     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
     passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array =[]
    for (let i = low; i<= high; i++) {
        array.push(i)
    }
    return array
}

copy.addEventListener("click", function(){
    const textArea = document.createElement('textarea')
 const passwordEL = passwordDisplay.innerText 
 if(!passwordEL) return ;

 textArea.value = passwordEL;

 document.body.appendChild(textArea)
 textArea.select()
 document.execCommand("copy");
 textArea.remove()
 alert("password copied");

})