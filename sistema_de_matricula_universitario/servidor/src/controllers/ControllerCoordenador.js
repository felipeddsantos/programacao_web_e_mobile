const banco = require("../config/Banco")

exports.inserirCoordenador = async (req, res) => {
    
    const{nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso} = req.body
    console.log(req.body)

    const resposta = await banco.query("INSERT INTO tabela_coordenadores (nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso) VALUES ($1, $2, $3, crypt($4, gen_salt('md5')), $5, $6, $7, $8, $9)",
        [nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso]
    )

    console.log(resposta)

    res.status(201).send({

        message: "Coordenador inserido com sucesso",
        body: {coordenador: {nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso}}
    })
}

exports.logarCoordenador = async (req, res) => {
    
    const{registro, senha} = req.body
    console.log(req.body)

    const resposta = await banco.query("SELECT * FROM tabela_coordenadores WHERE registro = $1 AND senha = crypt($2, senha)", 
        [registro, senha]
    )
    
    console.log(resposta.rows)

    res.status(200).send(resposta.rows)
}

exports.alterarCoordenador = async (req, res) => {

    const registroAntigo = req.params.registro
    const{nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso} = req.body
    console.log(req.body)
    
    const resposta = await banco.query("UPDATE tabela_coordenadores SET nome = $2, cpf = $3, email = $4, senha = crypt($5, gen_salt('md5')), nascimento = $6, endereco = $7, telefone = $8, registro = $9, curso = $10 WHERE registro = $1",
        [registroAntigo, nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso]
    )

    console.log(resposta)
    
    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Coordenador alterado com sucesso",
            body: {coordenador: {nome, cpf, email, senha, nascimento, telefone, endereco, registro, curso}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Coordenador não alterado",
            body: {coordenador: {nome, cpf, email, senha, nascimento, telefone, endereco, registro, curso}}
        })   
    }
}

exports.procurarCoordenador = async (req, res) => {

    const registro = req.params.registro
    const resposta = await banco.query("SELECT * FROM tabela_coordenadores WHERE registro = $1", [registro])
    res.status(200).send(resposta.rows)
}

exports.removerCoordenador = async (req, res) => {
    
    const registro = req.params.registro
    console.log(registro)

    const resposta = await banco.query("DELETE FROM tabela_coordenadores WHERE registro = $1", [registro])
    console.log(resposta)

    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Coordenador removido com sucesso",
            body: {coordenador: {registro}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Coordenador não removido",
            body: {coordenador: {registro}}
        })    
    } 
}
