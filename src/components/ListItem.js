import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function ListItem({item, name, index, todo, setTodo}) {
    console.log('LIST ITEM');
    const deleteHandler = () => {
        setTodo(todo.filter(element => element.id !== item.id));
    }

    const checkHandler = () => {
        setTodo(todo.map((el) => {
            if (el.id === item.id) {
                return {...el, isCompleted: !el.isCompleted};

            }

            return el;
        }));
    }

    console.log(todo);

    localStorage.setItem('item-collection', JSON.stringify(todo)); // bu code her render işleminde tekrar tekrar her bir liste elemanı için çalışır. Bunun yerine listede değişiklik olduğu zamanlarda çalıştırmalısın (ekleme, silme)

    return (
        <li className={`list-item ${item.isCompleted ? 'item-completed' : ''}`} index={index}>{name} 
            <FontAwesomeIcon className="icons" style={{'color': 'red'}} onClick={deleteHandler} icon={faTrashAlt} /> 
            <FontAwesomeIcon className="icons" style={{'marginRight': '10px', 'color': 'green'}} onClick={checkHandler} icon={item.isCompleted ? faTimesCircle : faCheck} />
        </li>
    )
}

export default ListItem

/**
 *  li elementine verdiğin index propertisi nedir?
 *   
 *   Bu componetin dışarıdan sadece item, onComplete, onDelete propertylerini alması lazım.
 *   todo listesi bu componenti ilgilendirmez.
 */