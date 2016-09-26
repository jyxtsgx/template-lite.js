
# template-lite.js
微型的 javascript 模版引擎, 仅仅 1kb, 有时候我们只需要一个 string 替换, 但是又不想使用那么庞大的 template, 那么它就是你正在寻找的。

## Example
- [module example](./example/module.html)

## 使用方法

### 下载
```
npm install template-lite.js --save
```

### 引入 template-lite.js
```javascript
<script src="./dist/template-lite-compiled.js"></script>
```

### 使用
```javascript
    var result = template(
            document.getElementById('main').innerHTML
            , {
                hello: 'template-lite.js',
                description: '这是一个微型的 javascript 模版引擎, 它仅仅 1kb, 当然也没任何额外的功能, 仅仅作为模版替换, 支持 function 传入。'
            });
    document.body.insertAdjacentHTML('afterbegin', result);
```

支持 函数 引入
```javascript
    {
        hello: 'hello world',
        description: function () {
            return 'template-lite.js'
        }
    }
```

So easy!

## License
template-lite.js is released under the MIT license.
