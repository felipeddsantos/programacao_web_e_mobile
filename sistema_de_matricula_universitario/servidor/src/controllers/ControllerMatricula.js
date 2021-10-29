const banco = require("../config/Banco")

exports.inserirMatriculas = async (req, res) => {
    
    const matriculas = req.body
    console.log(req.body)

    for(let i = 0; i < matriculas.length; i++){

        const resposta = await banco.query("INSERT INTO tabela_matriculas (aluno, disciplina, nota, faltas) VALUES ($1, $2, $3, $4)",
            [matriculas[i].aluno, matriculas[i].disciplina, 0, 0]
        )

        console.log(resposta)
    }

    res.status(201).send({

        message: "Matrículas inseridas com sucesso",
        body: {matriculas}
    })
}

exports.alterarMatriculas = async (req, res) => {

    const disciplina = req.params.codigo
    const matriculas = req.body
    console.log(req.body)
    
    for(let i = 0; i < matriculas.length; i++){

        const resposta = await banco.query("UPDATE tabela_matriculas SET nota = $3, faltas = $4 WHERE aluno = $1 AND disciplina = $2",
            [matriculas[i].aluno, disciplina, matriculas[i].nota, matriculas[i].faltas]
        )

        console.log(resposta)
    }

    res.status(201).send({

        message: "Matrículas alteradas com sucesso",
        body: {matriculas}
    }) 
} 

exports.procurarMatriculasAluno = async (req, res) => {

    const aluno = req.params.registro
    const resposta = await banco.query("SELECT nome, disciplina, nota, faltas FROM tabela_matriculas INNER JOIN tabela_disciplinas ON disciplina = codigo WHERE aluno = $1", 
        [aluno]
    )
    
    res.status(200).send(resposta.rows)
}

exports.procurarMatriculasProfessor = async (req, res) => {

    const disciplina = req.params.codigo
    const resposta = await banco.query("SELECT registro, nome, nota, faltas FROM tabela_matriculas INNER JOIN tabela_alunos ON aluno = registro WHERE disciplina = $1", 
        [disciplina]
    )
 
    res.status(200).send(resposta.rows)
}
