function Isogram(word){
  this.word=word
}
Isogram.prototype.isIsogram=function(){
  var toArray=this.removeNonAlphabet(this.word.toLowerCase()).split("");
  var checker={};
  for(var i=0; i<toArray.length; i++)
  {
    if(checker[toArray[i]]==='used')
    {
      return false;
    }
    checker[toArray[i]]='used';
  }
  return true;
}
Isogram.prototype.removeNonAlphabet=function(input){
    var toArray=input.split("")
    var output="";
    for(var i=0; i<toArray.length; i++)
    {
      if(toArray[i]!="-"&&toArray[i]!=" ")
      {
        output+=toArray[i];
      }
    }
    return output

}
module.exports= Isogram;
