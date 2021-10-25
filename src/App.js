import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DataInput from './components/DataInput';
import ListContainer from './components/ListContainer';
import Header from './components/Header';

function App() {
  console.log('APP');

  var initialToDo = JSON.parse(localStorage.getItem('item-collection') || '[]');

  const [input, setInput] = useState('');
  const [todo, setTodo] = useState(initialToDo);

  return (
    <div className="App">
      <Header />
      <DataInput input={input} setInput={setInput} todo ={todo} setTodo={setTodo} />
      <ListContainer todo ={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
