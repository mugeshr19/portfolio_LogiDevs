function applyDarkMode(isDarkMode) {

function darkmode() {

  const themeButton = document.getElementById('dark');
  const homeSection = document.querySelector('.home');
  const bubble = document.querySelector('.bubble');

  if (isDarkMode) {
    themeButton.style.backgroundImage = "url('assests/sun.png')";
    homeSection.style.backgroundColor = '#1e1e1e';
    homeSection.style.color = '#ffffff';
    bubble.style.backgroundColor = '#ffffff';
  } else {
    themeButton.style.backgroundImage = "url('assests/half-moon.png')";
    homeSection.style.backgroundColor = '#c0c0c0';
    homeSection.style.color = '#000000';
    bubble.style.backgroundColor = '#090909';
  }
}


function darkmode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const newDarkMode = !isDarkMode; 
  localStorage.setItem('darkMode', newDarkMode); 
  applyDarkMode(newDarkMode); 
}


document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  applyDarkMode(isDarkMode);
});


const bubble = document.querySelector('.bubble');
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  bubble.style.transform = `translate(${x}px, ${y}px)`;
});
}
