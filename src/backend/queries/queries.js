const pool = require('../models/pool');

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const getUser = (request, response) => {
    const name = request.params.name;
    const email = request.params.email;

    pool.query('SELECT * FROM users WHERE name = $1 AND email = $2', [name,email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

const createUser = (request, response) => {
    const {name, email, role} = request.body;
    pool.query('INSERT INTO users (name, email, role) VALUES ($1, $2, $3)', [name, email, role], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const {name, email} = request.body;

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    )
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    })
};

const getTransactions = (request, response) => {
    pool.query('SELECT * FROM transactions ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const getTransactionById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM transactions WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

const getTransactionsCount = (request, response) => {

    pool.query('SELECT COUNT (*) FROM transactions',  (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(parseInt(results.rows[0].count));
    })
};

const getTransactionsByUserId = (request, response) => {
    const user_id = parseInt(request.params.id);
    const limit = parseInt(request.params.limit);
    const offset = parseInt(request.params.offset);

    pool.query('SELECT * FROM transactions WHERE user_id = $1 LIMIT $2 OFFSET $3', [user_id,limit,offset], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const createTransaction = (request, response) => {
    const {user_id, type, value, comment} = request.body;
    pool.query('INSERT INTO transactions (user_id,type,value,comment) VALUES ($1, $2, $3,$4)', [user_id, type, value, comment], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const updateTransaction = (request, response) => {
    const id = parseInt(request.params.id);
    const {name, email} = request.body;

    pool.query(
        'UPDATE transactions SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    )
};

const deleteTransaction = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM transactions WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    })
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getTransactions,
    getTransactionsCount,
    getTransactionById,
    getTransactionsByUserId,
    createTransaction,
    updateTransaction,
    deleteTransaction
};