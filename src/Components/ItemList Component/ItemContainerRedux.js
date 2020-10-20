import React, { useRef } from "react"
import { connect } from 'react-redux'
import { Card, Button, Form } from "react-bootstrap"
import ItemsListRedux from "./ItemsListRedux";
import { addItem } from '../../Actions'

function ItemsContainerRedux({ insertItem }) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()


    function handleAddItem() {
        const newItem = []
        newItem[0] = nameInputRef.current.value
        newItem[1] = ageInputRef.current.value
        console.log(newItem)
        if (newItem === '') return
        insertItem(newItem[0], newItem[1])
        nameInputRef.current.value = null
        ageInputRef.current.value = null

    }



    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add to Redux Item list</h2>
                    <div className="row">
                        <ItemsListRedux />
                    </div>
                    <div className="row my-2">
                        <div className="col-4">
                            <Form.Control ref={nameInputRef} type="text" placeholder="Enter your Name" />
                        </div>
                        <div className="col-4">
                            <Form.Control ref={ageInputRef} type="number" placeholder="Enter your Age" />
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

const mapDispatchToProps = dispatch => {
    return {
        insertItem: (name, age) => dispatch(addItem(name, age))
    }
}


export default connect(
    null,
    mapDispatchToProps
)
    (ItemsContainerRedux)