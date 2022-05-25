import React from 'react'

const AddItem = ({addItem, value, classRed, newItem}) => {

    return (<>
        <input className={classRed ? 'red' : ''} onChange={event => newItem(event)} value={value} type="text" />
        <button className="addBtn" onClick={() => addItem(value)}>Add</button>
    </>)
}

export default AddItem