---
title: 0739. 每日温度
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/daily-temperatures/](https://leetcode-cn.com/problems/daily-temperatures/)

#### 题目描述

根据每日`气温`列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用  `0` 来代替。

例如，给定一个列表  `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是  `[1, 1, 4, 2, 1, 1, 0, 0]`。


#### 思路分析

![](https://i.loli.net/2021/02/13/K6aWMpekIPq2zxY.png)

维护一个递减栈。当遍历过的温度，维持的是一个态势时，我们就对