---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# 二分法

## 问题

给定 N 个从小到大排好序的整数序列，以及某待查找整数 X ，目标是找到 X 在 List 中的下标。若下标存在则返回；否则返回 -1，表示没有找到。

## 解答

### 1 暴力循环

```python
def solution1(n: int, p: list[int], x: int) -> int:
    """在已排序的列表中查找指定数的下标
    Args:
        n: 列表长度
        p: 列表
        x: 查找的数
    Returns:
        下标
    """
    for i in range(n):
        if p[i] == x:
            return i
    return -1
```

### 2 二分法查找

```python
def solution2(n: int, p: list[int], x: int) -> int:
    """二分法在已排序列表中查找指定数的下标
    Args:
        n: 列表长度
        p: 列表
        x: 查找的数
    Returns:
        下标
    """
    left = 0
    right = n - 1
    while left <= right:
        mid = (left + right) // 2
        if p[mid] == x:
            return mid
        elif p[mid] > x:
            right = mid - 1
        else:
            left = mid + 1
    return -1
```

## 总结

顺序查找与二分法的空间复杂度一样，皆为：

$$
S(n) = O(1)
$$

顺序查找时间复杂度为：

$$
T_1(n) = O(n)
$$

二分法时间复杂度为：

$$
T_2(n) = O(\log{n})
$$