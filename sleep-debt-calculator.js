//establishing sleep hours of the week
const getSleepHours = (day) => {
  let fixDay = day.toLowerCase();
  switch (fixDay){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 6;
      break;
  }
}

//calcualate total sleep hours for the week
const getActualSleepHours = () =>{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

//ideal sleep hour goal
const getIdealSleepHours = () =>{
  let idealHours = 7;
  return idealHours * 7;
}

//calcualate the difference to meet the goal
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let diff = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours){
    console.log(`You got the perfect amount of sleep`);

  }else if(actualSleepHours > idealSleepHours){
    console.log(`You got more sleep than needed. You have over slept ${diff} hours`);
  }else {
    console.log(`You should get some rest. You need ${diff} more hours to meet the goal`);
  }
}

//initiate the app
calculateSleepDebt();
