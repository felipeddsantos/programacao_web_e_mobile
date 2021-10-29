const banco = require("../config/Banco")

exports.inserirRequisicao = async (req, res) => {
    
    const aluno = req.params.registro
    const disciplina = req.body
    console.log(disciplina)

    for(let i = 0; i < disciplina.length; i++){

        const resposta = await banco.query("INSERT INTO tabela_requisicoes (aluno, disciplina) VALUES ($1, $2)",
            [aluno, disciplina[i]]
        )

        console.log(resposta)
    }

    res.status(201).send({

        message: "Requisição inserida com sucesso",
        body: {aluno: {disciplina}}
    })
}

exports.procurarRequisicoes = async (req, res) => {

    const registro = req.params.registro
    const resposta = await banco.query("SELECT tabela_requisicoes.id, aluno, disciplina, tabela_disciplinas.nome nome_disciplina, tabela_alunos.nome nome_aluno FROM tabela_requisicoes INNER JOIN tabela_disciplinas ON disciplina = codigo INNER JOIN tabela_alunos ON registro = aluno WHERE tabela_disciplinas.curso = (SELECT curso FROM tabela_coordenadores WHERE registro = $1)", 
        [registro]
    )
    
    res.status(200).send(resposta.rows)
}

exports.removerRequisicoes = async (req, res) => {
    
    const requisicoes = req.body
    console.log(requisicoes)

    for(let i = 0; i < requisicoes.length; i++){

        const resposta = await banco.query("DELETE FROM tabela_requisicoes WHERE aluno = $1 AND disciplina = $2", 
            [requisicoes[i].aluno, requisicoes[i].disciplina]
        )
        
        console.log(resposta)
    }

    res.status(201).send({

        message: "Requisições removidas com sucesso",
        body: {requisicoes}
    }) 
}
