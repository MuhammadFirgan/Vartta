'use server'

import { CreateUserProps } from "@/types";

export async function createUser({ firstName, lastName, clerkId, photo, email, username }: CreateUserProps) {
    const response = await fetch('http://127.0.0.1:5000/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, clerkId, photo, email, username })
    })

    const result = await response.json()

    return JSON.parse(JSON.stringify(result))
}