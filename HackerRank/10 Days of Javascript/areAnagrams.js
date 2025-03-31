function anAnagrams(s1, s2) {
  // Convert both strings to lowercase and sort their characters
  const sortedS1 = s1.toLowerCase().split('').sort().join('');
  const sortedS2 = s2.toLowerCase().split('').sort().join('');

  // Compare the sorted strings
  return sortedS1 === sortedS2;
}

// Example usage:
console.log(anAnagrams("listen", "silent")); // true