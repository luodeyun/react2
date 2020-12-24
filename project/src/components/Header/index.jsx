import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        //判断是否是回车
        if (event.keyCode === 13) {
            //添加的名字不能为空
            if (event.target.value.trim() === '') {
                alert('输入不能为空')
                return
            }
            //id随机生成  Date.now()  时间戳  或uuid(有点大)
            const todoObj = { id: nanoid(), name: event.target.value, done: false }
            this.props.addTodo(todoObj) //这里需要传入需要一个对象

        } else {
            return
        }
    }
    render() {

        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>

        )
    }
}
