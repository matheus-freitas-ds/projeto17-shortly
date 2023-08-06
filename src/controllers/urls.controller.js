import { nanoid } from "nanoid"
import { db } from "../database/database.js"

export async function shortenUrl(req, res) {
    const { url } = req.body

    try {

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getUrl(req, res) {

    try {

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