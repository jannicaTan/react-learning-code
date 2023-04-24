import React from 'react'
function Hello() {
  const handleClick = () => {
    console.log('触发click')
  }
  return <div onClick={handleClick}>触发函数组件</div>
}
class HelloComponent extends React.Component {
  // 注意：使用回调函数的原因就是this指向问题
  // 这样可以在回调函数中的this指向的是当前的实例对象
  clickHandler = () => {
    console.log('类组件触发')
  }
  render() {
    return <h1 onClick={this.clickHandler}>this is class Component</h1>
  }
}
export { Hello, HelloComponent }
