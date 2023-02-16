
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

let yesText = document.getElementById("yes-text");
let noText = document.getElementById("no-text");

console.log(yesBtn);
console.log(noBtn);

yesBtn.addEventListener('click',()=>{
    window.alert("Pick a date for our wedding")
})

noBtn.addEventListener('click',()=>{
    window.alert("Pick a date for our wedding")
})

noBtn.addEventListener('mouseover',()=>{
    noText.innerText = "Yes"
    yesText.innerText = "No"
})

noBtn.addEventListener('mouseout',()=>{
    noText.innerText = "No"
    yesText.innerText = "Yes"
})