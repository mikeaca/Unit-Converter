/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const metersEl = document.getElementById("meters-el")
const litersEl = document.getElementById("liters-el")
const kilogramsEl = document.getElementById("kilograms-el")

function convertMtoF(){
    return inputEl.value * 3.281
}

function convertLtoG(){
    return inputEl.value * 0.264
}

function convertKgtoP(){
    return inputEl.value * 2.204
}

function convertFtoM(){
    return inputEl.value * 0.3048
}

function convertGtoL(){
    return inputEl.value * 3.78541178
}

function convertPtoKg(){
    return inputEl.value * 0.45359237
}


convertBtn.addEventListener("click", function(){
    metersEl.textContent = `${inputEl.value} meters = ${convertMtoF().toFixed(3)} feet | ${inputEl.value} feet = ${convertFtoM().toFixed(3)} meters`
    litersEl.textContent = `${inputEl.value} liters = ${convertLtoG().toFixed(3)} gallons | ${inputEl.value} gallons = ${convertGtoL().toFixed(3)} liters`
    kilogramsEl.textContent = `${inputEl.value} kilos = ${convertKgtoP().toFixed(3)} pounds | ${inputEl.value} pounds = ${convertPtoKg().toFixed(3)} kilos`
})