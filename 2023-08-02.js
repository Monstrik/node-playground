/*

Given a string s, sort it in decreasing order based on the 
frequency of the characters. The frequency of a character
is the number of times it appears in the string.

Return the sorted string. 

If there are multiple characters that appear the same number of times, return any of them.
 
Example 1:

Input: s = "book"
Output: "oobk" or "ookb" 

Example 2:

Input: s = "zwzwzw"
Output: "wwwzzz" or "zzzwww" 

Example 3:

Input: s = "apprenticeship"
Output: "pppeeiihscntra" ...

 */

function fSort(s) {
  const dict = {};
  // Create count dictionary
  s.split('').forEach((c) => {
    if (!dict[c]) dict[c] = 1;
    else dict[c] = dict[c] + 1;
  }); // console.log(dict)

  // Sort
  const sortable = [];
  for (var key in dict) {
    sortable.push([key, dict[key]]);
  }
  sortable.sort((a, b) => a[1] - b[1]); //console.log(sortable)

  // create return string
  let returnString = '';
  for (let i = sortable.length - 1; i >= 0; i--) {
    returnString += Array(sortable[i][1]).fill(sortable[i][0]).join('');
  }
  return returnString;
}

console.log(fSort('Book'.toLowerCase()));
console.log(fSort('zwzwzw'.toLowerCase()));
console.log(fSort('apprenticeship'.toLowerCase()));
