---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# 数制转换

## 问题

对输入的任意飞赴十进制整数，打印输出与其值相等的八进制数。

## 解答

原理：

$$
N = (N\ div\ d) \times d + N\ mod\ d
$$

其中：$div$ 表示整除，$mod$ 表示取余。

```python
def dec2oct(num:int) -> str:
    """十进制转换八进制
    Args:
        num (int): 十进制数
    Returns:
        str: 八进制数
    """
    result = ''
    if num == 0:
        return '0'
    while num > 0:
        result = str(num % 8) + result
        num = num // 8
    return result

def dec2oct_stack(num:int) -> str:
    """使用栈实现十进制转换八进制
    Args:
        num (int): 十进制数
    Returns:
        str: 八进制数
    """
    stack = []
    result = ''
    if num == 0:
        return '0'
    while num > 0:
        stack.append(num % 8)
        num = num // 8
    while stack:
        result += str(stack.pop())
    return result
```