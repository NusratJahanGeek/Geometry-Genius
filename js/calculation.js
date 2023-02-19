function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
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
    updatedTriangleValue.innerText = triangleArea;

    setTextElementValueById('update-b', userWidthInput);
    setTextElementValueById('update-h', userHeightInput);

});


document.getElementById('rectangle-calculate-button').addEventListener('click', function () {
    const userWidthInput = getInputFieldValueById('user-input-w');

    const userHeightInput = getInputFieldValueById('user-input-l');

    const rectangleArea = userWidthInput * userHeightInput;

    const updatedRectangleValue = document.getElementById('rectangle-value');
    updatedRectangleValue.innerText = rectangleArea;

    setTextElementValueById('update-w', userWidthInput);
    setTextElementValueById('update-l', userHeightInput);
});