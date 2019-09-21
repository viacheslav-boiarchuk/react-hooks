import React, {useState, useEffect} from 'react';
import './App.css';
import {List} from './List';
import {Modal} from './Modal';
import {createPersonsList} from './helper';

/**
 * App component which render Modal and List inside himself
 */

function App() {
    const personsList = createPersonsList(),
        [modalState, setModalState] = useState(false),
        [currentPerson, setCurrentPerson] = useState(""),
        [nameList, setNameList] = useState(personsList);

    useEffect(() => {
        if (!modalState) {
            setCurrentPerson("");
        }
    }, [modalState]);

    const changeModalState = (props = '') => {
        if (modalState && props) {
            return
        }
        setCurrentPerson(props);
        return setModalState(!modalState);
    };

    const changePerson = (newName) => {
        let newArray = Array.from(nameList);
        newArray.forEach((item) => {
            if (item.uniqueId === currentPerson) {
                item.name = newName;
            }
            setCurrentPerson("");
        });
        setNameList(newArray);
    };

    return (
        <div className="App">
            <List
                toggleModal={changeModalState}
                nameList={nameList}
            />
            <Modal
                toggleModal={changeModalState}
                displayModal={modalState}
                changePerson={changePerson}
            />
        </div>
    );
}

export default App;
