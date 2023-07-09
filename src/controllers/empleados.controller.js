import {pool} from '../db.js'

export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mensaje : "Algo salió mal"
        })
    }

}

export const getEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({
                mensaje : "Empleado no encontrado"
            })
        }
        res.json(rows[0])      
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal"
        })
    }

}

export const postEmpleados = async (req, res) => {
    try {
        const { nombre, salario } = req.body; // Obtener nombre y salario del cuerpo de la solicitud
        const [rows] = await pool.query('INSERT INTO empleados(nombre,salario) VALUES (?, ?)', [nombre, salario])
        res.send({
            id: rows.insertId,
            nombre,
            salario
        })
        
    } catch (error) {
        return res.status(500).json({
            mensaje: "Algo salió mal"
        })
    }

}

export const patchEmpleados = async (req, res) => {
    try {
        const {id} = req.params
    const {nombre, salario} = req.body
    
    const [result] = await pool.query('UPDATE empleados SET nombre=IFNULL(?,nombre),salario=IFNULL(?,salario) WHERE id=?',[nombre,salario,id])

    console.log(result)

    if (result.affectedRows === 0) {
        return res.status(404).json({
            mensaje : 'Empleado no encontrado'
        })
    }

    const [rows] = await pool.query('SELECT * FROM empleados WHERE id=?',[id])

    res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            mensaje: "Algo salió mal"
        })
    }
}

export const deleteEmpleados = async (req, res) => {
    try {
        const [resultado] = await pool.query('DELETE FROM empleados WHERE id = ?', [req.params.id])
        console.log(resultado)
    
        if (resultado.affectedRows <= 0) {
            return res.status(404).json({
                mensaje : "Empleado no encontrado"
            })
        }
    
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            mensaje: "Algo salió mal"
        })
    }
}