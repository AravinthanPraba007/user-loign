import React from 'react'
import { useAuth } from "../../Contexts/AuthContext"
import { Card, Button, CardGroup } from "react-bootstrap"

export default function CardContainer() {
  const { cardItems, addItemToCard } = useAuth()

  function handleAddItem() {
    addItemToCard()
  }

  return (
    <div>
      <Button className="w-100 my-2" onClick={handleAddItem}>Add To Card</Button>
      <CardGroup>
        <div className="d-flex flex-wrap justify-content-center">
          {cardItems.map(item => (
            <Card className="m-1" key={item.id}>
              <Card.Body>
                <Card.Text>
                  {item.name}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </CardGroup>
    </div>


  )
}
