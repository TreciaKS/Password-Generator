let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")
let btnThree = document.getElementById("btnThree")
let btnFour = document.getElementById("btnFour")

function generatePasscodes(length) {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^'
    let charactersLength = characters.length
    for ( var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
   }
   return result
}

function getID() {
    btnOne.innerText = generatePasscodes(10)
    btnTwo.innerText = generatePasscodes(10)
    btnThree.innerText = generatePasscodes(10)
    btnFour.innerText = generatePasscodes(10)
}

