import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default class Item extends Component {
    static propTypes={
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }
    state = { mouse: false } 
    //标识鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {        
            this.setState({ mouse: flag })
        }
    }
    //标识勾选和没勾选的回调
    handleCheck=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked);
            this.props.updateTodo(id,event.target.checked)
        }
    }
     handleDelete=(id)=>{
       this.props.deleteTodo(id)  
     }
    render() {
        const { id, name, done } = this.props
        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor:this.state.mouse?'#ddd':"#fff"}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse?'':'none'}} onClick={()=>this.handleDelete(id)}>删除</button>
            </li>

        )
    }
}
