import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import DataInput from './components/DataInput/DataInput';
import ListContainer from './components/ListContainer/ListContainer';
import Header from './components/Header/Header';
import {generateRandomId} from './utils/util';

function App() {
  console.log('App');
  let initialToDo = [];

  const [todo, setTodo] = useState(initialToDo);

  useEffect(() => {
    console.log('effect');
    initialToDo = JSON.parse(localStorage.getItem('item-collection') || '[]'); // bu işlemi sadece component ilk kez çalıştığında çalıştırmalısın. Bunun için useEffect hookunu kullanacaksın (önemli, araştır).
  });

  const onSet = (inputText) => {
    console.log('1');
    console.log(todo);
    //localStorage.setItem('item-collection', JSON.stringify(todo)); // bu code her render işleminde tekrar tekrar her bir liste elemanı için çalışır. Bunun yerine listede değişiklik olduğu zamanlarda çalıştırmalısın (ekleme, silme)

    setTodo([...todo, {inputText: inputText, id: generateRandomId() , isCompleted: false}]);
    console.log('2');
    console.log(todo);
  }

  const onComplete = (item) => {
    setTodo(todo.map((el) => {
      if (el.id === item.id) {
          return {...el, isCompleted: !el.isCompleted};

      }

      return el;
    }));
  };

  const onDelete = (item) => {
    setTodo(todo.filter(element => element.id !== item.id));
  }

  return (
    <div className="App">
      <Header />
      <DataInput onSet={onSet} todo={todo}/>
      <ListContainer dataList ={todo} onComplete={onComplete} onDelete={onDelete}/>
    </div>
  );
}

export default App;

/**
 * (Done!!!) Tüm ekleme, silme, tamamlanma işlemlerini burada yapmalısın. 
 * 
 * (Done!!! Her bir css dosyason DOM'da ayrı style elementlerinde tutuluyor? Fazladan element olması sıkıntı değil mi?) Tüm css i bir dosyaya yazma, onu senin için webpack yapacak zaten. Her componentin kendi css dosyası olmalı. Bu yüzden componentlerini dosyalar içerisine al.
 * 
 * (Done!!!) Dosya uzantıların js değil jsx olmalı! (App.jsx olmalı mı?)(App.jsx olmalı mı?)
 * 
 */