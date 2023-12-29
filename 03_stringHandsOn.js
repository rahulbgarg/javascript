function stringHandsOn() {
    var firstString = "    Hey you are doing good, keep it up   ";
    console.log("1) Given a String: " ,firstString);
  
    var lengthOfString = firstString.length;
    console.log("2) Length of string is: " , lengthOfString);
  
    var trimmedString = firstString.trim();
    var lengthAfterTrim = trimmedString.length;
    console.log("3) String after trimming: " , trimmedString);
    console.log("4) Length after trimming: " , lengthAfterTrim);
  
    var extraSpacesCount = lengthOfString - lengthAfterTrim;
    console.log("5) Total extra spaces removed: " , extraSpacesCount);
  
    var firstCharacter = trimmedString[0];
    var lastCharacter = trimmedString[lengthAfterTrim - 1];
    console.log("6) First and last characters after trim: " , firstCharacter, ",", lastCharacter);
  
    var wordsArray = trimmedString.split(/\s+/);
    var totalWordsCount = wordsArray.length;
    console.log("7) Total words count after trimming: " , totalWordsCount);
  
    var indexOfGood = trimmedString.indexOf("good");
    console.log("8) Index of the word 'good': " , indexOfGood);
  
    const substringUsingSubstring = trimmedString.substring(22);
    const substringUsingSlice = trimmedString.slice(22);
    console.log("9)Substring of string: " , substringUsingSubstring,",", "Slice of string: " , substringUsingSlice);
    
   
    const endsWithUp = trimmedString.endsWith("up");
    console.log("10) String end with 'up'? " + endsWithUp);
  
    const startsWithHey = trimmedString.startsWith("Hey");
    console.log("11) String start with 'Hey'? " + startsWithHey);
  }
  
  stringHandsOn();

  