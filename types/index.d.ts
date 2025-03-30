export interface CardProps {
    image: string
    title: string
    createdAt: string
    category: string
}

export type CreateUserProps = {
    clerkId: string
    firstName: string | null
    lastName: string | null
    username: string
    email: string
    photo: string
}