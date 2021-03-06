---
title: 0020. 有效的括号
sidebarDepth: 2
---

#### 题目地址

[https://leetcode-cn.com/problems/valid-parentheses/](https://leetcode-cn.com/problems/valid-parentheses/)

::: tip 提示
涉及`栈`、`哈希表`
:::

#### 题目描述

给定一个只包括`'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`  的字符串，判断字符串是否有效。

有效字符串需满足:

1. 左括号必须用相同类型的右括号闭合
2. 左括号必须以正确的顺序闭合。

注意空字符被认为是有效字符串。

示例1:

```
输入: "()"
输出: true
```

示例2: 

```
输入: "()[]{}"
输出: true
```

示例3:

```
输入: "(]"
输出: false
```

示例4:

```
输入: "([)]"
输出: false
```

示例5：

```
输入: "{[]}"
输出: true
```

#### 思路分析

##### 利用`栈`结构

遍历字符串，遇到左括号，推入栈中，遇到右括号，将栈顶部元素拿出，判断是否为同一类型括号。不匹配则返回`false`，匹配则继续遍历后面字符串。

##### 代码实现:

```js
function isValid(str){
    const len = str.length;
    if(len % 2 !== 0) return false;
    const stacks = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let key of str){
        if(key in str){
            stacks.push(key)
        }else{
            if(map[stacks.pop()] !== key) return false
        }
    }
    return !stacks.length
}
```

时间复杂度O(n)

空间复杂度O(n)



