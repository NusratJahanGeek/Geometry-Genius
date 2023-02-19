function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
const randomColorEffect = document.getElementById('random');
const randomColorEffect2 = document.getElementById('random-2');
const randomColorEffect3 = document.getElementById('random-3');
const randomColorEffect4 = document.getElementById('random-4');
const randomColorEffect5 = document.getElementById('random-5');
const randomColorEffect6 = document.getElementById('random-6');

randomColorEffect.addEventListener('mouseover', function(){
  randomColorEffect.style.backgroundColor = randomColor();
});
randomColorEffect2.addEventListener('mouseover', function(){
  randomColorEffect2.style.backgroundColor = randomColor();
});
randomColorEffect3.addEventListener('mouseover', function(){
  randomColorEffect3.style.backgroundColor = randomColor();
});
randomColorEffect4.addEventListener('mouseover', function(){
  randomColorEffect4.style.backgroundColor = randomColor();
});
randomColorEffect5.addEventListener('mouseover', function(){
  randomColorEffect5.style.backgroundColor = randomColor();
});
randomColorEffect6.addEventListener('mouseover', function(){
  randomColorEffect6.style.backgroundColor = randomColor();
});