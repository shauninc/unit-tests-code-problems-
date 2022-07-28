export const hackerSpeak = (words) => {
  let result = ""
  const replaceChars = ["a", "e", "i", "o", "s"]
  for (let i = 0; i < words.length; i++) {
    let char = words.charAt(i)
    if (replaceChars.includes(char.toLowerCase())) {
      char = char.toLowerCase().replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/s/g, "5")
    }
    result = result.concat(char)
  }
  return result
}