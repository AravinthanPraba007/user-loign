import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../../Actions'
import { Button, Form } from "react-bootstrap"

function ItemListRedux({ items, removeItem }) {

    function handleDeleteItem(id) {
        removeItem(id)
    }

    return (
        items.map(item => {
            // console.log(item)
            return (
                <div className=" row mb-2 mx-auto" key={item.id}>
                    <div className="col-4">
                        <Form.Control type="text" readOnly defaultValue={item.name} />
                    </div>
                    <div className="col-4">
                        <Form.Control type="text" readOnly defaultValue={item.age} />
                    </div>
                    <div className="col-3">
                        <Button variant="warning" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
                    </div>
                </div>
            )
        }
        )

    )
}

const mapStateToProps = state => {
    return { items: state.items }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => dispatch(deleteItem(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (ItemListRedux)
