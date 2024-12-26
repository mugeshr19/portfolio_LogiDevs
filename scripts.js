<<<<<<< HEAD
=======
function darkmode() {
  const themeButton = document.getElementById('dark');
  const homeSection = document.querySelector('.home');
  const currentImage = themeButton.style.backgroundImage;

  if (currentImage.includes('half-moon.png')) {
      themeButton.style.backgroundImage = "url('assests/sun.png')";
      homeSection.style.backgroundColor = '#1e1e1e'; 
      homeSection.style.color = '#ffffff';
  } else {
      themeButton.style.backgroundImage = "url('assests/half-moon.png')";
      homeSection.style.backgroundColor = '#c0c0c0'; 
      homeSection.style.color = '#000000'; 
  }
}
>>>>>>> 2a0945315acea6c83566d9ef1644f34e39e4f432
