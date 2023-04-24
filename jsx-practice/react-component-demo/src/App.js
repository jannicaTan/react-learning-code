import './index.css'
import avatar from './images/avatar.png'
import React from 'react'
import { v4 as uuid } from 'uuid'

// 时间格式化
function formatDate (time) {
  return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
}

class App extends React.Component {
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot'
      },
      {
        id: 2,
        name: '时间',
        type: 'time'
      }
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1
      }
    ],
    commit: '请输入内容'
  }
  // 1.切换tab,并且改变激活样式
  switchTab = (type) => {
    this.setState({
      active: type
    })
  }
  // 2.实现添加评论的Input绑定
  textareaChange = (e) => {
    this.setState({
      commit: e.target.value
    })
  }
  // 2.2提交评论
  submitCommit = () => {
    this.setState({
      list: [...this.state.list,
      {
        id: uuid(),//独一无二的值:使用uuid
        author: '刘德华',
        comment: this.state.commit,
        time: new Date(),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      },
      ]
    })
  }
  // 3.删除方法
  deleteComment = (id) => {
    this.setState({
      list: this.state.list.filter(item =>
        item.id !== id
      )
    })
  }
  // 切换喜欢效果
  changeLike = (curItem) => {
    // 逻辑：如果喜欢 att:1=>改为0，否则改为1
    const { attitude, id } = curItem
    this.setState({
      // 注意这里要用map去遍历
      list: this.state.list.map(item => {
        if (item.id === id) {
          // 过滤当前的条件，修改原值并返回
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1
          }
        } else {
          return item
        }
      }
      )
    })
  }
  render () {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {
                this.state.tabs.map(tab => (
                  <li
                    key={tab.id}
                    className={tab.type === this.state.active ? 'on' : ''}
                    onClick={() => this.switchTab(tab.type)}//使用箭头函数进行传递参数
                  >按{tab.name}排序</li>
                ))
              }
            </ul>
          </div>

          {/* 添加评论 */}
          {/* 2.实现增加评论的方法 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.commit}
                onChange={this.textareaChange}
              />
              <button className="comment-submit" onClick={this.submitCommit}>发表评论</button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {
              this.state.list.map(item => (
                <div className="list-item" key={item.id}>
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{formatDate(item.time)}</span>
                      <span onClick={() => this.changeLike(item)} className={item.attitude === 1 ? 'like liked' : 'like'} >
                        <i className="icon" />
                      </span>
                      <span className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                        <i className="icon" />
                      </span>
                      <span className="reply btn-hover" onClick={() => this.deleteComment(item.id)}>删除</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>)
  }
}


export default App
