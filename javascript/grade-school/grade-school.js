function School(){

}
var rosterdata={};
School.prototype.add=function(student,grade){
  if(rosterdata[grade]===undefined)
  {
    this.initiate(grade);
  }
  rosterdata[grade].push(student);
};
School.prototype.initiate = function(grade){
    rosterdata[grade]=[];
};
School.prototype.roster=function(){
  for(var key in rosterdata)
  {
    rosterdata[key]=rosterdata[key].sort()
  }
  var output=rosterdata;
  rosterdata={};
  return output;
};
School.prototype.grade=function(grade)
{
  if(rosterdata[grade]===undefined)
  {
    this.initiate(grade);
  }
  var output=rosterdata[grade];
  rosterdata={};
  output=output.sort();
  return output;
}
module.exports= School;
