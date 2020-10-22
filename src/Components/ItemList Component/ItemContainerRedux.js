import React, { useRef, useEffect } from "react"
import { connect } from 'react-redux'
import { Card, Button, Form } from "react-bootstrap"
import ItemsListRedux from "./ItemsListRedux";
import { addItem } from '../../Actions'
import ItemListData from '../../Data/ItemListData.json'
import { v4 as uuidv4 } from 'uuid';

function ItemsContainerRedux({ insertItem }) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const itemListData = ItemListData.items

    useEffect(() => {
        itemListData.map(item => {
            insertItem(item.id, item.name, item.age)
        })
    }, [])


    function handleAddItem() {
        const newItem = []
        newItem[0] = uuidv4()
        newItem[1] = nameInputRef.current.value
        newItem[2] = ageInputRef.current.value
        console.log(newItem)
        if (newItem === '') return
        insertItem(newItem[0], newItem[1], newItem[2])
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
                        <div className="col-5">
                            <Form.Control ref={nameInputRef} type="text" placeholder="Enter Name" />
                        </div>
                        <div className="col-4">
                            <Form.Control ref={ageInputRef} type="number" placeholder="Age" />
                        </div>
                        <div className="col-2">
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
        insertItem: (id, name, age) => dispatch(addItem(id, name, age))
    }
}


export default connect(
    null,
    mapDispatchToProps
)
    (ItemsContainerRedux)