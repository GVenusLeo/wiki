---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# 秦九韶算法

## 问题

计算多项式：

$$
f(x) = a_0 + a_1x + ... + a_{n-1}x^{n-1} + a_nx^n
$$

## 解答

### 方法 1：暴力循环

```python
def solution(n: int, a: list[int], x: float) -> float:
    """求解多项式函数值
    Args:
        n: 函数的项数
        a: 函数的系数
        x: 自变量
    Returns:
        函数值
    """
    result = 0
    for i in range(n):
        result += a[i] * x ** i
    return result
```

### 方法 2：秦九韶算法

$$
f(x) = a_0+x(a_1+x(\dots(a_{n-1}+x(a_n))))
$$

```python
def solution(n: int, a: list[int], x: float) -> float:
    """秦九韶算法求解多项式函数值
    Args:
        n: 函数的项数
        a: 函数的系数
        x: 自变量
    Returns:
        函数值
    """
    result = 0
    for i in range(n - 1, -1, -1):
        result = result * x + a[i]
    return result
```

## 总结

计算机处理加减法比乘除法快得多，以做乘法的次数来看，方法 1 的时间复杂度：

$$
T_1(n) = O(\frac{n+n^2}{2})
$$

方法 2 的时间复杂度：

$$
T_2(n) = O(n)
$$