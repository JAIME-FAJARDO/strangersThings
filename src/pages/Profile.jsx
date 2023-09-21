import { useState, useEffect } from "react"
import { profileData } from "../API"

export default function Profile ({ token }) {

    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([])
    

    return (
        <div>
            <h1>Profile</h1>
            <p>test</p>
        </div>
    )
}