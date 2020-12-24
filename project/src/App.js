//创建App组件
 import React,{Component}from 'react'
 import Header from './components/Header'
 import List from './components/List'
 import Footer from './components/Footer'
 import './App.css'
 export default class App extends Component{
   state={  //初始化状态
     todos:[
     {id:'001',name:'吃饭',done:true},
     {id:'002',name:'睡觉',done:true},
     {id:'003',name:'打代码',done:false},
   ]}
   //addTodo是header组件的传过来增加todos状态的值
    addTodo=(todoObj)=>{ 
      //获取原todos
      console.log(todoObj);
      
      const {todos} = this.state;
      //追加一个todo
      const newTodos= [todoObj,...todos]  //这句话用于将todos打散成一个个对象 然后todoObj 插入前面
      //更新状态
      this.setState({
        todos:newTodos
      }) 
    }
    // item组件传来的值影响勾选状态  祖孙关系一层一层传
    changeTodo=(id,done)=>{
      //获取状态中的todos
      const {todos} = this.state
      //匹配数据  
      const newTodos = todos.map((todoObj)=>{
           if(todoObj.id===id)return {...todoObj,done}
           else return todoObj
      })
      this.setState({
        todos:newTodos
      })
    }
    deleteTodo=(id)=>{
       const {todos} = this.state
       const newTodos = todos.filter((todoObj)=>{
          return todoObj.id!==id
       })
       this.setState({
         todos:newTodos
       })
    }
    checkAllTodo=(done)=>{
      const {todos} = this.state
      const newTodos = todos.map(todoObj=>{
        return {...todoObj,done}
      })
      this.setState({
        todos:newTodos
      })
    }
    clearAllDone=()=>{
      const {todos}= this.state
      const newTodos=todos.filter((item)=>{
        return item.done===false
      })
      this.setState({
        todos:newTodos
      })
    }
   render(){
     console.log(this);
     return (
      <div className="todo-container">
         <div className="todo-wrap">
           <Header addTodo= {this.addTodo}/>
           <List todos={this.state.todos} updateTodo={this.changeTodo}  deleteTodo={this.deleteTodo}/>
           <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
          </div>
    </div>
     )
   }
 }
 