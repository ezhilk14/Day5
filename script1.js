// 1.Print odd numbers 
// a.Anonymous Function

var odd=function(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
odd();
//b.IIFE  function

(function odd(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
})();
// //Output:
// 1
// 3
// 5
// 7
// 9


// 2.Convert all the strings to title caps in a string array
// a.Anonymous Function

titleCase=function(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
    }
    titleCase("sun raises in the east");
    
//b.IIFE Function

(function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
    })("sun raises in the east");

//Output
//Sun Raises In The East

//3. Sum of all numbers in an array
// a.Anonymous Function

var summation=function(){
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
// a.Anonymous Function

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

Prime= function (num) {
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
//// a.Anonymous Function

var arr = ['carecar', 1344, 12321, 'did', 'cannot','mom','level','madam'];
var isPalindrome = function(el)
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


//6.Return median of two sorted arrays of the same size.
// a.Anonymous Function

var getMedian= function (a1, a2, n)
{
	var i = 0; 
	var j = 0;
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
		
		if (i == n)
		{
			m1 = m2;
			m2 = a2[0];
			break;
		}

	
		else if (j == n)
		{
			m1 = m2;
			m2 = a1[0];
			break;
		}
	
		if (a1[i] <= a2[j])
		{
			m1 = m2; 
			m2 = a1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = a2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}
var a1 = [1,2,3,4,5,6,7,8,9,10];
var a2 = [11,12,13,14,15,16,17,18,19,20];
var n1 = a1.length;
var n2 = a2.length;
if (n1 == n2)
	console.log("Median is "+ getMedian(a1, a2, n1));
else
	console.log("Doesn't work for arrays of unequal size");

//output
//Median is 10.5

//7.Remove duplicates from an array
/// a.Anonymous Function

var arr=["banana","apple","orange","banana","lemon","apple","pineapple"];
var Duplicate=function (data){
    return data.filter((value,index)=>data.indexOf(value)===index);
    
}
console.log(Duplicate(arr));
//output:
//[ 'banana', 'apple', 'orange', 'lemon', 'pineapple' ]

//8.Rotate an array by k times
//a.Anonymous Function

var Rotate=function (a, n, k)
{
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
		    console.log(a[n + i - k] + " ");
		}
		else {

			
			console.log((a[i - k]) + " ");
		}
	}
	console.log("<br>");
}

let array = [1, 2, 3, 4, 5];
let N = array.length;
let K = 2;

Rotate(array, N, K);
// Output:
// 4 
// 5 
// 1 
// 2 
// 3 

