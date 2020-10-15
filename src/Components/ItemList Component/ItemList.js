import React from 'react'
import Item from "./Item";
import { useAuth } from "../../Contexts/AuthContext"

export default function ItemList() {
    const { items } = useAuth()

    return (
        items.map(item => {
            return <Item key={item.id} item={item} />
        }
        )

    )

}
