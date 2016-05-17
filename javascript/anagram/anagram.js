function Anagram(word) {
  this.word=word;
}
Anagram.prototype.matches=function(input, input2, input3) {
    var output=[];
    if (typeof input != 'string') {
     for(var i=0; i<input.length; i++)
     {
       if(this.isAnagram(input[i]))
       {
         output.push(input[i]);
       }
     }
   } else if (typeof input == 'string' && typeof input2 == 'string' &&
            typeof input3 == 'string') {
            if(this.isAnagram(input))
            {
              output.push(input);
            }
            if(this.isAnagram(input2))
            {
              output.push(input2);
            }
            if(this.isAnagram(input3))
            {
              output.push(input3);
            }
          }
        else if(typeof input=='string')
        {
          if(this.isAnagram(input))
          {
            output.push(input);
          }
        }
          return output;
}
Anagram.prototype.isAnagram=function(input){
  if(this.sortWord(this.word)===this.sortWord(input))
  {
    if(this.word.toLowerCase()===input.toLowerCase())
    {
      return false;
    }
    return true;

  }
  return false;
}
Anagram.prototype.sortWord=function(input){
  var toArray=input.toLowerCase().split("");
  toArray=toArray.sort();
  var output="";
  for(var i=0; i<toArray.length; i++) {
    output+=toArray[i];
  }
  return output;
}
module.exports=Anagram;
