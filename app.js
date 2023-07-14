import express from 'express';

const app = express();


app.get('/', (req,res) => {
    res.send('respuesta inicio')
});
app.get('/productos', (req,res) => {
    res.send('<h2> Página productos </h2>')
})

app.listen(3000);
console.log('server online');