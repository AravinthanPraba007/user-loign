import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { v4 as uuidv4 } from 'uuid';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [cardItems, setCardItems] = useState([])

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function addItem(newItem) {
    setItems(prevItems => {
      return [...prevItems, { id: uuidv4(), name: newItem[0], age: newItem[1] }]
    })
  }

  function deleteItem(id) {
    // Delete the item from item list
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)

    // Delete the item if present in cardItem list too
    const newCardItems = cardItems.filter(item => item.id !== id)
    setCardItems(newCardItems)

  }

  function addItemToCard() {
    /*
    Let's check the no of items difference between cardItem list and item list,
    Decide the index ,
    Pick the element from the Item list and add it to Card item list
    */

    let index = (items.length - cardItems.length)
    index = (items.length) - index
    if (index < items.length) {
      const newItem = items[index]
      setCardItems(prevCardItems => {
        return [...prevCardItems, { id: newItem.id, name: newItem.name }]
      })
    }

  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    setItems(items)
    setCardItems(cardItems)
  }, [items, cardItems])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    items,
    addItem,
    deleteItem,
    cardItems,
    addItemToCard
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}