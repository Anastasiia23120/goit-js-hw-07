const nameInput = document.getElementById('name-input');
const nameOutPut = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim();
  nameOutPut.textContent = inputValue || 'Anonymous';
});
