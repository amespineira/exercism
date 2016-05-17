function BeerSong() {
}
  BeerSong.prototype.verse = function(versenum) {
    if(versenum===0)
    {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    if(versenum===1)
    {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
    }
    if(versenum===2)
    {
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
    }
      return versenum+' bottles of beer on the wall, '+versenum+' bottles of beer.\nTake one down and pass it around, '+(versenum-1)+' bottles of beer on the wall.\n'
};
  BeerSong.prototype.sing =function(versestart, verseend){
    var output="";
    if(verseend===undefined)
    {
      verseend=0;
    }
    for(var i=versestart; i>verseend; i--)
    {
      output+=this.verse(i)+"\n";
    }
    output+=this.verse(verseend);
    return output;
  }


module.exports= BeerSong;
