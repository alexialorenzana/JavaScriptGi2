var tomMass = 8;
var tomHeight = 9;

var jerryMass = 45;
var jerryHeight = 10;

var higherBMI = true;

var tomBMI = tomMass / (tomHeight * tomHeight);
var jerryBMI = jerryMass / (jerryHeight * jerryHeight);
console.log(tomBMI);
console.log(jerryBMI);

if (tomBMI > jerryBMI){
    higherBMI =true;
    console.log("is tom's BMI higher than jerry's? " + higherBMI);
}else  if (jerryBMI > tomBMI){
    higherBMI = false;
    console.log("is tom's BMI higher than jerry's? " + higherBMI);
}