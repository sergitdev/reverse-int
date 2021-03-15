module.exports = function reverse (n) {
    var number;
    if (n > 0)
        {
          number = +((n.toString()).split('').reverse().join(''));  
        } 
    else
        {
            number = n*(-1);
            number = +((number.toString()).split('').reverse().join('')) ;
           
        }
    return number; 
}
