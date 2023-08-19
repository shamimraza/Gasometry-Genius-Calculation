
// Triangle

function calculateButton() {
    const base = getInputField('input-base')
    const height = getInputField('input-height')
    if(isNaN(base) || isNaN(height)){
        alert('please provide valid number')
        return
    }
    const allBaseHeight = 0.5 * base * height;
    elementInnerText('span', allBaseHeight)
    addToDynamic('Triangle', allBaseHeight)
}
// Rectangle

function calculateRectangleArea(){
    const rectangleBase = getInputField('base-input');
    const rectangleHeight = getInputField('input-length');
    if(isNaN(rectangleBase) || isNaN(rectangleHeight)){
        alert('please provide a valid number')
        return;
    }
    const allElement = rectangleBase * rectangleHeight;
    elementInnerText('spanB', allElement);
    addToDynamic('Rectangle', allElement);

}

// Rectangle


    // const inputBase = document.getElementById("input-base");
    // const inputBaseNumber = inputBase.value;
    // inputBase.value = "";

    // if (isNaN(inputBaseNumber)) {
    //     alert('please provide a valid number')
    //     return
    // }
    // const base = parseFloat(inputBaseNumber)
    // const inputHeight = document.getElementById("input-height");
    // const inputHeightNumber = inputHeight.value;
    // if (isNaN(inputHeightNumber)) {
    //     alert('please provide a valid number')
    //     return;
    // }

    // const height = parseFloat(inputHeightNumber)
    // inputHeight.value = "";

    // const area = 0.5 * base * height;
    // console.log(area);

    // const aria = document.getElementById("span");
    // aria.innerText = area;



// function calculateRectangle() {
    
//     // const baseInput = document.getElementById("base-input");
//     // const baseNumber = baseInput.value;
//     // if (isNaN(baseNumber)) {
//     //     alert('please provide a valid number')
//     //     return ;
//     // }
//     // const base = parseFloat(baseNumber);
//     // baseInput.value = "";

//     // const baseLength = document.getElementById("input-length");
//     // const baseN = baseLength.value;
//     // if (isNaN(baseN)) {
//     //     alert('please provide a valid number ymm')
//     //     return 0;
//     // }
//     // const baseNum = parseFloat(baseN);
//     // baseLength.value = "";

//     // const allNum = baseNum * base;

//     // const set = document.getElementById("spanB");
//     // set.innerText = allNum;
// }
// function inputFieldTriangle(triangleId){
//     const input = document.getElementById(triangleId)
//     const triangleField = input.value;
//     const field = parseFloat(triangleField);
//     input.value= "";
//     return field;
// }



// function Parallelogram all function er kaj ei khan a

function calculateParallelogram() {
    const base = getInputField('parallelogram-base');
    const height = getInputField('parallelogram-height')
    if (isNaN(base) || isNaN(height)) {
        alert('please provide a valid number')
        return ;
    }
    const totalValue = base * height;
    elementInnerText('span3', totalValue)

    addToDynamic('parallelogram', totalValue)
}

function getInputField(parallelogramId) {
    const inputField = document.getElementById(parallelogramId);
    const input = inputField.value;
    const outPut = parseFloat(input);
    inputField.value = "";
    return outPut;
}
function elementInnerText(elementId, totalValue) {
    const element = document.getElementById(elementId);
    element.innerText = totalValue;

}

// dynamic power

function addToDynamic(subtotal, totalValue){
    console.log(subtotal+ ' ' +totalValue);
    const calculationButton = document.getElementById('dynamic-use');
    const count = calculationButton.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML =`
       ${count + 1}. ${subtotal} ${totalValue} cm<sup>2</sup>   <Button class="btn btn-danger">Hit Me</Button>
    
    `;


    calculationButton.appendChild(p)
}


// ellipse
function calculateEllipseArea() {
    const ellipseMajor = getInputField('ellipse-mejor');
    const ellipseMinor = getInputField('ellipse-minor');
    if(isNaN(ellipseMajor) || isNaN(ellipseMinor)){
        alert('please provide a valid number')
        return 0;
    }
    const total = 3.14 * ellipseMajor * ellipseMinor;
    const toFixed = total.toFixed(2);
    elementInnerText('ellipse-span', toFixed)
    addToDynamic('Ellipse', toFixed);
}


// Rhombus

function calculateRhombusArea(){
    const rhombusBase = getInputField('rhombus-base');
    const rhombusHeight = getInputField('rhombus-height');
    if(isNaN(rhombusBase) || isNaN(rhombusHeight)){
        alert('please valid number')
        return;
    }
    const allNumber = 0.5 *  rhombusBase * rhombusHeight;
    elementInnerText('rhombus-span', allNumber)
    addToDynamic('Rhombus', allNumber);
}

// Pentagon

function calculatePentagonArea(){
    const pentagonBase = getInputField('pentagon-base')
    const pentagonHeight = getInputField('pentagon-height')
    if(isNaN(pentagonBase) || isNaN(pentagonHeight)){
        alert('please valid number')
        return;
    }
    const allEnd = 0.5 * pentagonBase * pentagonHeight;
    elementInnerText('pentagon-span', allEnd);
    addToDynamic('Pentagon', allEnd);
}



