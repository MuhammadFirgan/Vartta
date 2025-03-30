'use server'

import { CreateUserProps } from "@/types";

export async function createUser(user: CreateUserProps) {
    const response = await fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(
            { 
                firstName: user.firstName, 
                lastName: user.lastName, 
                clerkId: user.clerkId, 
                photo: user.photo, 
                email: user.email, 
                username: user.username 
            }
        )
    })

    const result = await response.json()

    return JSON.parse(JSON.stringify(result))
}