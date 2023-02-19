document.getElementById('list-container').addEventListener('click', function(){
    event.target.parentNode.removeChild(event.target);
});

document.getElementById('triangle-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Triangle &nbsp; &nbsp; <span id="triangle-value">?</span>cm<sup>2</sup>&nbsp; &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});

document.getElementById('rectangle-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Rectangle &nbsp; &nbsp; <span id="rectangle-value">125.6</span>cm<sup>2</sup>&nbsp; &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});

document.getElementById('parallelogram-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Parallelogram &nbsp; <span id="parallelogram-value">? </span>cm<sup>2</sup> &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});

document.getElementById('rhombus-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Rhombus &nbsp; &nbsp; <span id="rhombus-value">? </span>cm<sup>2</sup>&nbsp; &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});

document.getElementById('pentagon-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Pentagon &nbsp; &nbsp; <span id="pentagon-value">? </span>cm<sup>2</sup>&nbsp; &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});

document.getElementById('ellipse-calculate-button').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML = `
    Ellipse &nbsp; &nbsp; <span id="ellipse-value">? </span>cm<sup>2</sup>&nbsp; &nbsp;<button class="bg-sky-600 hover:bg-sky-700 px-2 text-white rounded-sm">Convert to m<sup>2</sup></button><br><br>`
    li.classList.add('item');
    listContainer.appendChild(li);
});