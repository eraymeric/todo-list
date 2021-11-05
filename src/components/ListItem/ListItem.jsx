import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './ListItem.css';

function ListItem({item, name, onComplete, onDelete}) {
    console.log('ListItem');
    //localStorage.setItem('item-collection', JSON.stringify(todo)); // bu code her render işleminde tekrar tekrar her bir liste elemanı için çalışır. Bunun yerine listede değişiklik olduğu zamanlarda çalıştırmalısın (ekleme, silme)

    return (
        <li className={`list-item ${item.isCompleted ? 'item-completed' : ''}`}>{name} 
            <FontAwesomeIcon className="icons" style={{'color': 'red'}} onClick={() => onDelete(item)} icon={faTrashAlt} /> 
            <FontAwesomeIcon className="icons" style={{'marginRight': '10px', 'color': 'green'}} onClick={() => onComplete(item)} icon={item.isCompleted ? faTimesCircle : faCheck} />
        </li>
    )
}

export default ListItem

/**
 * (Done!!!)  li elementine verdiğin index propertisi nedir?
 *   
 * (name almadan olur mu?)   Bu componetin dışarıdan sadece item, onComplete, onDelete propertylerini alması lazım.
 *   todo listesi bu componenti ilgilendirmez.
 */