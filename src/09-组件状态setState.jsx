// 类组件定义状态并修改：不要直接修改状态值，而是基于当前状态赋予新的值
import React from 'react'
class Counter extends React.Component {
  // 1.state定义组件的初始化状态，有点类似data?
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'rose',
      age: 19,
    },
  }
  // 2.修改值，注意:方法用箭头函数，要用setState（这里来自继承react)
  addNumber = () => {
    this.setState({
      count: this.state.count + 1,
      // 修改数组：
      // 增加数组数据：扩展运算符
      // list: [...this.state.list, 4],
      // 删除数组数据：filter
      list: this.state.list.filter((item) => item !== 2),
      // 修改对象：
      person: {
        ...this.state.person,
        name: 'coke',
      },
    })
  }
  render() {
    return (
      <>
        <button onClick={this.addNumber}>计数器</button>
        当前数字为：{this.state.count}
        <div>
          {this.state.list.map((item) => (
            <div key={item}>这是{item}</div>
          ))}
        </div>
      </>
    )
  }
}
export default Counter
