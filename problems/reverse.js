//Write a function to reverse a string without using reverse().

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    console.log(`Character: ${character}`);
    console.log(`Reversed: ${reversed}`);
    reversed = character + reversed;
    console.log(`Reversed2: ${reversed}`);
  }
  return reversed;
}

//solution 2
function reverseString(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverseString("udayaditya"));

console.log(reverse("Hello"));