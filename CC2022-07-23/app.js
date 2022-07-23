// Complete the solution so that it reverses the string passed into it.


//problem
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//Answer
const solution = str => str.split('').reverse().join('');

//Answer 2
function solution(str) {
 
    let splitString = str.split(''); 
    
    let reverseArray = splitString.reverse();
    
    let joinArray = reverseArray.join('');
    
    return joinArray;
    
  }
  
  console.log(solution('world'));