//Arrow Functions
//1.Print odd numbers 

var odd=()=>{
    let arr=[1,2,3,4,5,6,7,8,9,10];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
odd();
// //Output:
// 1
// 3
// 5
// 7
// 9

//2.Convert all the strings to title caps in a string array

titleCase=(string)=> {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
    }
    titleCase("sun raises in the east");
    

//Output
//Sun Raises In The East

//3. Sum of all numbers in an array

var summation=()=>{
    var arr = [4, 8, 7, 13, 12];
     
       var sum = 0;
       for (let i = 0; i < arr.length; i++) {
           sum += arr[i];
       }
     
           return sum;
    }
    console.log(summation());
    
    //    Output
    //    44

//4.Return all the prime numbers in an array

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

Prime=(num)=> {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(Prime)); 

//output:
// [2, 3, 5, 7, 11, 13, 17, 19]

//5.Return all the palindromes in an array

var arr = ['carecar', 1344, 12321, 'did', 'carrot','mom','level','madam'];
var isPalindrome = (el)=>
{
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

//output

//[ 12321, 'did', 'mom', 'level', 'madam' ]