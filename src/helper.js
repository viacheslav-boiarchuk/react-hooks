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
                    let uniqKey = counter+'-'+item;
                    return <li key={uniqKey}
                               data-id={uniqKey}
                               onClick={() => {toggleModal(uniqKey)}}>{counter}. {item}</li>
                })
            }
        </ul>
    </div>
  );
}
