//
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`
var DnaTranscriber = function() {};
DnaTranscriber.prototype.toRna = function(input) {
  var toArray=input.split("")
  var output='';
  for(var i=0; i<toArray.length; i++)
  {
    output+=this.smallSwitch(toArray[i]);
  }

  return output

}
DnaTranscriber.prototype.smallSwitch= function(input) {
  if(input==='G')
  {
    return 'C'
  }
  else if(input==='C')
  {
    return 'G'
  }
  else if(input==='T')
  {
    return 'A'
  }
  else if(input==='A')
  {
    return 'U'
  }
}
module.exports= DnaTranscriber;
