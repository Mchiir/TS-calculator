const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const AddBtn = document.getElementById("Add") as HTMLInputElement
const SubBtn = document.getElementById("Sub") as HTMLInputElement
const MultBtn = document.getElementById("Mult") as HTMLInputElement
const DivBtn = document.getElementById("Divide") as HTMLInputElement

const printResult = document.getElementById("result") as HTMLInputElement

function AddNumbers (){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)

    let result = a+b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers)


function SubNumbers (){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)

    let result = a-b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubNumbers)


function MultNumbers (){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)

    let result = a*b;
    printResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultNumbers)


function DivNumbers (){
    let a = parseFloat(number1.value)
    let b = parseFloat(number2.value)

    let result = a/b;
    printResult.textContent = result.toString();
}

DivBtn.addEventListener("click", DivNumbers)