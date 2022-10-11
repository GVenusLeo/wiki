# 括号匹配检验

## 问题

给定一个字符串，判断其中的括号是否匹配。

## 解答

### 1. 使用栈

```python
def is_matched(expr: str) -> bool:
    """判断括号是否匹配
    Args:
        expr (str): 表达式
    Returns:
        bool: 是否匹配
    """
    lefty = '({['
    righty = ')}]'
    stack = []
    for c in expr:
        if c in lefty:
            stack.append(c)
        elif c in righty:
            if not stack:
                return False
            if righty.index(c) != lefty.index(stack.pop()):
                return False
    return not stack
```

### 2. 使用字典

```python
def is_matched(expr: str) -> bool:
    """判断括号是否匹配
    Args:
        expr (str): 表达式
    Returns:
        bool: 是否匹配
    """
    lefty = '({['
    righty = ')}]'
    stack = []
    mapping = dict(zip(lefty, righty))
    for c in expr:
        if c in lefty:
            stack.append(c)
        elif c in righty:
            if not stack:
                return False
            if c != mapping[stack.pop()]:
                return False
    return not stack
```

### 3. 使用集合

```python
def is_matched(expr: str) -> bool:
    """判断括号是否匹配
    Args:
        expr (str): 表达式
    Returns:
        bool: 是否匹配
    """
    lefty = '({['
    righty = ')}]'
    stack = []
    mapping = set(zip(lefty, righty))
    for c in expr:
        if c in lefty:
            stack.append(c)
        elif c in righty:
            if not stack:
                return False
            if (stack.pop(), c) not in mapping:
                return False
    return not stack
```

### 4. 使用字典和集合

```python
def is_matched(expr: str) -> bool:
    """判断括号是否匹配
    Args:
        expr (str): 表达式
    Returns:
        bool: 是否匹配
    """
    lefty = '({['
    righty = ')}]'
    stack = []
    mapping = dict(zip(lefty, righty))
    for c in expr:
        if c in lefty:
            stack.append(c)
        elif c in righty:
            if not stack:
                return False
            if mapping[stack.pop()] != c:
                return False
    return not stack
```