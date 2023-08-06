import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { db } from "../database/database.js"

export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE email = $1;`, [email])
        if (user.rowCount !== 0) return res.sendStatus(409)

        const hash = bcrypt.hashSync(password, 10)

        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hash])
        res.sendStatus(201)
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