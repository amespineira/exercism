var Hamming= function() {};
  Hamming.prototype.compute = function(strand1, strand2) {
    var array1=strand1.split("");
    var array2=strand2.split("");
    if(array1.length!=array2.length)
    {
      throw new Error('DNA strands must be of equal length.');
    }
    var distance=0;
    for(var i=0; i<array1.length; i++)
    {
      if(array1[i]!==array2[i])
      {
        distance++
      }
    }
    return distance;
};

module.exports= Hamming;
