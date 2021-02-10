---
title: 0015. 三数之和
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/3sum/](https://leetcode-cn.com/problems/3sum/)

::: tip 提示
涉及到算法知识有`数组`、`双指针`
:::

#### 题目描述

给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素`a`，`b`，`c` ，使得`a + b + c = 0`。请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例:

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

#### 思路分析

把求和问题变为求差问题: 固定其中一个数，在剩下的数中找是否有两个的和与固定数相加是否为0；

::: tip 双指针法
适用一般求和、比大小，前提是数组必须有序。
:::

- 先将数组进行排序

```js
nums.sort((a,b) => a - b)
```

- 对数组遍历，记录当前数字 `nums[i]` 。同时左右指针指向`nums[i]`后面的两端。计算三个数之和，并添加结果集。

- 如果 `nums[i]` 大于`0`，则三数之和无法等于`0`，结束循环。
- 如果 `nums[i] === nums[i-1]`，则说明数字重复，跳过。
- 当三数之和等于0时，`nums[L] === nums[L + 1]`会导致结果重复，应该跳过，L++
- 当三数之和等于0时，`nums[R] === nums[R - 1]`会导致结果重复，应该跳过，R++
- 当三数之和大于0时，右侧偏大，右指针左移
- 当三数之和小于0时，左侧偏大，左指针右移

![](https://i.loli.net/2021/02/10/3AFnNpYVTZ85IPd.png)

#### 代码实现

```js
function sum(nums){
    const res = [];
    nums.sort((a,b) => a - b)
    if(nums === null && nums.length < 3) return res;
    for(let i = 0; i < nums.length; i++){
        let L = i + 1;
        let R = nums.length - 1;
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue; // 去重
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                res.push([nums[i], nums[L], nums[R]])
                while(L < R && nums[L] === nums[L+1]) L++; //去重
                while(L < R && nums[R] === nums[R+1]) R--; // 去重
                L++;
                R--;
            }else if(sum > 0){
                R--;
            }else if(sum < 0){
                L++;
            }
        }
    }
    return res
}
```

时间复杂度O(n^2)
