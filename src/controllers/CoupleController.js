const pool = require('../config/database');

const CoupleController = {
    async getAll(req, res) {
        try {
            const result = await pool.query('SELECT * FROM couples');
            res.status(200).json(result.rows);
        } catch (error) {
            console.error('Erro ao buscar casais:', error);
            res.status(500).json({ error: 'Erro ao buscar casais.' });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM couples WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Casal não encontrado.' });
            }
            res.status(200).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao buscar casal:', error);
            res.status(500).json({ error: 'Erro ao buscar casal.' });
        }
    },

    async create(req, res) {
        try {
            const { name, description, photo } = req.body;
            const result = await pool.query(
                'INSERT INTO couples (name, description, photo) VALUES ($1, $2, $3) RETURNING *',
                [name, description, photo]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao criar casal:', error);
            res.status(500).json({ error: 'Erro ao criar casal.' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM couples WHERE id = $1', [id]);
            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Casal não encontrado.' });
            }
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar casal:', error);
            res.status(500).json({ error: 'Erro ao deletar casal.' });
        }
    },
};

module.exports = CoupleController;