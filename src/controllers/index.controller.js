import {pool} from '../db.js';

export const listarCategoriasIndex = async (req,res) => {
    const [result] = await pool.query('SELECT * FROM categorias');
    res.json(result);
}