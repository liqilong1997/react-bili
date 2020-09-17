import React from 'react'
import ReactDom from 'react-dom'

// 父传子  子传父  数据改变  列表渲染  条件渲染

// const mh1 = React.createElement('h1', {id: 'myh1', title: 'this is title'}, '这是一个h1标签')
function Onecom (props) {
  return (
    <div>
      <span>我是子组件原本的/</span>
      <span>{props.name}</span>
    </div>
  )
}

function FirstCom (props) {
  const boltru = <div><h3>条件为真我是齐天大圣</h3></div>
  const bolfal = <div><h3>条件为假我是六耳猕猴</h3></div>
  if (props.conBol) {
    return boltru
  } else {
    return bolfal
  }
}

class Twocom extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      name: '我来自父组件',
      numb: 0,
      conBol: true,
      str: '我是父组件的初始数据',
      listArr: [
        {
          name: 'AK47',
          age: '1080'
        }, {
          name: 'm4a1',
          age: '1008'
        }, {
          name: 'mp9',
          age: '2000'
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>父传子</h1>
        <Onecom name={this.state.name}></Onecom>
        <hr></hr>

        <h1>子传父</h1>
        <Soncom changeFun={this.changeDataFun} str={this.state.str}></Soncom>
        <hr></hr>

        <h1>数据改变</h1>
        <button onClick={this.handelClidk}>递增</button>
        <button onClick={this.handelClickRun}>重置</button>
        <h3>{this.state.numb}</h3>
        <hr></hr>

        <h1>列表渲染</h1>
        <ul>
          {
            this.state.listArr.map((item, index) => {
              return <li key={index}>姓名：{item.name}  年龄：{item.age}</li>
            })
          }
        </ul>
        <hr></hr>
        
        <h1>条件渲染</h1>
        <button onClick={this.changeFUn}>切换</button>
        <FirstCom conBol={this.state.conBol}></FirstCom>
      </div>
    )
  }
  handelClidk=() => {
    const num = this.state.numb + 1
    this.setState({
      numb: num
    })
  }
  handelClickRun=() => {
    this.setState({
      numb: 0
    })
  }
  changeFUn=() => {
    this.setState({
      conBol: !this.state.conBol
    })
  }
  changeDataFun=(str)=>{
    this.setState({
      str: str
    })
  }
}

class Soncom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      str: '我来自子组件，修改父组件'
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.changefuDataFun}>修改</button>
        <h3>{this.props.str}</h3>
      </div>
    )
  }
  changefuDataFun=() => {
    this.props.changeFun(this.state.str)
  }
}


ReactDom.render(<Twocom></Twocom>, document.getElementById('app'))

