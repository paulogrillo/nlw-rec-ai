import cors from 'cors'
import express, { request } from 'express'

import { download } from './api/download.js'

const app = express()
app.use(cors())

app.get('/shorts/:shortId', (req, res) => {
    download(req.params.shortId)
    res.json({ result: "Success download video."})
})

app.listen(3333, () => console.log("Server is running on port 3333"))