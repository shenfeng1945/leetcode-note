---
title: 0001. 两数之和
sidebarDepth: 2
---

#### 题目地址 

[https://leetcode-cn.com/problems/two-sum](https://leetcode-cn.com/problems/two-sum)

::: tip 提示
涉及到的算法知识有`数组`、`哈希表`
:::

#### 题目描述

给定一个整数数组 `nums` 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例：


```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

#### 思路分析

1. 暴力解法: 两层 `for循环`，判断两者数值之和是否为`target`。

复杂度分析:

时间复杂度: O(n2)，n为数组长度
空间复杂度: O(1)，只用到了常数个临时变量

2. 查找表法: 

遍历的同时，记录一些信息，以省去一层循环，以`空间换时间`。

记录已遍历过的数组和下标，通过查找表实现。

- 哈希表: 根据键(key)直接访问在内存存储位置的数据结构。不用维护查找表的顺序
- 平衡二叉搜索树

![](https://i.loli.net/2021/02/10/jc8fhkGZYTVA4Qd.png)

代码实现: 

```js
function sum(nums, target){
    const records = {}
    const len = nums.length;
    for(let i = 0; i < len; i++>){
        if(records[target - nums[i]] !== undefined){
            return [
                records[target - nums[i]],
                i
            ]
        }
        records[nums[i]] = i
    }
}
```

时间复杂度O(N): N为数组长度

空间复杂度O(N): N为数组长度，用于哈希表的开销，最多存储 `N - 1`个键值对

