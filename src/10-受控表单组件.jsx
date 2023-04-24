// 以获取文本框的值为例，受控组件的使用步骤如下：
// 类组件定义状态并修改：不要直接修改状态值，而是基于当前状态赋予新的值
import React from 'react'
class Counter extends React.Component {
  // 1. 在组件的state中声明一个组件的状态数据
  state = {
    msg: 'msg',
  }
  inputChange = (e) => {
    // 4. 调用setState方法，将文本框的值作为state状态的最新值,用e来传递
    this.setState({
      msg: e.target.value,
    })
  }
  render() {
    return (
      // 2. 将状态数据设置为input标签元素的value属性的值
      // 3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
      <input type="text" value={this.state.msg} onChange={this.inputChange} />
    )
  }
}
export default Counter
