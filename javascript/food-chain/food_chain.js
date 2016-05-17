
var FoodChain = function() {};
var animals={
  1:{
    name:"fly",
    sentance:"\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n"
  },
  2:{
    name:"spider",
    sentance:"\nIt wriggled and jiggled and tickled inside her.\n",
    sentanceOtherCase:" that wriggled and jiggled and tickled inside her.\n"
  },
  3:{
    name:"bird",
    sentance:"\nHow absurd to swallow a bird!\n",
  },
  4:{
    name:"cat",
    sentance:'\nImagine that, to swallow a cat!\n'

  },
  5:{
    name:"dog",
    sentance:'\nWhat a hog, to swallow a dog!\n'
  },
  6:{
    name:"goat",
    sentance:'\nJust opened her throat and swallowed a goat!\n'
  },
  7:{
    name:"cow",
    sentance: '\nI don\'t know how she swallowed a cow!\n'
  },
  8:{
    name:"horse",
    sentance: '\nShe\'s dead, of course!\n'
  }
}
FoodChain.prototype.verses=function(verse1,verse2)
{
  var out='';
  for(var i=verse1; i<=verse2 ; i++)
    {
      out+=this.verse(i);
      out+="\n"
    }
    return out;
}
FoodChain.prototype.verse = function(verseNum) {
  if(verseNum===1 || verseNum===8)
  {
  return("I know an old lady who swallowed a "+animals[verseNum].name+"."+animals[verseNum].sentance);
  }
  else
  {
    return("I know an old lady who swallowed a "+animals[verseNum].name+"."+animals[verseNum].sentance+this.recursive(verseNum))
  }
}
FoodChain.prototype.recursive = function(verseNum) {
  if(verseNum===2)
  {
    return "She swallowed the "+animals[verseNum].name+" to catch the "+animals[verseNum-1].name+"."+animals[verseNum-1].sentance;
  }
  else if(verseNum===3) {

    return "She swallowed the "+animals[verseNum].name+" to catch the "+animals[verseNum-1].name+animals[verseNum-1].sentanceOtherCase+this.recursive(verseNum-1);


  }
  else
  {
    return "She swallowed the "+animals[verseNum].name+" to catch the "+animals[verseNum-1].name+".\n"+this.recursive(verseNum-1);
  }
}

module.exports= FoodChain;
