function ETL()
{

}
ETL.prototype.transform = function (input) {
    //key, array
    var output={};
    for(var key in input)
    {
      for(var i=0; i<input[key].length; i++)
      {
        output[input[key][i].toLowerCase()]=Number(key);
      }
    }
    return output;
};

module.exports= ETL;
