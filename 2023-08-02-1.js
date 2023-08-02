var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0;

  // const acc = [];
  // for (let i = 0; i < s.length; i++) {
  //   console.log(i, acc);
  //   if (acc.indexOf(s[i]) < 0) acc.push(s[i]);
  //   else {
  //     if (i===s.length) return acc.length;
  //     else {
  //       acc.length = 0;
  //       acc.push(s[i]);
  //       i++;
  //     }

  //   }
  // }
  // return acc.length;
  const pointer1 = { l: 0, r: 1 };
  const pointer2 = { l: 0, r: 1 };

  while (pointer2.r <= s.length) {
    const s1 = s.slice(pointer1.l, pointer1.r);
    const s2 = s.slice(pointer2.l, pointer2.r);
    if (new Set(s2.split('')).size < s2.length) {
      // s2 not unique
      pointer2.l++;
    } else if (s2.length > s1.length) {
      // unique and bigger
      pointer1.l = pointer2.l;
      pointer1.r = pointer2.r;
      pointer2.r++;
    } else {
      pointer2.r++;
    }
  }
  return s.slice(pointer1.l, pointer1.r).length;
};

console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('aab') === 2);
