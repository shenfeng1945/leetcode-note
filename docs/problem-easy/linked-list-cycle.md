---
title: 0141. 环形链表
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/linked-list-cycle/](https://leetcode-cn.com/problems/linked-list-cycle/)

::: tip 提示
涉及`链表`、`快慢指针`
:::

#### 题目描述

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。(pos给计算机的，用于生成想要的环)

示例1: 

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点(第几个节点与pos有关)。
```

![](https://i.loli.net/2021/02/10/YulBGwLoKjT3SNd.png)

#### 思路分析

链表成环常见两种方法: `标志法`和`快慢指针法`

##### 1. 标志法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while(head) {
        if(head.flag) return true
        head.flag = true;
        head = head.next;
    }
    return false
};

// 哈希表
var hasCycle = function(head){
    let map = new Map()
    while(head){
       if(map.has(head)) return true
       map.set(head, true) // 存的是节点地址
       head = head.next
    }
    return false;
}

```


##### 2. 快慢指针(双指针法)

设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果成环，快慢指针终会执行同一节点，否则直到快指针指向 `null`，快慢指针都不会相遇。


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast){
      if(fast.next === null) return false;
      fast = fast.next.next;
      slow = slow.next
      if(fast === slow) return true
    }
    return false
};

```




