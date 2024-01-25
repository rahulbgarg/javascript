
console.log(`----------------------------------------------------------------step 1---------------------------------------------------------`);

// console.log(`====== WAP for find word is Palindrome or not ======\n`);
// for eg :- MADAM
const isPalindrome = function(word){   
const reversWord=word.split("").reverse().join("");
return word==reversWord?true:false;
}
const result = isPalindrome("madam");
console.log(`Given Word 'madam' Is Palindrome => ${result}\n`);

const result1 = isPalindrome("dad");
console.log(`Given Word 'dad' Is Palindrome => ${result1}\n`);

const result2 = isPalindrome("hello");
console.log(`Given Word 'hello' Is Palindrome => ${result2}`);

console.log(`----------------------------------------------------------------step 2---------------------------------------------------------`);

// console.log(`====== WAP for find word is Palindrome or not ======\n`);
// 'heart' and 'earth' are anagrams.
// 'heart' => Sort in ascending order ==>  aehrt
// 'earth' => Sort in ascending order ==> aehrt

const isAnagrams = (str1, str2)=>{ 
    const resultStr1 = str1.split("").sort().join("");
    const resultStr2 = str2.split("").sort().join("");
    return resultStr1==resultStr2 ? true : false;
}
const resultAnagram1 =isAnagrams("silent","listen");
console.log(`Given words 'Silent' and 'Listen' are Anagram or Not => ${resultAnagram1} `);

const resultAnagram2 =isAnagrams("Hello","World");
console.log(`Given words 'Hello' and 'World' are Anagram or Not => ${resultAnagram2} `);

const resultAnagram3 =isAnagrams("Such","Much");
console.log(`Given words 'Such' and 'Much' are Anagram or Not => ${resultAnagram3} `);

console.log(`------------------------------------------------------------------End----------------------------------------------------------`);
