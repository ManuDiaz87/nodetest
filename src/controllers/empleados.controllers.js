import {pool} from '../db.js';

export const listarEmpleados = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM empleados');
        res.json(rows);
    }catch(error){
        console.log(error)
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }
  
};

export const mostrarEmpleado = async(req,res) => {
    const id_cliente = req.params.id;
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id_cliente]);
        if(rows.length > 0){
            res.json(rows[0]); 
        }else{
            res.status(404).send('No se han  encontrado empleados con ese ID');
        }
    } catch (error) {
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }
   
   
}
export const crearEmpleado = async (req,res) => {
         // CAPTURAMOS LOS DATOS QUE NOS ENVIAN A TRAVES DEL REQUEST
    // LO IDEAL ES VALIDAR LOS DATOS ANTES DE INSERTARLOS.
    const {nombre,telefono,direccion,categoria} = req.body;
    try {
    const [rows] = await pool.query('INSERT INTO empleados (nombre_completo, direccion,telefono,id_categoria) VALUES (?, ? , ?, ?)', 
    [nombre, direccion, telefono, categoria]);
    // DEVUELVO LOS DATOS DEL EMPLEADO CREEADO, MAS EL ID GENERADO PARA ESE REGISTRO.
    res.send({
        id: rows.insertId,
        nombre, 
        direccion, 
        telefono, 
        categoria
    });
    } catch (error) {
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }
    
};

export const modificarEmpleado = async (req,res) => {
    const {id} = req.params;
    const {nombre,telefono,direccion,categoria} = req.body;
    try {
       const [result] = await pool.query('UPDATE empleados SET nombre_completo = IFNULL(?, nombre_completo), direccion =  IFNULL(?, direccion), telefono =  IFNULL(?, telefono), id_categoria = IFNULL(?, id_categoria) WHERE id_empleado = ?', [nombre,direccion,telefono,categoria,id]);
        console.log(result);
        if(result.affectedRows > 0) {
            const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
            res.json(rows[0]);
        }else{
            res.status(404).json({message: "Empleado no encontrado"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }

  
};

export const eliminarEmpleado = async (req,res) => {
    try {
        const id_cliente = req.params.id;
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id_cliente]);
        console.log(result);
        if(result.affectedRows > 0){
            res.send('Empleado eliminado');
        }else{
            res.status(404).send('Error:No eliminado');
        }
        
    } catch (error) {
        return res.status(500).json({message : 'Ha ocurrido un error'});
    }
   
};