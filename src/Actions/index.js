

export const addItem = (name ,age) => {
    return {
        type :'ADD_ITEM',
        payload: {name: name, age: age }
    }
}

export const deleteItem = (itemId) => {
    return  {
        type : 'DELETE_ITEM',
        payload:{id: itemId}
    }
}

export const addItemToCard = () => {
      return {
          type : 'ADD_ITEM_TO_CARD'
      }
  } 