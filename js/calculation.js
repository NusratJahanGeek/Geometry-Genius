function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if(isNaN(inputFieldValue)){
        alert('You forgot to enter the number. Please enter your number first.');
    }
    else if(inputFieldValue < 0){
        alert('Area cannot be negative. Please enter a positive number.')
    }
    else if(inputFieldValue === 0){
        alert('Area cannot be zero. Please enter a positive number.')
    }
    else {
        return inputFieldValue;
    }
}


function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


document.getElementById('triangle-calculate-button').addEventListener('click', function () {
    const userWidthInput = getInputFieldValueById('user-input-b');

    const userHeightInput = getInputFieldValueById('user-input-h');

    const triangleArea = 0.5 * userWidthInput * userHeightInput;

    const updatedTriangleValue = document.getElementById('triangle-value');
    updatedTriangleValue.innerText = triangleArea.toFixed(2);

    setTextElementValueById('update-b', userWidthInput);
    setTextElementValueById('update-h', userHeightInput);

});


document.getElementById('rectangle-calculate-button').addEventListener('click', function () {
    const userWidthInput = getInputFieldValueById('user-input-w');

    const userHeightInput = getInputFieldValueById('user-input-l');

    const rectangleArea = userWidthInput * userHeightInput;

    const updatedRectangleValue = document.getElementById('rectangle-value');
    updatedRectangleValue.innerText = rectangleArea.toFixed(2);

    setTextElementValueById('update-w', userWidthInput);
    setTextElementValueById('update-l', userHeightInput);
});

document.getElementById('parallelogram-calculate-button').addEventListener('click', function () {
    const parallelogramArea = 10 * 12;

    const updatedParallelogramValue = document.getElementById('parallelogram-value');
    updatedParallelogramValue.innerText = parallelogramArea;
});

document.getElementById('rhombus-calculate-button').addEventListener('click', function () {
    const rhombusArea = 0.5 * 16 * 8;

    const updatedRhombusValue = document.getElementById('rhombus-value');
    updatedRhombusValue.innerText = rhombusArea;
});

document.getElementById('pentagon-calculate-button').addEventListener('click', function () {
    const pentagonArea = 0.5 * 6 * 10;

    const updatedPentagonValue = document.getElementById('pentagon-value');
    updatedPentagonValue.innerText = pentagonArea;
});

document.getElementById('ellipse-calculate-button').addEventListener('click', function () {
    const ellipseArea = 3.14 * 10 * 4;

    const updatedEllipseValue = document.getElementById('ellipse-value');
    updatedEllipseValue.innerText = ellipseArea.toFixed(2);
});