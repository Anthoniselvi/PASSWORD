const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','*','(',')']


let num = changePassLength.min
changePassLength.value = num
changePassLength.addEventListener('input', () => num=changePassLength.value)

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*characters.length)
    return randomNumber;
}

function genPass(){

let passwordLength = num
let allowedCharacterLength = characters.length
let pass1 = []
let pass2 = []
let pass3 = []
let pass4 = []

for (let i=o; i<num; i++){
    let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
    pass1.push(singleCharacter)
}

for (let i=o; i<num; i++){
    let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
    pass2.push(singleCharacter)
}

for (let i=o; i<num; i++){
    let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
    pass3.push(singleCharacter)
}

for (let i=o; i<num; i++){
    let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
    pass4.push(singleCharacter)
}

}

function renderPassword(){
    let passwords = genPass(num)
    for (let i=0; i<displayPass.length; i++){
        displayPass[i].textContent = passwords[i]
    }
}

genPass.addEventListener('click', renderPassword)