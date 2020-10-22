import React, { useRef } from 'react'
import { Button, Form } from "react-bootstrap"
import { connect } from 'react-redux'
import { deleteItem, editItem } from '../../Actions'

function ItemRedux({ item, removeItem, alterItem }) {

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    function handleDeleteItem() {
        removeItem(item.id)
    }

    function handleEditItem() {
        const alteredName = nameInputRef.current.value
        const alteredAge = ageInputRef.current.value
        if (alteredName === item.name && alteredAge === item.age)
            return
        alterItem(item.id, alteredName, alteredAge)
    }




    return (
        <div className=" mb-2 mx-auto">
            <div className="d-flex flex-row justify-content-center mb-2">
                <Form.Control className="mx-1" type="text" ref={nameInputRef} defaultValue={item.name} />
                <Form.Control className="mx-1" type="text" ref={ageInputRef} defaultValue={item.age} />
            </div>
            <div className="d-flex flex-row justify-content-end">
                <Button variant="warning" className="mx-1 " onClick={handleEditItem}>Save</Button>
                <Button variant="danger" className="mx-1" onClick={handleDeleteItem}>Delete</Button>
            </div>
            <hr></hr>
        </div>
    )
}




const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => dispatch(deleteItem(id)),
        alterItem: (id, name, age) => dispatch(editItem(id, name, age))
    }
}


export default connect(
    null,
    mapDispatchToProps
)
    (ItemRedux)