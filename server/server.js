import express from 'express'
import cors from 'cors'

import router from './routes/postRoutes.js'

const app = express();

app.use(cors())

const port = 5000

app.use(router)

app.listen(port, () => { console.log(`Server running at http://localhost:${port}/`) })
