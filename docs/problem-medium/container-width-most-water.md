---
title: 0011. 盛水最多的容器
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/container-with-most-water/](https://leetcode-cn.com/problems/container-with-most-water/)

::: tip 提示
涉及到`数组`、`双指针`
:::

#### 题目描述

给你 `n` 个非负整数 `a1`，`a2`，`...`，`an`，每个数代表坐标中的一个点  `(i, ai)` 。在坐标内画 `n` 条垂直线，垂直线 `i`  的两个端点分别为  `(i, ai)` 和 `(i, 0)`。找出其中的两条线，使得它们与  `x`  轴共同构成的容器可以容纳最多的水。

说明: 你不能倾斜容器，且 `n`的值至少为 `2`。

![](https://i.loli.net/2021/02/10/4a3bEOGudL1Z9QX.jpg)

示例:

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```


#### 思路分析

暴力法: 两两求解，计算承载水量，不断更新最大值，最后返回最大值。

需两层循环，时间复杂度O(n^2)，空间复杂度O(1)


双指针法:

- 关键字: 左右两边
- 难点: 如何移动指针
  - 相同情况下两边距离越远越好
  - 区域受限于短边

比较左右指针哪个高度最大，大的不动，小的移动。每次循环更新最大值。

代码实现:


```js
function maxArea(height){
    let max = 0;
    let L = 0;
    let R = height.length - 1;
    while(L < R){
        const minHeight = Math.min(height[L],height[R]);
        max = Math.max(max, (R - L)*minHeight)
        if(height[L] < height[R]){
            L++;
        }else{
            R--;
        }
    }
    return max
}

```

时间复杂度: O(n), 双指针总计遍历数组一次。

空间复杂度: O(1), 只需额外的常数级别空间。





