function Pangram(word) {
  this.word=word
  this.alphabet="abcdefghijklmnopqrstuvwxyz"
}
  Pangram.prototype.isPangram = function() {
    var alphabetArray=this.alphabet.split("");
    var lowercase=this.word.toLowerCase();
    for(var i=0; i<alphabetArray.length; i++)
    {
      if(lowercase.indexOf(alphabetArray[i])===-1)
      {
        return false;
      }
    }
    return true;
};

module.exports= Pangram;
