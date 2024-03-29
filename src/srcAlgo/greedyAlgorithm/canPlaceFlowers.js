// 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。
// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  const m = flowerbed.length
  let prev = -1
  for (let i = 0; i < m; i++) {
    if (flowerbed[i] === 1) {
      if (prev < 0) {
        count += Math.floor(i / 2)
      } else {
        count += Math.floor((i - prev - 2) / 2)
      }
      prev = i
    }
  }
  if (prev < 0) {
    count += (m + 1) / 2
  } else {
    count += (m - prev - 1) / 2
  }
  return count >= n
}

let flowerbed = [1, 0, 1, 0, 1, 0, 1],
  n = 1

canPlaceFlowers(flowerbed, n)
