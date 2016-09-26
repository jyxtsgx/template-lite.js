
# template-lite.js
微型的 javascript 模版引擎, 仅仅 1kb, 有时候我们只需要一个 string 替换, 但是又不想使用那么庞大的 template, 那么它就是你正在寻找的。

## Example
- [module example](https://gongchao.github.io/template-lite.js/example/module.html)

## 使用方法

### 下载
```
npm install template-lite.js --save
```

### 引入 template-lite.js
```html
<script src="./dist/template-lite-compiled.js"></script>
```

### 开始使用

#### 标签
标签使用 ```${variable}```

#### 声明模版
```html
<script id="main" type="text/template">
    <div class="fade">
        <h1>${hello}</h1>
        <p>${description}</p>
        <p>使用说明:</p>
        <p>引入 template-lite.js </p>
        <code>
            template(string, object);
        </code>
        <p>就是这么简单!</p>
        <p>So easy, 马上开始吧</p>
        <a href="https://github.com/gongchao/template-lite.js">github</a>
    </div>
</script>
```

#### 引入模版
```javascript
    var result = template(
            document.getElementById('main').innerHTML
            , {
                hello: 'template-lite.js',
                description: '这是一个微型的 javascript 模版引擎, 它仅仅 1kb, 当然也没任何额外的功能, 仅仅作为模版替换, 支持 function 传入。'
            });
    document.body.insertAdjacentHTML('afterbegin', result);
```

## 方法支持

### 传入类型
#### 函数传入
```javascript
    {
        hello: 'hello world',
        description: function () {
            return 'template-lite.js'
        }
    }
```

### 运算
#### 三目运算
```html
<h1>${true ? 'condition is true' : 'contrary'}</h1>
```

## License
template-lite.js is released under the MIT license.
