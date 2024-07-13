
// 函数命名是PascalCasing 的命名方式
function Message() {
    // 这个返回是JSX，也就是JavaScript里面写XML, 它最终
    // 会编译成为HTML
    // 我们可以访问babeljs.io里面看到这段代码如何转换为JavaScript
    
    const name = "Ning"
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

// 这是非常基础的组件，为了使用它，我们需要export
export default Message;