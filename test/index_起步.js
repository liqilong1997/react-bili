// 1.导入包
import React from 'react'
import ReactDom from 'react-dom'

//2.创建虚拟Dom
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2: 是一个对象或者null，表示当前这个DOM元素的属性
// 参数3: 子节点（包括其他虚拟DOM获取文本子节点）
// 参数n： 其他子节点

const mh1 = React.createElement('h1', {id: 'myh1', title: 'this is title'}, '这是一个h1标签')


//3.使用ReactDom把虚拟DOM渲染到页面上
// 参数1: 要渲染的那个虚拟DOM
// 参数2：指定页面上的一个容器

ReactDom.render(mh1, document.getElementById('app'))

