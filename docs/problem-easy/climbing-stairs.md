---
title: 0070. 爬楼梯
sidebarDepth: 2
---


#### 题目地址

[https://leetcode-cn.com/problems/climbing-stairs/](https://leetcode-cn.com/problems/climbing-stairs/)


::: tip 提示
涉及`斐波那契数列`、`动态规划`
:::

#### 题目描述

假设你正在爬楼梯。需要 n  阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例1: 

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

示例2：

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

#### 思路分析

利用`动态规划`的算法思想-可以分成多个子问题，爬第n阶楼梯的方法数量，等于两部分之和:

- 爬上`n-1`阶楼梯的方法数量，再爬1阶就到n了。
- 爬上`n-2`阶楼梯的方法数量，再爬2阶就到n了。

可以得到公式:

```
climbs[n] = climbs[n-1] + climbs[n-2]

climbs[1] = 1 // 爬第1阶
climbs[2] = 2 // 爬第2阶
climbs[3] = 3 // 爬第3阶
climbs[4] = 5 // 爬第4阶
...
// 形成斐波拉契数列
```

#### 代码实现

```js
function climbStairs(n){
    const climbs = [];
    climbs[1] = 1;
    climbs[2] = 2;
    for(let i = 3; i <= n; i++){
        climbs[i] = climbs[i-1] + climbs[i-2]
    }
    return climbs[n]
}
```

时间复杂度O(n-2):循环了n-2次

空间复杂度O(n): 存储了n个键值对