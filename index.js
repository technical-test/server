const express = require('express')
const connectDB = require('./config/db');
const cors = require('cors')
const app = express()


connectDB()

app.use(cors())

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000


// Importar rutas
app.use('/api/holiday', require('./routes/holiday'));


// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})