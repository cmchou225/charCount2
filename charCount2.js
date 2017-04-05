function charCount (string){
  var str = string.replace(/\s/g, '');
  console.log(str);
  var strObject = {}
  for(char of str){
    if(!strObject.hasOwnProperty(char))
      strObject[char] = [];
    strObject[char].pop(string.indexOf());
  }
  return strObject;
}

console.log(charCount("lighthouse in the house");