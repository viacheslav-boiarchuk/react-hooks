import React, {useRef} from 'react';
import './App.css';

/**
 * Modal component which create window for changing persons info
 *
 * @param {Object} props
 */

export function Modal(props) {
    let {displayModal, toggleModal, changePerson} = props,
        displayModalClass = (!displayModal) ? 'hide' : 'show';
    const inputEl = useRef(null);

    const savePersonName = () => {
        let el = inputEl.current;
        changePerson(el.value);
        el.value = '';
        toggleModal();
    };

    const closeModal = () => {
        inputEl.current.value = '';
        toggleModal();
    };

    return (
        <div className={displayModalClass + " " + "modal-container"}>
            <h3>Please fill new name:</h3>
            <input type="text" ref={inputEl} placeholder={"Stacey"}/>
            <button onClick={() => savePersonName()}>Save</button>
            <button onClick={()=> closeModal()}>Cancel</button>
        </div>
      );
}
