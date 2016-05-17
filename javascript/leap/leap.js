function Year(yearin) {
    this.year=yearin;

  }
  Year.prototype.isLeap = function() {
    // on every year that is evenly divisible by 4
    //   except every year that is evenly divisible by 100
    //     unless the year is also evenly divisible by 400
    if(this.year%4!=0)
    {
      return false;
    }
    else if(this.year%100===0)
    {
      if(this.year%400===0)
      {
        return true;
      }
      else {
        return false
      }
    }
    else{
      return true;
    }
};

module.exports= Year;
