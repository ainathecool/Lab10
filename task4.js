
function reverseString(a){
  var rev = a.split("");
   var revstr = rev.reverse();
   var join = revstr.join("");


   return join;

 

}

module.exports.reverseString = reverseString;

/*  var rev = "     ";
   len = a.length;

   for(let i =0; i<a.length;i++)
   {
     rev[i] = a[len - i];
     return rev;
   }
   */