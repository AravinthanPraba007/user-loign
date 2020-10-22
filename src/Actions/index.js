

export const addItem = (id, name, age) => {
    return {
        type: 'ADD_ITEM',
        payload: { id: id, name: name, age: age }
    }
}

export const deleteItem = (itemId) => {
    return {
        type: 'DELETE_ITEM',
        payload: { id: itemId }
    }
}

export const addItemToCard = () => {
    return {
        type: 'ADD_ITEM_TO_CARD'
    }
}

export const resetItems = () => {
    return {
        type: 'RESET'
    }
}

export const editItem = (id, name, age) => {
    return {
        type: 'EDIT_ITEM',
        payload: { id: id, name: name, age: age }
    }
}