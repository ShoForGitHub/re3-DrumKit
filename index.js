var drums = document.querySelectorAll(".drum");

//click
for (var item of drums){
  item.addEventListener("click", function () {
  var buttonClicked = this.innerHTML;
  makesound(buttonClicked);
  buttonAnimation(buttonClicked);
})}

//keyboard
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
      
    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case 'k':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case 'l':
      
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonClicked + "went wrong");
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}


/**
 * NOTES AREA
 */
// 1.function as an input:
// document.querySelector(".w").addEventListener("click", handleClick);
// function handleClick() {
//   alert("Hey");
// }


//2.anonymous function:
// document.querySelector(".w").addEventListener("click", function () {
//   alert("Hey");
// });