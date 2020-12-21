// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(i){
    var bottlesLeft = i - 1
    text = ""
    text1 = " bottles of soda on the wall, "
    text2 = " bottles of soda, take one down pass it around " 
    text3 = " bottles of soda on the wall" 
    text4 = "\n"

  while (i > 0) {
    text += i + text1 + i + text2 + bottlesLeft + text3 + text4;
    i--;
    }
  return text;
}
console.log(annoyingSong(4));
