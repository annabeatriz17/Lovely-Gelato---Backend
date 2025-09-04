const pool = require("../config/database");

const getAllFlavors = async (name) => {
    if (name) {
        const result = await pool.query(
            `SELECT * FROM flavors WHERE name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT * FROM flavors`
        );
        return result.rows;
    }
};

const getFlavorById = async (id) => {
    const result = await pool.query("SELECT * FROM flavors WHERE id = $1", [id]);
    return result.rows[0];
};

const createFlavor = async (name, description, coupleInspiration) => {
    const result = await pool.query(
        "INSERT INTO flavors (name, description, couple_inspiration) VALUES ($1, $2, $3) RETURNING *",
        [name, description, coupleInspiration]
    );
    return result.rows[0];
};

const updateFlavor = async (id, name, description, coupleInspiration) => {
    const result = await pool.query(
        "UPDATE flavors SET name = $1, description = $2, couple_inspiration = $3 WHERE id = $4 RETURNING *",
        [name, description, coupleInspiration, id]
    );
    if (result.rowCount === 0) {
        return { error: "Sabor não encontrado" };
    }
    return result.rows[0];
};

const deleteFlavor = async (id) => {
    const result = await pool.query(
        "DELETE FROM flavors WHERE id = $1 RETURNING *",
        [id]
    );
    if (result.rowCount === 0) {
        return { error: "Não foi possível deletar o sabor" };
    }
    return { message: "Sabor deletado com sucesso" };
};

module.exports = { getAllFlavors, getFlavorById, createFlavor, updateFlavor, deleteFlavor };