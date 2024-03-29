const switchBtn = document.getElementById("switchBtn")
const switchBtncCircle = document.querySelector(".switch__btn_circle")
const rangeInput = document.querySelector(".range")
const billAmount = document.getElementById("billAmount")
const pageviewsNumber = document.getElementById("pageviewsNumber")
const yearlyRadio = document.getElementById("yearly")
const monthlyRadio = document.getElementById("monthly")
const way = document.getElementById("way")
const discount = .25
const billAmountMonthlyArray = [
    [8, "10K"],
    [12, "50K"],
    [16, "100K"],
    [24, "500K"],
    [36, "1M"]
];



// switch from monthly billing to yearly billing button 
switchBtn.addEventListener("click", () =>{
    let amount = billAmountMonthlyArray[rangeInput.value][0]
    if(monthlyRadio.hasAttribute("checked")){
        billAmount.textContent = `$${(amount - amount * discount).toFixed(2)}`
        switchBtncCircle.classList.add("transfrom")
        yearlyRadio.setAttribute("checked", "")
        monthlyRadio.removeAttribute("checked")
        way.textContent = "yearly"
       
    }else{
        billAmount.textContent = `$${amount}.00` 
        switchBtncCircle.classList.remove("transfrom")
        monthlyRadio.setAttribute("checked", "")
        yearlyRadio.removeAttribute("checked")
        way.textContent = "monthly"
    } 
    fillLower(rangeInput.value)  
})

rangeInput.addEventListener("input", (e) => {
    handleInputValue(e)  
    fillLower(e.target.value)   
})

function handleInputValue(e){
    let amount = billAmountMonthlyArray[e.target.value][0]
    pageviewsNumber.textContent = billAmountMonthlyArray[e.target.value][1]
    if(monthlyRadio.hasAttribute("checked")){  
        billAmount.textContent = `$${amount.toFixed(2)}`

    }else{
        billAmount.textContent = `$${(amount - amount * discount).toFixed(2)}`
    }
}
// Fill the lower part of the slider
function fillLower(index){
    rangeInput.style.backgroundSize = `${index * 25}% 100%`
}
