import React from 'react'
// 必须首字母大写
// 继承自React.Component父类，可继承一些自有方法
// 必须提供自render方法
class HelloComponent extends React.Component {
  render() {
    return <h1>this is class Component</h1>
  }
}
export default HelloComponent
