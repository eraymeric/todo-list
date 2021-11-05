import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListContainer.css';

function ListContainer({dataList, onComplete, onDelete}) {
    console.log('ListContainer');
    return (
        <div>
            <ul className="list-container">
                {dataList.map((item) => {
                  return <ListItem key={item.id} item={item} name={item.inputText} onComplete={onComplete} onDelete={onDelete}/>
                })}
            </ul>
        </div>
    )
}

export default React.memo(ListContainer)

/**
 * 1) (Done!!!) Listelerde verdiğin key her zaman uniq olmalı. Bu yüzden index vermemelisin.
 *    Bunun yerine itemın id'sini vermelisin.
 * 
 * 2) (Done!!!) Dışarıdan gelen propertynin adı todo yerine daha genel bir şey olabilir. list, dataList gibi. Çünkü her zaman todoList için kullanmayabilirsin bu componenti.
 * 
 * 3) (Done!!!) setTodo yerine onComplete, onDelete gibi propertyler vermelisin. 
 *    Belki bu componenti kullanan silinmeden önce kullanıcıya emin misiniz diye sormak ister. 
 *    Bu yüzden eventi dinleyebilmeli.
 */