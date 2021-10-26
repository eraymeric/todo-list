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

/**
 * 1) Listelerde verdiğin key her zaman uniq olmalı. Bu yüzden index vermemelisin.
 *    Bunun yerine itemın id'sini vermelisin.
 * 
 * 2) Dışarıdan gelen propertynin adı todo yerine daha genel bir şey olabilir. list, dataList gibi. Çünkü her zaman todoList için kullanmayabilirsin bu componenti.
 * 
 * 3) setTodo yerine onComplete, onDelete gibi propertyler vermelisin. 
 *    Belki bu componenti kullanan silinmeden önce kullanıcıya emin misiniz diye sormak ister. 
 *    Bu yüzden eventi dinleyebilmeli.
 */