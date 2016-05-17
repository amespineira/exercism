function PhoneNumber(number){
  this.input=number;
}
PhoneNumber.prototype.number=function(){
  var toArray=this.input.split("");
  var output="";
  for(var i=0; i<toArray.length; i++)
  {
    if(!isNaN(Number(toArray[i]))&&toArray[i]!=" ")
    {
      output+=toArray[i];
    }
  }
  if(output.length>10)
  {
    if(output.substring(0,1)!="1" && output.length===11)
    {
      return "0000000000";
    }
    else {
      return output.substring(1);
    }
  }
  else if(output.length<10)
  {
      return "0000000000";
  }
  return output;
};
PhoneNumber.prototype.areaCode=function(){
  var newnumber=this.number();
  return newnumber.substring(0,3);
}
PhoneNumber.prototype.toString=function(){
  var newnumber=this.number();

  return "("+newnumber.substring(0,3)+") "+newnumber.substring(3,6)+"-"+newnumber.substring(6);
}
module.exports= PhoneNumber;
