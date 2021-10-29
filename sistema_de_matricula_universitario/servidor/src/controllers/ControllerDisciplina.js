const banco = require("../config/Banco")

exports.inserirDisciplina = async (req, res) => {
    
    const{nome, codigo, professor, curso, periodo, carga} = req.body
    console.log(req.body)

    const resposta = await banco.query("INSERT INTO tabela_disciplinas (nome, codigo, professor, curso, periodo, carga) VALUES ($1, $2, $3, $4, $5, $6)",
        [nome, codigo, professor, curso, periodo, carga]
    )

    console.log(resposta)

    res.status(201).send({

        message: "Disciplina inserida com sucesso",
        body: {disciplina: {nome, codigo, professor, curso, periodo, carga}}
    })
}

exports.alterarDisciplina = async (req, res) => {

    const codigoAntigo = req.params.codigo
    const{nome, codigo, professor, periodo, carga} = req.body
    console.log(req.body)
    
    const resposta = await banco.query("UPDATE tabela_disciplinas SET nome = $2, codigo = $3, professor = $4, periodo = $5, carga = $6 WHERE codigo = $1",
        [codigoAntigo, nome, codigo, professor, periodo, carga]
    )

    console.log(resposta)
    
    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Disciplina alterada com sucesso",
            body: {disciplina: {nome, codigo, professor, periodo, carga}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Disciplina não alterada",
            body: {disciplina: {codigo, nome, novoCodigo, professor, periodo, carga}}
        })   
    }
}

exports.procurarDisciplina = async (req, res) => {

    const codigo = req.params.codigo
    const resposta = await banco.query("SELECT * FROM tabela_disciplinas WHERE codigo = $1", [codigo])
    res.status(200).send(resposta.rows)
}

exports.procurarDisciplinasAluno = async (req, res) => {

    const aluno = req.params.registro
    const resposta = await banco.query("SELECT * FROM tabela_disciplinas WHERE NOT EXISTS (SELECT disciplina FROM tabela_requisicoes WHERE aluno = $1 AND disciplina = codigo) AND NOT EXISTS (SELECT disciplina FROM tabela_matriculas WHERE aluno = $1 AND disciplina = codigo)", 
        [aluno]
    )

    res.status(200).send(resposta.rows)
}

exports.procurarDisciplinasProfessor = async (req, res) => {

    const professor = req.params.registro
    const resposta = await banco.query("SELECT * FROM tabela_disciplinas WHERE professor = $1", [professor])
    res.status(200).send(resposta.rows)
}

exports.procurarDisciplinasCoordenador = async (req, res) => {

    const registro = req.params.registro
    const resposta = await banco.query("SELECT * FROM tabela_disciplinas WHERE curso = (SELECT curso FROM tabela_coordenadores WHERE registro = $1)", [registro])
    res.status(200).send(resposta.rows)
}

exports.removerDisciplina = async (req, res) => {
    
    const codigo = req.params.codigo
    console.log(codigo)

    const resposta = await banco.query("DELETE FROM tabela_disciplinas WHERE codigo = $1", [codigo])
    console.log(resposta)

    if(resposta.rowCount > 0){

        res.status(201).send({

            message: "Disciplina removida com sucesso",
            body: {disciplina: {codigo}}
        }) 
    }

    else{

        res.status(201).send({

            message: "Disciplina não removida",
            body: {disciplina: {codigo}}
        })    
    } 
}
