//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input.indexOf("!")!=-1)
  {
    if(checks.isAllCaps(input)===true)
    {
    return('Whoa, chill out!')
    }
  }
  if(input.indexOf("?")!=-1 && input.indexOf("?")===input.length-1)
  {
    if(checks.isAllCaps(input)===true)
    {
      if(checks.isAllNumber(input)===true)
      {
        return("Sure.")
      }
      else {

      return("Whoa, chill out!")
      }
    }
    return('Sure.')
  }
  if(checks.isAllCaps(input)===true && checks.isAllNumber(input)===false)
  {
    return"Whoa, chill out!";
  }
  if(checks.noSpaces(input)==="" )
  {
    return"Fine. Be that way!"
  }
  return("Whatever.")
};
var checks={
    noSpaces:function(input) {
      var array=input.split("");
      var noSpaces=array.filter(this.spaceCheck);
      var tostring="";
      for(var i=0; i<noSpaces.length; i++)
      {
        tostring+=noSpaces[i];
      }
      return tostring;
    },
    spaceCheck:function(input)
    {
      if(input===" ")
      {
        return false
      }
      return true
    },
    isAllCaps:function(input) {
      if(input.toUpperCase()===input)
      {
        return true;
      }
      else {
        return false;
      }
    },
    isAllNumber:function(input) {
      var array=input.split("");
      var noPunctuation=this.notPunctuation(array);
      var tostring="";
      for(var i=0; i<noPunctuation.length; i++)
      {
        tostring+=noPunctuation[i];
      }
      if(isNaN(Number(tostring)))
      {
        return false;
      }
      return true;
    },
    notPunctuation:function(input) {
      var noPunctuation=input.filter(this.punctuationCheck)
      return noPunctuation
    },
    punctuationCheck:function(input)
    {

        if(input==="!" || input==="?" || input==="." ||input==="," || input===" ")
        {
          return false
        }
        return true;
    }

}
module.exports = Bob;
