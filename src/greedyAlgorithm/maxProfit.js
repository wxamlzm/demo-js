// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。
// 设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0
  let minPrice = Infinity
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice)
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}

const prices = [5, 10, 1, 6]

const res = maxProfit(prices)
console.log(res)
