import JSXStart from "./01-jsx表达式"
import JSXComplexType from './04jsx-复杂条件渲染'
// import HelloComponent from "./06-函数或类组件"
import { Hello, HelloComponent } from "./07-组件事件绑定"
import Hello08 from "./08-获取事件对象e"
// import Counter from "./09-组件状态setState"
import Counter from "./10-受控表单组件"
function App () {
  return (
    <div className="App">
      <JSXStart></JSXStart>
      <JSXComplexType></JSXComplexType>
      <HelloComponent></HelloComponent>
      <Hello></Hello>
      <Hello08></Hello08>
      <Counter></Counter>
    </div>
  )
}

export default App
