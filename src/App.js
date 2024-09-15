import logo from './logo.svg';
import './App.css';

import Ammu from './chenda/ammu';
import Counter from'./counter/counter';
import ParentComponent from './counter/parentComponent';
import LifeCycleDemo from'./lifeCycle/lifeCycle';
import AnimationExample from './animationExample/animationExample';
import TodoList from './todolist/todo';

function App() {
  return (
    <div style={{color:'gray',background:'rgb(0,0,255)',textAlign:'center'}}>
      
      <div class="navbar">
        <a class="active" href="#">Home</a> 
        <a href="#">Search</a> 
        <a href="#">Contact</a> 
        <a href="#">Login</a>
      </div>
      
       <div>
         <br/>
          <Ammu/>
          <Counter/>
          <ParentComponent/>
          <LifeCycleDemo/>
          <AnimationExample/>
          <TodoList/>
        </div>
        </div>
   
  );
}

export default App;
