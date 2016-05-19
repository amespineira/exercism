var odds=0;
var total=675324;
var chosen=10000;
function calculate(total,chosen){
  var output=0;
  for(var i=0;i<chosen;i++)
  {
    output+=i/total;
  }
  return output;
}
//odds=calculate(total,chosen)*100;
console.log(odds);
var Robot = require('./robot-name.js');
var robot=new Robot();
//console.log(robot.generateList());
//console.log(process.hrtime());

var m = 25,
    // a - 1 should be divisible by m's prime factors
    a = 11,
    // c and m should be co-prime
    c = 17;
// Setting the seed
var z = 50;
function getRandomFromSeed(seed,length) {
  // define the recurrence relationship
  var output="";
  var last=seed;
  for(var i=0; i<length; i++)
  {
    last=(a * last + c) % m
  output+=last
  }
  // return an integer
  // Could return a float in (0, 1) by dividing by m
  return output;
};
console.log(getRandomFromSeed(123456,5));
