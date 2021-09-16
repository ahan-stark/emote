const closedFace = document.querySelector('.happy');
const openFace = document.querySelector('.sad');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('sad')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('happy')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});
