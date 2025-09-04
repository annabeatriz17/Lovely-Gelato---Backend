const pool = require('../config/database');

const FlavorController = {
    async getAll(req, res) {
        try {
            const result = await pool.query('SELECT * FROM flavors');
            res.status(200).json(result.rows);
        } catch (error) {
            console.error('Erro ao buscar sabores:', error);
            res.status(500).json({ error: 'Erro ao buscar sabores.' });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM flavors WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Sabor não encontrado.' });
            }
            res.status(200).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao buscar sabor:', error);
            res.status(500).json({ error: 'Erro ao buscar sabor.' });
        }
    },

    async create(req, res) {
        try {
            const { name, description, couple_inspiration } = req.body;
            const result = await pool.query(
                'INSERT INTO flavors (name, description, couple_inspiration) VALUES ($1, $2, $3) RETURNING *',
                [name, description, couple_inspiration]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao criar sabor:', error);
            res.status(500).json({ error: 'Erro ao criar sabor.' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM flavors WHERE id = $1', [id]);
            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Sabor não encontrado.' });
            }
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar sabor:', error);
            res.status(500).json({ error: 'Erro ao deletar sabor.' });
        }
    },
};

module.exports = FlavorController;