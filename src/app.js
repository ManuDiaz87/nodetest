import express from 'express';
import indexEnrutador from './routes/index.routes.js'
import empleadosEnrutador from './routes/empleados.routes.js';

const app = express();

app.use(express.json());

// EJ. Para anteponer una ruta antes que otras. Ejemplo: api/empleados
app.use('/api',empleadosEnrutador);
app.use(indexEnrutador);

//PAGE NOT FOUND
app.use((req,res,next) => {
    res.status(404).json({message:'ENDPOINT NOT FOUND'})
});

export default app;

