```
我们有时候希望根据不同的item返回不同的数据，比如当item为空，我们返回没有item
function ListGroup() {
  let items = ["北京", "上海", "广州", "深圳"];
  // items = [];

  // 我们有时候希望根据不同的item返回不同的数据，比如当item为空，我们返回没有item
  if (items.length === 0) {
    return <p>列表数据为空</p>
  }

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {/* 我们想让items转换为HTML的<li>北京</li>这样的HMLT一行，因为React返回的JSX只支持HTML */}
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

我们不希望代码重复，所以想在Return里面的JSX里面写if来避免重复代码，但是JSX里面没有if语句
----
请向没有JSX和React基础的我解释清楚，为什么它说JSX里面没有if，以及创造JSX的人提出了什么重要的问题，为什么JSX可以解决这个问题
```

在JSX中，没有原生的if是因为JSX本质上是JavaScript的语法糖，是一种用于描述UI结构的语法扩展。
JSX最终会编译成为JavaScript函数调用，这些函数用于创造虚拟的DOM元素。
为了理解这一点，我们需要先了解JSX是如何工作的以及背后的设计原理

### 为什么JSX中没有原生的if语句，
1. JSX的本质：JSX并不是一种模板语言，而是JavaScript的语法扩展。它将HTML样式的语法直接嵌入到JavaScript中，
允许我们在JavaScript中写类似HTML的代码

2. 编译过程：JSX在编译时会转换成为JavaScript的函数调用。这意味着JSX中的所有表达式都需要是有效的JavaScript表达式，
而`if`语句并不是一个表达式，而是一个语句，所以不能直接在JSX中使用。

3. 表达式和语句的区别：在JavaScript中，表达式会产生一个值，而语句则是执行某些操作，由于JSX在花括号中包含的是表达式，
而不是语句，所以，不能直接使用`if`语句

### 如何在JSX中进行条件渲染
尽量不能直接使用`if`语句，JSX仍然提供了几种方式实现条件渲染：

1. 三元运算符
```TypeScript
return (
    <Fragment>
        <h1>List</h1>
        {items.length === 0 ? (
            <p>列表数据为空</p>
        ) : (
            <ul className="list-group">
                {items.map((itme)=>(
                    <li key={item} className="list-group-item">{item}</li>
                ))}
            </ul>
        )}
    </Fragment>
)
```

2. 逻辑运算符
```TypeScript
return (
    <Fragment>
        <h1>List</h1>
        {item === 0 && <p>列表数据为空</p>}
        {itme.length > 0 && (
            <ul className="list-group">
                {items.map((itme)=>(
                    <li key={item} className="list-group-item">{itme}</li>
                ))}
            </ul>
        )}
    </Fragment>
)
```

3. 自定义渲染组件
将条件逻辑定义到一个单独函数中，然后在JSX中调用这个函数

```TypeScript
function renderItems(items) {
    if (items.length === 0) {
        return <p>数据列表为空</p>
    }
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li key={item} className="list-group-item">{item}</li>
            ))}
        </ul>
    )
}

function ListGroup() {
    let items= ["北京","上海","广州","深圳"]
    // items = [];
    return (
        <Fragment>
            <h1>List<h2>
            {renderItems(itmes)}
        </Fragment>
    );
}
```

JSX解决了什么问题？
JSX的设计背后有几个重要的问题和目标：

声明式UI：JSX使得UI声明更加直观和简洁。它允许开发者在JavaScript中直接编写UI结构，而不是在模板文件中进行UI定义。这种方式增强了UI与逻辑的紧密结合，使得代码更容易理解和维护。
组件化：JSX鼓励组件化开发，允许开发者将UI分解为独立的、可重用的组件。这种方式提高了代码的复用性和可维护性。
更强的表达能力：由于JSX是JavaScript的扩展，它允许我们在UI定义中使用所有JavaScript的功能（如变量、函数、表达式等），这使得UI定义更加灵活和强大。
通过这些特性，JSX极大地简化了React开发中的UI定义和组件化开发，使得开发者能够更加高效地构建复杂的用户界面。
