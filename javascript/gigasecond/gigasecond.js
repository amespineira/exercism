function Gigasecond(Date) {
  this.Date=Date;
}
  Gigasecond.prototype.date = function() {
      //needs to return the 1 gigasecond anniversary of the inputed date...........
      return(new Date(parseInt(this.Date.getTime())+1000000000000));
};

module.exports= Gigasecond;
