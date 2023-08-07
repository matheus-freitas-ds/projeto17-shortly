import { db } from "../database/database.js"

export async function getUser(req, res) {
    const { userId } = res.locals

    try {
        const userProfileMain = await db.query(`SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount" FROM users JOIN urls ON users.id = urls."userId" WHERE users.id = $1 GROUP BY users.id`, [userId])
        const userProfileUrls = await db.query(`SELECT urls.id, urls."shortUrl", urls.url, urls."visitCount" FROM urls WHERE urls."userId" = $1`, [userId])
        const userProfile = {...userProfileMain.rows[0], shortenedUrls: userProfileUrls.rows}

        res.status(200).send(userProfile)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}