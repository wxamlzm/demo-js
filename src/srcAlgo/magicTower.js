// 小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。
// 每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；
// 负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。
// 小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，
// 为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。
// 请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。

/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function (nums) {
  // 如果数和小于0，那么必然无法达成，对吧
  // 一次遍历，《好像》无法同时得到总和，并进行排序，
  // 正向splice后放入数组尾部，会影响数组遍历，咋办呢
  // 我这里判断反转在这个题设下没有意义，但《感觉》是个武断缺乏依据的判断

  // for (let i = 0; i < nums.length; i++) {
  //   if (sum + nums[i] >= 0) {
  //     sum += nums[i]
  //   } else {
  //     nums.splice(i, 1)
  //     nums.push(nums[i])
  //   }
  // }

  // 理解题设为，依次累加数组保证和为证，否则可以将当前使累加为负的元素移动到数组末尾来打成该功能
  // 考虑分割子问题为，前i-1位数组的累加的和和当前第i位的和，如果无法满足>=1，可以将当前数移动到末尾
  // 但同样碰到了遍历时如何处理触发移动条件的num[i]的问题
  // 换个角度，题设只要求求需要调整几次，或是否可以，并没有要求调整方案，那么可以遍历一遍，求和和count来执行

  // let n = nums.length
  // let sum = 0
  // let arrayCount = 0
  // let i = 0
  // let ansCount = 0
  // while (arrayCount < n) {
  //   sum += nums[i]
  //   if (sum >= 1) {
  //     i++
  //   } else {
  //     const tailNum = nums[i]
  //     nums.push(tailNum)
  //     nums.splice(i, 1)
  //     ansCount++
  //   }
  //   arrayCount++
  // }
  // if (sum >= 1) {
  //   return ansCount
  // } else {
  //   return -1
  // }

  // 完全理解错了，触发条件不是当sum为-1的时候，这是个最优解问题，需要整体对怎么进行位置调整做判断

  // 依旧认为是动态规划问题，问题是子问题是什么，如果不是按序列进行递推的话

  // 看起来和目标答案只有一步之遥，是放弃的太早了吗，只需要更新调整方案就可以了，但就是没做到
  let bloodVolume = 1
  const noAdjustMinNums = []
  let adJustNumsTotal = 0
  let adjustCount = 0
  for (let i = 0; i < nums.length; i++) {
    bloodVolume += nums[i]
    if (nums[i] < 0) {
      // 保存没有被调整过的负数
      noAdjustMinNums.push(nums[i])
    }
    // 血量不够，需要调整房间访问顺序
    if (bloodVolume <= 0) {
      // 由小到大排序
      noAdjustMinNums.sort((a, b) => a - b)
      // 把最小的负数调整到后面
      let minNum = noAdjustMinNums.shift()
      bloodVolume += -minNum //恢复血量
      adJustNumsTotal += minNum // 记录这些被调整的负数之和
      adjustCount++ // 调整次数++
    }
  }
  if (-adJustNumsTotal > bloodVolume) return -1
  return adjustCount
}

let nums = [100, 100, 100, -250, -60, -140, -50, -50, 100, 150]
const res = magicTower(nums)
console.log(res)
