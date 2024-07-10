### 什么是你应该知道的
你应该对HTML, CSS和JavaScript有很好的理解，在这门课中，我们会学习TypeScript, 
TypeScript是JavaScript的超级集合，它在语言中添加了静态类型，本质上可以帮助我们
在开发的时候快速的发现错误，这可以节省我们的时间并减少我们以后得麻烦，不用担心没有学过
TypeScript，后面我会手把手的从零教学教学

```typescript
interface Props {
    age: number;
}
```

### 什么是React
React是JavaScript的库用于动态和交互式的用户界面，它是2011年Facebook创建，目前是使用最广泛的JavaScript的库。如果
你在找前端的工作，你应该很自信如何去构建一个React的应用程序

为什么React做的好

当网页加载到浏览器时，浏览器会获取HTML代码，并创建树状文档结构叫做Dom

![alt text](image.png)

例如我们可以用JavaScript在点击按钮时隐藏元素，
```JavaScript
const btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    const div = document.querySelector('#div');
    div.style.display = 'none';
})
```
当我们的逻辑增加时，我们管理这样的纯粹的JavaScript代码会变得非常有挑战，这是是React发挥作用的地方。我们不需要再担心
查询和更新Dom(上面的代码例子就是查询和更新Dom), 而是用小型
可以重用组件构建代码，React会高效的创建和更新Dom, 所以
`Components` 帮助我们写`可复用`,`模块化`和`更好组织`的代码。

例如你想构建一个这样的顶部导航栏
![alt text](image-1.png)

我们可以一开始分为三个部分，最上面一行的导航栏(NavBar),
左侧的列表栏(Aside),中间部分的游戏内容(GameGrid),
中间的游戏部分还可以。我们可以将这些构建为3个组件，
当然在中间的游戏内容里面，我们还可以分为游戏卡片(GameCard)和点赞(LikeButton)组件

![alt text](image-2.png)

实际上，React是这样的组件树，应用程序是根，将这些组合在一起。

好了，让我们下一步设置环境，开发一个React的应用