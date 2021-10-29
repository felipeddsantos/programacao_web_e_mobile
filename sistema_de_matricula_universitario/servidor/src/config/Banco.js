const {Pool} = require("pg")
const dotenv = require("dotenv")

dotenv.config()
console.log(process.env.DATABASE_URL)

const pool = new Pool({

    connectionString: "postgres://postgres:banco@localhost:5432"
})

pool.on('connect', () => {

    console.log("Banco de dados conectado com sucesso")
})

module.exports = {

    query: (text, params) => pool.query(text, params)
}