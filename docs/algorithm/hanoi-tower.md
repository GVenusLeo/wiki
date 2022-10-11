# 汉诺塔问题

## 问题

有三根柱子，X、Y、Z，X 柱子上有 n 个盘子，盘子的大小不等，要求将 X 柱子上的盘子移动到 Z 柱子上，且每次只能移动一个盘子，且大盘子不能放在小盘子上面。

## 解法

### 1 递归

```python
def hanoi(n, x, y, z):
    if n == 1:
        print(x, '-->', z)
    else:
        hanoi(n - 1, x, z, y)
        print(x, '-->', z)
        hanoi(n - 1, y, x, z)
```

### 2 栈

```python
def hanoi(n, x, y, z):
    stack = []
    while True:
        while n > 1:
            stack.append((n, x, y, z))
            n -= 1
            z, y = y, z
        print(x, '-->', z)
        if not stack:
            break
        n, x, y, z = stack.pop()
        print(x, '-->', z)
        n -= 1
        x, y = y, x
```