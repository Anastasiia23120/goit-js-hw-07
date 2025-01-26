function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  const boxFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${i * 10 + 30}px`;
    box.style.height = `${i * 10 + 30}px`;
    boxFragment.appendChild(box);
  }

  boxesContainer.append(boxFragment);
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);
