function selected(event) {
  const changeSelected = document.querySelector('.selected');
  changeSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const color = document.querySelectorAll('.color');
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selected);
}

function changeColor(event) {
  const colorSelected = document.querySelector('.selected');
  const colorChange = getComputedStyle(colorSelected).backgroundColor;
  const toBeClick = event;
  toBeClick.target.style.backgroundColor = colorChange;
  console.log(colorChange);
}

const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', changeColor);
}
