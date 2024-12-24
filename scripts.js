const image = ["assests/spider-man-marvel-3840x2160-11025.jpg","assests/roronoa-zoro-one-3840x2160-10523.png","assests/toji-jujutsu-kaisen-4k-wallpaper-uhdpaper.com-211@2@a.jpg","assests/super-saiyan-blue-3840x2160-18937.jpg"];
let current_index = 0;
const nameElement = document.getElementsByClassName("name")[0];
let current_cycle = 0;
const bioElements = document.getElementsByClassName("bio");
console.log(bioElements.length);
function background(){
    for (let i = 0; i < bioElements.length; i++) {
        if (current_cycle < 5) {
            bioElements[i].style.display = "none";
        } else {
            bioElements[i].style.display = "block"; 
            return;
        }
    }
    nameElement.style.backgroundImage = `url(${image[current_index]})`;
    current_index = (current_index+1)%image.length;
    
    if(current_index == 0){
        current_cycle++;
        if(current_cycle<5){
            if(current_cycle === 2){
                nameElement.innerHTML = "SAIRAM";
            }
            if(current_cycle === 3){
                nameElement.innerHTML = "NAGUL";
            }
            if(current_cycle === 4){
                nameElement.innerHTML = "NISANTHU";
            }
        }
        if(current_cycle>=5){
            nameElement.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            nameElement.style.transform = "translateY(100vh)";
            nameElement.style.opacity = "0";
            setTimeout(() => {
                nameElement.style.display = "none";
              }, 1000);
              
        }
    }
}
background();
setInterval(background,600);