const switchBtn = document.getElementById("switchBtn")
const switchBtncCircle = document.querySelector(".switch__btn_circle");
const monthlyLabel = document.querySelector(".month-label")
const yearlyLabel = document.querySelector(".year-label")
const rangeInputs = Array.from(document.querySelectorAll(".range"))
const billAmount = document.getElementById("billAmount")
const pageviewsNumber = document.getElementById("pageviewsNumber")

const pageNumberarray = ["50K", "75K", "100K", "200K", "500K", "1M" ]
const billAmountMonthlyArray = [8, 12, 16, 24, 36, 48]
const billAmountYearlyArray = [6, 10, 14, 20, 30, 36]

let monthIndex = 2
let yearIndex = 2

switchBtn.addEventListener("click", () =>{
    switchBtncCircle.classList.toggle("transfrom")
    if(!switchBtncCircle.classList.contains("transfrom")){
        yearlyLabel.classList.add("hide") 
        monthlyLabel.classList.remove("hide") 
    }else{
        monthlyLabel.classList.add("hide") 
        yearlyLabel.classList.remove("hide") 
    }

})


rangeInputs.forEach(range => {
    range.addEventListener("change", (e) =>{
        console.log(e.target.value)
        if(e.target.id === "monthlyRange"){
            // isCloseToWhat(e.target.value)
            e.target.value = billAmountMonthlyArray[isCloseToWhat(e.target.value)]
            billAmount.textContent = `$${billAmountMonthlyArray[isCloseToWhat(e.target.value)]}.00`
            pageviewsNumber.textContent = pageNumberarray[monthIndex]

        }else{
            
            billAmount.textContent = `$${billAmountYearlyArray[isCloseToWhat(e.target.value)]}.00`
            pageviewsNumber.textContent =  pageNumberarray[yearIndex]

        }
            
    })
})
// input value is close to what

function isCloseToWhat(value){
    let currentIndex = 0;
    let difference;
    let minumDifference = billAmountMonthlyArray[billAmountMonthlyArray.length - 1]

    billAmountMonthlyArray.filter((ele, index) => {
        difference = Math.abs(ele - value);
        if (minumDifference > difference){
            minumDifference = difference
            currentIndex = index
        }   
    })
    console.log( billAmountMonthlyArray[currentIndex], currentIndex)
    return currentIndex
}