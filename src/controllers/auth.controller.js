import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { db } from "../database/database.js"

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body

    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body
    
    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getUser(req, res) {
    
    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}