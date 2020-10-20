import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [],
    cardItems: []
}


const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            // console.log("Add Item Reducer running")
            return Object.assign({}, state, {
                items: state.items.concat({ id: uuidv4(), name: action.payload.name, age: action.payload.age })
            })
        }
        case 'DELETE_ITEM': {
            // console.log("Delete Item Reducer running")
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.payload.id),
                cardItems: state.cardItems.filter(item => item.id !== action.payload.id)
            })
        }
        case 'ADD_ITEM_TO_CARD': {
            // console.log("Add Card Item Reducer running")
            let index = (state.items.length - state.cardItems.length)
            index = (state.items.length) - index
            console.log(index)
            if (state.items && index < state.items.length) {
                const newItem = state.items[index]
                console.log(newItem)
                return Object.assign({}, state, {
                    cardItems: state.cardItems.concat({ id: newItem.id, name: newItem.name, age: newItem.age }),
                    items: state.items
                })
            }
            return state

        }
        default:
            return state
    }
}

export default itemReducer;