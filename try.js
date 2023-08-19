// reusable functions
function getInputValue(fieldId){
    const inputField = document.querySelector(fieldId)
    const value = parseFloat(inputField.value);
    return value;
}
function setElementInnerText(elementId, area){
    const selectedElement = document.querySelector(elementId);
    selectedElement.innerText = area; 
}

// common functions
function calculateTriangle(){
    const base = getInputValue('#triangleBaseField') 
    const height = getInputValue('#triangleHeightField')
    if(isNaN(base) || isNaN(height)){
        alert('please input values');
        return;
    }
    const area = 0.5 * base * height
    setElementInnerText('#triangleArea', area);

     // add to calculation list
     addToCalculation('Triangle' , area);
}
function calculateRectangle(){
    const width = getInputValue('#rectangleWidthField')
    const length = getInputValue('#rectangleLengthField');
    if(isNaN(width) || isNaN(length)){
        alert('please input values');
        return;
    }
    const area = width * length
    setElementInnerText('#rectangleArea', area)

     // add to calculation list
     addToCalculation('Rectangle' , area);
}
function calculateParallelogram(){
    const base = getInputValue('#parallelogramBaseField')
    const height = getInputValue('#parallelogramHeightField')
    if(isNaN(base) || isNaN(height)){
        alert('please input values');
        return;
    }
    const area = base * height;
    setElementInnerText('#parallelogramArea', area);

    // add to calculation list
    addToCalculation('parallelogram' , area);
}
function calculateEllipse(){
    const firstRadius = getInputValue('#ellipse1stradias')
    const secondRadius = getInputValue('#ellipse2ndradias')
    if(isNaN(firstRadius) || isNaN(secondRadius)){
        alert('please input values');
        return;
    }
    const area = 3.1416 * firstRadius * secondRadius;
    const areadecimal = area.toFixed(2)
    setElementInnerText('#ellipseArea', areadecimal)

    // add to calculation list
    addToCalculation('Ellipse' , areadecimal);
}   
function calculateRhombus(){
    const d1 = getInputValue('#d1');
    const d2 = getInputValue('#d2');
    if(isNaN(d1) || isNaN(d2)){
        alert('please input values');
        return;
    }
    const area = 0.5 * d1 * d2 ;
    setElementInnerText('#rhombusArea', area);

    // add to calculation list
    addToCalculation('Rhombush' , area);
}
function calculatePentagon(){
    const p = getInputValue('#p');
    const d = getInputValue('#d');
    if(isNaN(p) || isNaN(d)){
        alert('please input values');
        return;
    }
    const area = 0.5 * p * d ;
    setElementInnerText('#pentagonArea', area);

    // add to calculation list
    addToCalculation('Pentagon' , area);
}



function addToCalculation(shaptype, area){
    const calculationEntry = document.querySelector('#calculation-entry');
    const table = document.createElement('table');
    let count = calculationEntry.childElementCount;
    table.classList.add('w-full');
    // p.innerHTML = `${shaptype} ${area} cm<sup>2</sup> <button class="text-[12px] bg-green-400 p-1">Convert to m<sup>2</sup></button> `;
    table.innerHTML = `<tr><td>${count+1}. ${shaptype}</td><td>${area}cm<sup>2</sup></td><td><button class="text-[12px] bg-green-400 p-1">Convert to m<sup>2</sup></button></td></tr>`
    calculationEntry.appendChild(table);
}
