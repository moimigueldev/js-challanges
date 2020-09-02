const express = require("express");
const app = express();
const port  = 4000;


function dna(s) {

  let newString = '';

  for (let index = 0; index < s.length; index++) {
    if(s[index] === 'a') {
        newString = newString + 't'
    }

    if (s[index] === 't') {
      newString = newString +'a'
    }

    if (s[index] === 'c') {
      newString = newString +'g'
    } 

    if (s[index] === 'g') {
      newString = newString +'c'
    }
    
  }

  return newString

}

console.log(dna('ataattccgg'))



app.get("/", async (req, res) => {
  res.send("JS-Challange modules");
});

app.listen(port, () => console.log("app on port", port));
