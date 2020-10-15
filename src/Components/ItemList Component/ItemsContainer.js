import React, { useRef } from "react"
import { Card, Button, Form } from "react-bootstrap"
import ItemList from "./ItemList";
import { useAuth } from "../../Contexts/AuthContext"
export default function ItemsContainer() {
    const itemInputRef = useRef()
    const { addItem } = useAuth()

    function handleAddItem() {
        const newItem = itemInputRef.current.value
        if (newItem === '') return
        addItem(newItem)
        itemInputRef.current.value = null
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add your Items list</h2>
                    <div className="row">
                        <ItemList />
                    </div>
                    <div className="row my-2">
                        <div className="col-9">
                            <Form.Control ref={itemInputRef} type="text" placeholder="Enter your data" />
                        </div>
                        <div className="col-3">
                            <Button variant="success" onClick={handleAddItem}>Add</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
