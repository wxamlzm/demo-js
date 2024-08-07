// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  const dp = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || i === 1) {
      dp[i] = nums[i]
    } else {
      if (dp[i - 3] !== undefined) {
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i]
      } else {
        dp[i] = Math.max(dp[i - 2]) + nums[i]
      }
    }
  }
  return Math.max(...dp)
}

// 新增条件房间是环形的
// 即首项和末项不能同时选取
var rob2 = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)
  // 两个不能同时选取，就分去头和去尾的两组数组
  const robFuc = nums => {
    const dp = new Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
      if (i === 0 || i === 1) {
        dp[i] = nums[i]
      } else {
        if (dp[i - 3] !== undefined) {
          dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i]
        } else {
          dp[i] = Math.max(dp[i - 2]) + nums[i]
        }
      }
    }
    return Math.max(...dp)
  }
  const nums1 = nums.slice(0, nums.length - 1)
  const nums2 = nums.slice(1, nums.length)

  const max1 = robFuc(nums1)
  const max2 = robFuc(nums2)

  return Math.max(max1, max2)
}

const nums = [1, 2, 3, 1]
const res = rob2(nums)
console.log(res)
