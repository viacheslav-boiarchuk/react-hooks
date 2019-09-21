import React, {useState} from 'react';
import './App.css';

let nameList = ['Antony', 'Simon', 'O\'Really', 'Mike', 'Kristine', 'Kimberly', 'Cole'];

export function List() {
    const [modalState, setModalState] = useState(false);

    console.log(modalState);

    return (
    <div className="names-container">
        <h2>Users List</h2>
        <ul>
            {
                nameList.map((item, counter) => {
                    let uniqKey = counter+'-'+item;
                    return <li key={uniqKey}
                               data-id={uniqKey}
                               onClick={() => {setModalState(!modalState)}}>{counter}. {item}</li>
                })
            }
        </ul>
    </div>
  );
}
