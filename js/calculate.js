function calculateButton() {
    const inputBase = document.getElementById("input-base");
    const inputBaseNumber = inputBase.value;
    if (inputBaseNumber == "") {
        alert('please provide a valid number')
        return
    }
    const base = parseFloat(inputBaseNumber)
    inputBase.value = "";
    const inputHeight = document.getElementById("input-height");
    const inputHeightNumber = inputHeight.value;
    if (inputHeightNumber == "") {
        alert('please provide a valid number')
        return;
    }

    const height = parseFloat(inputHeightNumber)
    inputHeight.value = "";

    const area = 0.5 * base * height;
    console.log(area);

    const aria = document.getElementById("span");
    aria.innerText = area;
}

function calculateRectangle() {
    const baseInput = document.getElementById("base-input");
    const baseNumber = baseInput.value;
    if (baseNumber == "") {
        alert('please provide a valid number')
        return;
    }
    const base = parseFloat(baseNumber);
    baseInput.value = "";

    const baseLength = document.getElementById("input-length");
    const baseN = baseLength.value;
    if (baseN == "") {
        alert('please provide a valid number')
        return;
    }
    const baseNum = parseFloat(baseN);
    baseLength.value = "";

    const allNum = baseNum * base;

    const set = document.getElementById("spanB");
    set.innerText = allNum;
}

// function Parallelogram

function calculateParallelogram() {
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height')
    if (base == 0 || height == 0) {
        alert('please provide a valid number')
        return;
    }
    const totalValue = base * height;
    elementInnerText('span3', totalValue)
}

function getInputField(parallelogramId) {
    const inputField = document.getElementById(parallelogramId);
    const input = inputField.value;
    if (input == "") {
        return 0;
    }
    const outPut = parseFloat(input);
    inputField.value = "";
    return outPut;
}
function elementInnerText(elementId, totalValue) {
    const element = document.getElementById(elementId);
    element.innerText = totalValue;

}
// ellipse
function calculateEllipseArea() {
    const ellipseMajor = getInputField('ellipse-mejor');
    const ellipseMinor = getInputField('ellipse-minor');
    if(ellipseMajor== 0 || ellipseMinor == 0){
        alert('please provide a valid number')
        return 0;
    }
    const total = 3.14 * ellipseMajor * ellipseMinor;
    elementInnerText('ellipse-span', total)
}



