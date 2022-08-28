const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "*",
    "(",
    ")",
  ];
  
  console.log("Inside Script JS");
  
  document.getElementById("generateBtn").addEventListener("click", genPass);
  
  function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return randomNumber;
  }
  
  function genPass() {
    // Get password length
    const passwordLength = document.getElementById("passwordlength").value;
    if (passwordLength === undefined ||
          passwordLength.length == 0) {
      alert("Password Length is Mandatory");
      return;
    }
  
    const allowedCharacterLength = characters.length;
    let pass1 = [];
    let pass2 = [];
    let pass3 = [];
    let pass4 = [];
  
    for (let i = 0; i < passwordLength; i++) {
      let singleCharacter = characters[getRandomNumber(allowedCharacterLength)];
      pass1.push(singleCharacter);
    }
  
    for (let i = 0; i < passwordLength; i++) {
      let singleCharacter = characters[getRandomNumber(allowedCharacterLength)];
      pass2.push(singleCharacter);
    }
  
    for (let i = 0; i < passwordLength; i++) {
      let singleCharacter = characters[getRandomNumber(allowedCharacterLength)];
      pass3.push(singleCharacter);
    }
  
    for (let i = 0; i < passwordLength; i++) {
      let singleCharacter = characters[getRandomNumber(allowedCharacterLength)];
      pass4.push(singleCharacter);
    }
  
    // Get the Password display component, show the password in it
    document.getElementById("display-pass1").textContent = pass1.join("");
    document.getElementById("display-pass2").textContent = pass2.join("");
    document.getElementById("display-pass3").textContent = pass3.join("");
    document.getElementById("display-pass4").textContent = pass4.join("");
  }