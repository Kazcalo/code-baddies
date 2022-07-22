// This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:


// problem
function colorOf(r,g,b){
    //coding here
    
  }


// Answer
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}








//example
  var num=111;
var a=num.toString(), 
    b=num.toLocaleString(), 
    c=num+""
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '111', '111' ]

//sample test

describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(colorOf(255,0,0), "#ff0000");
      showColor("#ff0000")
      Test.assertSimilar(colorOf(0,111,0), "#006f00");
      showColor("#006f00")
      Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
      showColor("#010203")
    });
  });
  