const app = require("./src/App")
const porta = process.env.PORT || 8000

app.listen(porta, () => {
    
    console.log("Servidor rodando na porta", porta)
})
