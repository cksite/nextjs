import {Z} from 'zod'

export const usernameValidation = Z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

    export const signUpSchema = Z.object({
        username: usernameValidation,
        email: Z.string().email({message: 'Invalid email address'}),
        password: Z.string().min(6,{message: "password must be atleast 6 characters"});
    })