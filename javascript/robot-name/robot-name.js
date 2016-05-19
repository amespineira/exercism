var usedNames = []

function Robot(){
 this.name=this.generateName();
 this.longstring=process.hrtime();
 this.usednames = usedNames;

}
var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Robot.prototype.generateName=function(){
  var exit=false
  var name;
  while(exit===false)
  {
    name=this.getNewName();
    if(usedNames.indexOf(name)===-1)
    {
      usedNames.push(name);
      return name;
    }
  }

}
Robot.prototype.reset=function(){
  this.name=this.generateName();
}
Robot.prototype.getNewName=function(){
  var alphArray=alphabet.split("");
  var randomletters=alphArray[this.getRandomInt(0,alphArray.length)]+alphArray[this.getRandomInt(0,alphArray.length)]
  var randomnumbers=this.getRandomInt(0,10)+""+this.getRandomInt(0,10)+this.getRandomInt(0,10);

  return randomletters+randomnumbers

}
Robot.prototype.getRandomInt=function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
module.exports= Robot;
