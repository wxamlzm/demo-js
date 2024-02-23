// 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

//     操作 1：交换任意两个 现有 字符。
//         例如，abcde -> aecdb
//     操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
//         例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）

// 你可以根据需要对任意一个字符串多次使用这两种操作。

// 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let count1 = new Array(26).fill(0),
    count2 = new Array(26).fill(0)
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 97]++
  }
  for (let i = 0; i < word2.length; i++) {
    count2[word2.charCodeAt(i) - 97]++
  }
  for (let i = 0; i < 26; i++) {
    if (
      (count1[i] > 0 && count2[i] == 0) ||
      (count1[i] == 0 && count2[i] > 0)
    ) {
      return false
    }
  }
  count1.sort()
  count2.sort()
  return count1.toString() == count2.toString()
}

let word1 = 'cabbba',
  word2 = 'abbccc'
const res = closeStrings(word1, word2)
