import React, { useRef } from "react"
import { Card, Button, Form } from "react-bootstrap"
import ItemList from "./ItemList";
import { useAuth } from "../../Contexts/AuthContext"

export default function ItemsContainer() {
    const  nameInputRef  = useRef()
    const  ageInputRef  = useRef()
    const { addItem } = useAuth()

    function handleAddItem() {
        const newItem =[]
        newItem[0]= nameInputRef.current.value
        newItem[1]= ageInputRef.current.value
        console.log(newItem)
        if (newItem === '') return
        addItem(newItem)
        nameInputRef.current.value = null
        ageInputRef.current.value = null

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
                        <div className="col-4">
                            <Form.Control ref={nameInputRef} type="text" placeholder="Enter your Name" />
                        </div> 
                        <div className ="col-4">   
                            <Form.Control ref={ageInputRef} type ="number" placeholder="Enter your Age" />
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
