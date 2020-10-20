import React from 'react'
import { Button, Form } from "react-bootstrap"
import { useAuth } from "../../Contexts/AuthContext"
export default function Item({ item }) {
    const { deleteItem } = useAuth()

    function handleDeleteItem() {
        deleteItem(item.id)
    }


    return (
        <div className=" row mb-2 mx-auto">
            <div className="col-4">
                <Form.Control type="text" readOnly defaultValue={item.name} />
            </div>
            <div className="col-4">
                <Form.Control type="text" readOnly defaultValue={item.age} />
            </div>
            <div className="col-3">
                <Button variant="warning" onClick={handleDeleteItem}>Delete</Button>
            </div>
        </div>
    )
}
