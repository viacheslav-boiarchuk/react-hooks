import React from 'react';
import './App.css';

/**
 * List component which render persons data
 *
 * @param {Object} props
 */

export function List(props) {
    let {toggleModal, nameList} = props;
    return (
    <div className="names-container">
        <h2>Users List</h2>
        <ul>
            {
                nameList.map((item, counter) => {
                    return <li key={counter + '-' + item.uniqueId}
                               data-id={item.uniqueId}
                               onClick={() => {toggleModal(item.uniqueId)}}>{item.name}</li>
                })
            }
        </ul>
    </div>
  );
}
