//原则：模版中逻辑尽量保持精简，如果逻辑复杂，收敛为一个函数
//需求：
// type:
// 1->h1
// 2->h2
// 3->h3
const getHtag=(type)=>{
  if(type===1){
    return <h1>this is h1</h1>
  }
  if(type===2){
    return <h2>this is h1</h2>
  }  
  if(type===3){
    return <h3>this is h1</h3>
  }
}
const type=[1,2,3]

function JSXComplexType(){
  return (
      <ul>
        <li>
          {
            type.map(item=><li>{getHtag(item)}</li>)
          }
        </li>
      </ul>
  )
}
export default JSXComplexType;