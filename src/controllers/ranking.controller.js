import { db } from "../database/database.js"

export async function getRanking(req, res) {
    
    try {
        const ranking = await db.query(`SELECT users.id, users.name, COUNT(urls."userId") AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM urls JOIN users ON users.id = urls."userId" GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10;`)

        return res.status(200).send(ranking.rows)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}