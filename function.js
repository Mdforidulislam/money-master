function CalculationBalence(calculateBtn,incomeValue,foodValue,rentValue,clothesValue,setIDE,setIDB,savingBtnId,savingValue,savingAmount,ramingBalance) {
    const btnCalEB = document.getElementById(calculateBtn);
    const btnCalS = document.getElementById(savingBtnId);
    btnCalEB.addEventListener('click',function () {
        const getValueIncome = searchValueInput(incomeValue);

        const getValuefood = searchValueInput(foodValue);
        const getValueRent = searchValueInput(rentValue);
        const getValueCholthes = searchValueInput(clothesValue);

        const sumExpence = getValuefood + getValueRent + getValueCholthes;
        const remainBalence = getValueIncome - sumExpence ;

        setValueinElement(setIDE,sumExpence)
        setValueinElement(setIDB,remainBalence)



    })

    btnCalS.addEventListener('click',function () {
        
        const getRemaingBalence = getValueText(setIDB);
        const getSavingValue = searchValueInput(savingValue);
        
        const convertPercetage = (getRemaingBalence / 100 ) * getSavingValue;

        const finalRemainBalence = getRemaingBalence -convertPercetage;
        
        
        setValueinElement(ramingBalance,finalRemainBalence)
        setValueinElement(savingAmount,convertPercetage)
       

    })
}

// get a input value function declartion

function searchValueInput(getInputValue) {
    const getValue = document.getElementById(getInputValue).value;
    const convertvalue = parseFloat(getValue);
    document.getElementById(getInputValue).value = '';
    return convertvalue;
}

// set a value the banlece or expence 

function setValueinElement(setElementId,setValue) {
    const getID = document.getElementById(setElementId);
    getID.innerText = setValue;
}

// getVAlue form text fomrmet

function getValueText(ValueElement) {
    const getValueText = document.getElementById(ValueElement).innerText
    const convertTextValue = parseFloat(getValueText);
    return convertTextValue;
}