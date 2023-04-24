// 作用：
// 阻止默认行为(通过获取事件对象e)，获取额外参数(改造为箭头函数调用)
// 1.只需要一个参数：改造为箭头函数传递参数
// 2.用到e参数
function Hello08() {
  const handleClick = (e, msg) => {
    console.log('触发click', msg)
  }
  return <div onClick={(e) => handleClick(e, 'this is msg')}>触发08组件</div>
}
export default Hello08
