import { nanoid } from "nanoid"
import { db } from "../database/database.js"

export async function shortenUrl(req, res) {
    const { url } = req.body
    const { userId } = res.locals
    const shortUrl = nanoid()

    try {
        const urlsList = await db.query(`INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);`, [url, shortUrl, userId])

        return res.status(201).send({ id: userId, shortUrl: shortUrl })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getUrl(req, res) {
    const { id } = req.params

    try {
        const getUrlById = await db.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1;`, [id])
        if (getUrlById.rowCount === 0) return res.sendStatus(404)

        return res.status(200).send(getUrlById.rows[0])
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function openUrl(req, res) {
    
    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params
    
    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}