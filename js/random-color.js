function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  const randomColorEffect = document.getElementById('random');
  const randomColorEffect2 = document.getElementById('random-2');
  
  randomColorEffect.addEventListener('mouseover', function(){
    randomColorEffect.style.backgroundColor = randomColor();
  });
  randomColorEffect2.addEventListener('mouseover', function(){
    randomColorEffect2.style.backgroundColor = randomColor();
  });