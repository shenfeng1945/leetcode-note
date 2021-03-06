---
title: 0239. 滑动窗口最大值
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/sliding-window-maximum](https://leetcode-cn.com/problems/sliding-window-maximum/)

::: tip 提示
涉及到的算法: `双端队列`
:::

#### 题目描述

给定一个数组 nums，有一个大小为  k  的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k  个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

示例:

```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```


#### 题目思路

- 检测队尾元素
- 将当前元素入队
- 检测对头元素，看对头元素是否被排除在滑动窗口范围之外

#### 代码实现


```js
function maxSlidingWindow(nums, k){
    const len = nums.length;
    const res = [];
    const deque = []
    for(let i = 0; i < len; i++){
       while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
           deque.pop()
       }
       deque.push(i)
       // 当对头元素的索引已被排除在滑动窗口之外时
       while(deque.length && deque[i] < i - k){
           deque.shift()
       }
       if(i >= k - 1){
           res.push(deque[0])
       }
       return res
    }
}
```


