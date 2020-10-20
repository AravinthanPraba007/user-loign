import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { useHistory } from "react-router-dom"
import ItemsContainer from "./ItemList Component/ItemsContainer";
import CardContainer from "./Card Component/CardContainer";
import ItemsContainerRedux from "./ItemList Component/ItemContainerRedux";
import CardContainerRedux from "./Card Component/CardContainerRedux";

export default function Dashboard() {

    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className="my-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to demo App</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
        </Button>
            </div>
            <ItemsContainer />
            <CardContainer />

            <ItemsContainerRedux/>
            <CardContainerRedux/>

        </div>
    )
}