let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = false;

let runnerAge = 18;

if (runnerEarly && runnerAge > 18){
  raceNumber += 1000;
  console.log(`You will race at 9:30am. Here is your race number ${raceNumber}`);
} else if (!runnerEarly && runnerAge > 18) {
  console.log(`You will race at 11:00am. Here is your race number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm. Here is your race number ${raceNumber}`);
} else {
  console.log(`You are 18, please see the registration desk`);
}
