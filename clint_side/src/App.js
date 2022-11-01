
import { useState,useEffect } from 'react';
import './App.css';
import Alert from './Components/Alert';
import InputTodo from './Components/InputTodo';
import TodoList from './Components/TodoList';

function App() {
  const [editAlert,setEditAlert] = useState(false);
  const [refresh,setRefresh] = useState("") ;
  useEffect(() => {
  
  }, [refresh, editAlert])
  return (
    <div className="App">
      <InputTodo setEditAlert={ setEditAlert } setRefresh = {setRefresh}/>
      <TodoList/>
      {
        editAlert ? 
        <Alert setEditAlert={setEditAlert}/> :
        <div></div>
      }
    </div>
  );
}

export default App;
