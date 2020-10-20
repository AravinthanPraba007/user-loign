import React from 'react'
import { Card, Button, CardGroup } from "react-bootstrap"
import { connect } from 'react-redux'
import { addItemToCard } from '../../Actions'

function CardContainerRedux({ cardItems, insertItem }) {


    function handleAddItem() {
        insertItem()
    }

    return (
        <div>
            <Button className="w-100 my-2" onClick={handleAddItem}>Add To Redux Card</Button>
            <CardGroup>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        cardItems.map(item => (
                            <Card className="m-1" key={item.id}>
                                <Card.Body>
                                    <Card.Text>
                                        {item.name} - {item.age}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </CardGroup>
        </div>


    )
}


const mapStateToProps = state => {
    return { cardItems: state.cardItems }
}

const mapDispatchToProps = dispatch => {
    return {
        insertItem: () => dispatch(addItemToCard())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (CardContainerRedux)