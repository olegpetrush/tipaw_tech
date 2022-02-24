import type { NextApiRequest, NextApiResponse } from 'next'
import pgPromise from "pg-promise"

const pgp = pgPromise({
  noWarnings: true
})

const db = pgp(`postgres://postgres:root@localhost:5432/tipaw_db`)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstname, lastname, phone, email, password } = req.body

    const user = await db.one(
      'INSERT INTO users(firstname, lastname, phone, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [firstname, lastname, phone, email, password]
    )

    res.status(200).json(user)
  } catch (error) {
    res.status(500).send({ message: ["Error creating on the server"], error: error })
  }
}