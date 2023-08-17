function calculateButton(){
    const inputBase= document.getElementById("input-base");
    const inputBaseNumber = inputBase.value;
    if(inputBaseNumber == ""){
        alert('please provide a valid number')
    }
    const base = parseFloat(inputBaseNumber)
    inputBase.value = "";
    const inputHeight = document.getElementById("input-height");
    const inputHeightNumber = inputHeight.value;
    if(inputHeightNumber == ""){
        alert('please provide a valid number')
    }

    const height = parseFloat(inputHeightNumber)
    inputHeight.value = "";

    const area = 0.5 * base * height;
    console.log(area);

    const aria = document.getElementById("span");
    aria.innerText = area;
}

function calculateRectangle(){
    const baseInput = document.getElementById("base-input");
    const baseNumber = baseInput.value;
    if(baseNumber == ""){
        alert('please provide a valid number')
    }
    const base = parseFloat(baseNumber);
    baseInput.value = "";

    const baseLength = document.getElementById("input-length");
    const baseN = baseLength.value;
    if(baseN == ""){
        alert('please provide a valid number')
    }
    const baseNum = parseFloat(baseN);
    baseLength.value = "";

    const allNum = baseNum * base;

    const set = document.getElementById("spanB");
    set.innerText = allNum;
}