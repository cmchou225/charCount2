function charCount (string){
  var str = string.replace(/\s/g, '').toLowerCase();
  console.log(str);
  var strObject = {}
  for(var i = 0; i < str.length; i++){
    if(!strObject.hasOwnProperty(str[i]))
      strObject[str[i]] = [];
    strObject[str[i]].push(i)
  }
  return strObject;
}

console.log(charCount("lighthouseinthehouse"));