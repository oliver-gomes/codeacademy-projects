let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// assign bot image
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var numClosedDoors = 3;

// let choreDoor = Math.floor(Math.random() * 3);
// console.log(choreDoor);

var openDoor1, openDoor2, openDoor3;

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * 3);

  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};


door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(door);
  }
}
door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(door);
  }
}
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(door);
  }
}

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

let isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}


let playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }

}

let currentlyPlaying = true;

let startButton = document.getElementById('start');

let gameOver = (str) => {
  if(str === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?'
    
  }
  currentlyPlaying = false;
}


randomChoreDoorGenerator();