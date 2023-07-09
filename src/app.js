import express, { application } from "express"
import rutaindex from './routes/index.routes.js'
import rutaempleados from './routes/empleados.routes.js'

const app = express()

app.use(express.json())

app.use(rutaindex)
app.use('/api',rutaempleados)

app.use((req,res,next) => {
    res.status(404).json({
        mensaje : "Ruta no encontrada"
    })
})


export default app;