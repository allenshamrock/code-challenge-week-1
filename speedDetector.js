//Declaring the variables
const speedlimit = 70;
const everyKmCovered = 5;

const calculateSpeed = function (speed) {
  //Calculating the demerit points above 70km/hr
  let demeritPonts = Math.floor((speed - speedlimit) / 5);

  if (speed >= 0 && speed < 70) {
    return "Ok";
  } else if (speed >= 70 && speed <= 130) {
    return `Points:${demeritPonts}`;
  } else if (speed > 130) {
    return "License suspended";
  }
};
// console.log(calculateSpeed(133));prints the output to the console
