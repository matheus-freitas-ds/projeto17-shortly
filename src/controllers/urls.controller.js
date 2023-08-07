import { nanoid } from "nanoid"
import { db } from "../database/database.js"

export async function shortenUrl(req, res) {
    const { url } = req.body
    const { userId } = res.locals
    const shortUrl = nanoid()

    try {
        const urlsList = await db.query(`INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3) RETURNING id;`, [url, shortUrl, userId])

        return res.status(201).send({ id: urlsList.rows[0].id, shortUrl: shortUrl })
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
    const { shortUrl } = req.params

    try {
        const originalUrl = await db.query(`SELECT id, url FROM urls WHERE "shortUrl" = $1;`, [shortUrl])
        if (originalUrl.rowCount === 0) return res.sendStatus(404)

        await db.query(`UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1;`, [shortUrl])
        return res.redirect(originalUrl.rows[0].url)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params
    const { userId } = res.locals

    try {
        const findUrlsById = await db.query(`SELECT * FROM urls WHERE id = $1;`, [id])
        if (findUrlsById.rowCount === 0) return res.sendStatus(404)

        if (findUrlsById.rows[0].userId !== userId) return res.sendStatus(401)

        const deleteUrlById = await db.query(`DELETE FROM urls WHERE id = $1`, [id])
        return res.sendStatus(204)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}