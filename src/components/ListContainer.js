import React from 'react';
import ListItem from './ListItem';

function ListContainer({todo, setTodo}) {
    console.log('LIST CONTAİNER');
    return (
        <div>
            <ul className="list-container">
                {todo.map((item, index) => <ListItem key={index} item={item} name={item.inputText} index={index} todo ={todo} setTodo={setTodo}/>)}
            </ul>
        </div>
    )
}

export default React.memo(ListContainer)
