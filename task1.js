function sum(a,b){
    return a+b;
}

module.exports.sum = sum;

function sub(a,b){
    return a-b;
}

module.exports.sub = sub;

function mul(a,b){
    return a*b;
}
module.exports.mul = mul;

function div(a,b){
    if(b!=0) return a/b;
    else return "Math Error";s
}

module.exports.div = div;