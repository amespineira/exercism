function Words() {

}
Words.prototype.count = function (input) {
  var noNewLines=this.replaceNewLine(input);
  var toArray=noNewLines.split(" ");

  var output={};
  for(var i=0; i<toArray.length; i++) {
    if(toArray[i]!="")
    {
    output[toArray[i].toLowerCase()]=0;
    }
  }
  for(var i=0; i<toArray.length; i++) {
    if(toArray[i]!="")
    {
      output[toArray[i].toLowerCase()]++;
    }
  }
  return output;
};
Words.prototype.replaceNewLine=function(input) {

  var toArray=input.split("");
  var output=""
  for(var i=0;i<toArray.length; i++)
  {
    if(toArray[i]==="\n" || toArray[i]==="\t")
    {
      toArray[i]=" ";
    }
    output+=toArray[i];
  }
  return output;
}
module.exports= Words;
