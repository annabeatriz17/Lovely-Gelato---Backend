const pool = require("../config/database");

const getAllCouples = async (name) => {
    if (name) {
        const result = await pool.query(
            `SELECT * FROM couples WHERE name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT * FROM couples`
        );
        return result.rows;
    }
};

const getCoupleById = async (id) => {
    const result = await pool.query("SELECT * FROM couples WHERE id = $1", [id]);
    return result.rows[0];
};

const createCouple = async (name, description, photo) => {
    const result = await pool.query(
        "INSERT INTO couples (name, description, photo) VALUES ($1, $2, $3) RETURNING *",
        [name, description, photo]
    );
    return result.rows[0];
};

const updateCouple = async (id, name, description, photo) => {
    const result = await pool.query(
        "UPDATE couples SET name = $1, description = $2, photo = $3 WHERE id = $4 RETURNING *",
        [name, description, photo, id]
    );
    if (result.rowCount === 0) {
        return { error: "Casal não encontrado" };
    }
    return result.rows[0];
};

const deleteCouple = async (id) => {
    const result = await pool.query(
        "DELETE FROM couples WHERE id = $1 RETURNING *",
        [id]
    );
    if (result.rowCount === 0) {
        return { error: "Não foi possível deletar o casal" };
    }
    return { message: "Casal deletado com sucesso" };
};

module.exports = { getAllCouples, getCoupleById, createCouple, updateCouple, deleteCouple };