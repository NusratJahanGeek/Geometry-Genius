document.getElementById('triangle-calculate-button').addEventListener('click', function(){
    const userWidthInputField = document.getElementById('user-input-b');
    const userWidthInput = userWidthInputField.value;

    const userHeightInputField = document.getElementById('user-input-h');
    const userHeightInput = userHeightInputField.value;

    const triangleArea = 0.5 * userWidthInput * userHeightInput;

    const updatedTriangleValue = document.getElementById('triangle-value');
    updatedTriangleValue.innerText = triangleArea;

    userHeightInputField.value = '';
    userWidthInputField.value = '';
});

document.getElementById('rectangle-calculate-button').addEventListener('click', function(){
    const userWidthInputField = document.getElementById('user-input-w');
    const userWidthInput = userWidthInputField.value;

    const userHeightInputField = document.getElementById('user-input-l');
    const userHeightInput = userHeightInputField.value;

    const rectangleArea = userWidthInput * userHeightInput;

    const updatedRectangleValue = document.getElementById('rectangle-value');
    updatedRectangleValue.innerText = rectangleArea;
    
    userHeightInputField.value = '';
    userWidthInputField.value = '';
});