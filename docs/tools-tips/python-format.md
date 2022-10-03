# Python 转换文件格式

## otf 转 ttf

```shell
pip install otf2ttf
otf2ttf MyFont.otf
```

## 图片格式转换

```python
from PIL import Image

a = Image.open('a.png')
a = a.convert('RGB')
a.save('a.jpg')
```