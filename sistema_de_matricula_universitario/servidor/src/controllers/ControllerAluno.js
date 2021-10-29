const banco = require("../config/Banco")

exports.inserirAluno = async (req, res) => {
    
    const{nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso} = req.body
    console.log(req.body)

    const resposta = await banco.query("INSERT INTO tabela_alunos (nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso) VALUES ($1, $2, $3, crypt($4, gen_salt('md5')), $5, $6, $7, $8, $9)",
        [nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso]
    )

    console.log(resposta)

    res.status(201).send({

        message: "Aluno inserido com sucesso",
        body: {aluno: {nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso}}
    })
}

exports.logarAluno = async (req, res) => {
    
    const{registro, senha} = req.body
    console.log(req.body)

    const resposta = await banco.query("SELECT * FROM tabela_alunos WHERE registro = $1 AND senha = crypt($2, senha)", 
        [registro, senha]
    )
    
    console.log(resposta.rows)

    res.status(200).send(resposta.rows)
}

exports.alterarAluno = async (req, res) => {

    const registroAntigo = req.params.registro
    const{nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso} = req.body
    console.log(req.body)
    
    const resposta = await banco.query("UPDATE tabela_alunos SET nome = $2, cpf = $3, email = $4, senha = crypt($5, gen_salt('md5')), nascimento = $6, endereco = $7, telefone = $8, registro = $9, curso = $10 WHERE registro = $1",
        [registroAntigo, nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso]
    )

    console.log(resposta)
    
    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Aluno alterado com sucesso",
            body: {aluno: {nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Aluno não alterado",
            body: {aluno: {nome, cpf, email, senha, nascimento, endereco, telefone, registro, curso}}
        })   
    }
}

exports.procurarAluno = async (req, res) => {

    const registro = req.params.registro
    const resposta = await banco.query("SELECT * FROM tabela_alunos WHERE registro = $1", [registro])
    res.status(200).send(resposta.rows)
}

exports.removerAluno = async (req, res) => {
    
    const registro = req.params.registro
    console.log(registro)

    const resposta = await banco.query("DELETE FROM tabela_alunos WHERE registro = $1", [registro])
    console.log(resposta)

    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Aluno removido com sucesso",
            body: {aluno: {registro}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Aluno não removido",
            body: {aluno: {registro}}
        })    
    } 
}
