import express from 'express';
import {pool} from './db.js';
const app = express();


app.get('/', (req,res) => {
    res.send('respuesta inicio')
});
app.get('/productos', async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows);
    }catch(error){
        console.log(error)
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }
})

app.listen(3000);
console.log('server online 2.0');