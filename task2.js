function multiples(x,y,z)
{
    //write a function in NodeJS that finds the sum of all the multiples of x or y
    //below z and then tests that function.
    var sum = 0;
    
    for(let i =0; i<z; i++)
    {
        if(i%x == 0 || i%y ==0)
        {sum = sum + i;}
    }

    return sum;
}

module.exports.multiples = multiples;